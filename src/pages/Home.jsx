import React, { Component,useState, useEffect  } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideBar from "../component/SideBar";
import EnchereList from "../component/EnchereList";
import HeaderCarroussel from "../component/HeaderCarroussel";

const Home = () => {
    const [encheres,setencheres] = useState([]);

    const getAllEnchere = () => {
        const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/enchere/home";
        fetch(url, {
           method: 'GET',
           headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(res => res.json())
        .then(data =>{
            setencheres(data.data);
        }) 
    }

    useEffect( () => {
        getAllEnchere();
    },[]);

    return (
        <div>
            <Header></Header>
            <body className="cnt-home">
                <div className="body-content outer-top-xs" id="top-banner-and-menu">
                    <div className="container">
                        <div className='row'>
                            <SideBar></SideBar>
                            <HeaderCarroussel></HeaderCarroussel>
                            <EnchereList data={encheres}></EnchereList>
                        </div>
                    </div>
                </div>
                
            </body>
            <Footer></Footer>
        </div>
    )
}

export default Home