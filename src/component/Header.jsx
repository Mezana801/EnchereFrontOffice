import React, {  useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [logout, setlogout] = useState("");

    const navigate = useNavigate();
    const userLogged = localStorage.getItem("token");
    const [categories,setcategories] = useState([]);


    const actionLogOut = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const actionMyAccount = () => {
        if( userLogged == null ){
            navigate("/login");
        } else{
           navigate("/myaccount");
        }
    }


    useEffect( () => {
        const getAllCategorie = () => {
            const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/categorie";
            fetch(url, {
               method: 'GET',
               headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
            }).then(res => res.json())
            .then(data =>{
                setcategories(data.data);
                console.log("categ "+JSON.stringify(categories));
            }) 
        }

        const menuLogOut = () => {
            if( userLogged != null ){
                setlogout(<a onClick={actionLogOut}>Se déconnecter</a>);
            }
        }
        
       menuLogOut();
       getAllCategorie();
    },[]);


        return (
        <header className="header-style-1">
            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                <li><a href=""><i className="icon fa fa-user"></i>My Account</a></li>
                                <li><a href=""><i className="icon fa fa-heart"></i>Wishlist</a></li>
                                <li><a href=""><i className="icon fa fa-shopping-cart"></i>My Cart</a></li>
                                <li><a href=""><i className="icon fa fa-check"></i>Checkout</a></li>
                                <li><a href=""><i className="icon fa fa-lock"></i>Login</a></li>
                            </ul>
                        </div>

                        <div className="cnt-block">
                            <ul className="list-unstyled list-inline">
                                <li className="dropdown dropdown-small">
                                    <a href="" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="">USD</a></li>
                                        <li><a href="">INR</a></li>
                                        <li><a href="">GBP</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown dropdown-small">
                                    <a href="" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret"></b></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="">English</a></li>
                                        <li><a href="">French</a></li>
                                        <li><a href="">German</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>  
                </div>
            </div>
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                            <div className="logo">
                                <h2 style={{color: 'white', fontFamily: 'cursive', position: 'relative', bottom: '18px'}}>Mada-Enchere</h2>
                            </div>
                        </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                        <div className="search-area">
                            <form>
                                <div className="control-group">
                                    <input className="search-field"  placeholder="Rechercher..." />
                                    <a className="search-button" href="" ></a>    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-nav animate-dropdown">
            <div className="container">
                <div className="yamm navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="nav-bg-className">
                        <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                            <div className="nav-outer">
                                <ul className="nav navbar-nav">
                                    <li className="active dropdown yamm-fw">
                                        <Link to = {'/'}>Acceuil</Link>
                                    </li>
                                    <li className="dropdown yamm mega-menu">
                                        <a href="" onClick={actionMyAccount}>Mon compte</a>
                                    </li>
                                    <li className="active dropdown yamm-fw">
                                       {logout}
                                    </li>
                                </ul>				
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</header>)
}
export default Header