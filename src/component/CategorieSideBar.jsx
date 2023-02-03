import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const CategorieSideBar = (props) => {
    const navigate = useNavigate();

    let handleSubmit = async (categorieid) => {
        console.log("value "+categorieid);
        try {
            const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/enchere/search";
            fetch(url, {
               method: 'POST',
               headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
               body: JSON.stringify({
                    categorieid: categorieid, 
                    status: 10
               })
            }).then(res => res.json())
            .then(data =>{
                navigate("/filter", {
                    state: {
                        props: data?.data
                    },
                });
            }) 
        } catch (err) {
          console.log(err);
        }
    };

    const categories = props.data;   
        return (
            <div className="side-menu animate-dropdown outer-bottom-xs">
                <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>        
                <nav className="yamm megamenu-horizontal" role="navigation">
                    <ul className="nav"> 
                        { categories.map(categorie => {
                        return (
                            <li><a onClick={(e) => {handleSubmit(categorie?.id)}}>{categorie.nom}</a></li>
                        )
                        })}
                    </ul>
                </nav>
            </div>   
        )
}
export default CategorieSideBar