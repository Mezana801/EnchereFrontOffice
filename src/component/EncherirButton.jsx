import React from "react";
import { useNavigate } from "react-router-dom";

const EncherirButton = (props) => {
    const enchereID = props?.id;
    const userLogged = localStorage.getItem("token");
    const navigate = useNavigate();
    
    const encherirAction = () => {
        console.log("stor "+userLogged);
        if( userLogged == null ){
            navigate("/login", {
                state: {
                    id: enchereID
                },
            });
        } else if( userLogged != null ){
            navigate("/miser/"+enchereID);
        }
    }

    return (
        <div className="btn btn-primary">
            <i className="fa fa-shopping-cart inner-right-vs"></i>
            <button className="btn btn-primary" onClick={encherirAction}> Enchérir</button>
        </div>
            
    )
}
export default EncherirButton