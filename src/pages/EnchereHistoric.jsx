import React, {  useState, useEffect } from "react";
import HistoricCard from "../component/HistoricCard";
import Header from "../component/Header";
import Footer from "../component/Footer";

const EnchereHistoric = () => {
    const userLogged = localStorage.getItem('token');
    const token = userLogged.replace(/[""]+/g, '');
    const [historics,sethistorics] = useState([]);

    useEffect( () => {
        const getHistorics = () => {
            try {
                
                const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/enchere/listeDeMesEncheres";
                fetch(url, {
                   method: 'POST',
                   headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
                   body: JSON.stringify({
                        token: token
                   })
                }).then(res => res.json())
                .then(data =>{
                    if( data?.status === "200" ){
                        sethistorics(data?.data);
                    }
                }) 
            } catch (err) {
              console.log(err);
            }
          };

        getHistorics();
    },[]);

    return (
        <div>
            <Header></Header>
            <body className="cnt-home">
                <div class="body-content outer-top-xs">
                    <div className="container">
                        <div class='row'>
                            <HistoricCard data={historics}></HistoricCard>               
                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}
export default EnchereHistoric