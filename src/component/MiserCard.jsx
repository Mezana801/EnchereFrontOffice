import React, {  useState } from "react";
import MiserList from "./MiseList";
import './assets/css/alert.css'

const MiserCard = (props) => {
    const [montant, setMontant] = useState("");
    const [message, setMessage] = useState("");
    const mises = props?.data;
    const userLogged = localStorage.getItem('token');
    const token = userLogged.replace(/[""]+/g, '');

    const miserAction = async (e) => {
        e.preventDefault();
        try {
            
            const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/miseenchere/addMise";
            fetch(url, {
               method: 'POST',
               headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
               body: JSON.stringify({
                    montantMax: montant,
                    token: token,
                    enchereID: props?.id
               })
            }).then(res => res.json())
            .then(data =>{
                if( data?.status === "200" ){
                    setMessage(
                        <div className="successAlert">
                            <p>{data?.data}</p>
                        </div>
                    );
                } else{
                    setMessage(
                        <div className="errorAlert">
                            <p>{data?.data}</p>
                        </div>
                    );
                }
               
            }) 
        } catch (err) {
          console.log(err);
        }
      };

    return (
            <div class="col-md-4" >
                <div class="checkout-progress-sidebar ">
                    <div class="panel-group">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <center><h4 class="unicase-checkout-title">Mises</h4></center>
                            </div>
                            <br />
                            {message}
                            <div class="" style={{padding: 10}}>
                                <div className="row">
                                     <div className="col-md-8">
                                         <input type="number" placeholder="Montant" className="form-control unicase-form-control text-input" style={{width: 200, height: 35}}  onChange={(e) => setMontant(e.target.value)} />
                                     </div>
                                     <div className="col-md-4">
                                         <button className="btn btn-primary" style={{height: 35}}  onClick={miserAction}> Miser</button>
                                     </div>
                                </div>
                               
                                <br /><br />
                                <MiserList data={mises}></MiserList>     
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
    )
}
export default MiserCard