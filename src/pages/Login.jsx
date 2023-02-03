import React, { useState  } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const LoginForm = () => {
    const [email, setEmail] = useState("rakotosonjean@gmail.com");
    const [pwd, setPwd] = useState("jean");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const location = useLocation();
    const enchereID = location?.state?.id;

    const loginAction = async (e) => {
        e.preventDefault();
        try {
            const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/user/login";
            fetch(url, {
               method: 'POST',
               headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
               body: JSON.stringify({
                    email: email,
                    password: pwd
               })
            }).then(res => res.json())
            .then(data =>{
                console.log("enchereID vita login "+enchereID);
                if( data?.status === "200" ){
                   localStorage.setItem('token', JSON.stringify(data?.data));
                   if( enchereID !== undefined ){
                        navigate("/miser/"+enchereID);
                    } else{
                        navigate("/");
                    }
                    
                } else{
                    setMessage(data?.data);
                }
               
            }) 
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div>
            <Header></Header>
            <div class="body-content">
                <div class="container">
                    <div class="sign-in-page">
                        <div class="row">
                            <div class="col-md-3 col-sm-3">
                            </div>
                            <div class="col-md-4 col-sm-4 sign-in">
                                <h4 class="">LOG IN</h4>
                                <p class="">Veuillez vous connecter pour continuer.</p>
                                <p style={{color: "tomato"}}>{message}</p>
                               
                                <form class="register-form outer-top-xs" role="form" onSubmit={loginAction}>
                                    <div class="form-group">
                                        <label class="info-title" for="exampleInputEmail1">Email </label>
                                        <input type="email" class="form-control unicase-form-control text-input" value={"rakotosonjean@gmail.com"} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" />
                                    </div>
                                    <div class="form-group">
                                        <label class="info-title" for="exampleInputPassword1">Mot de passe </label>
                                        <input type="password" class="form-control unicase-form-control text-input" value={"jean"} onChange={(e) => setPwd(e.target.value)} id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Se connecter</button>
                                </form>					
                            </div>
                            <div class="col-md-3 col-sm-3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default LoginForm