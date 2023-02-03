import React, { Component,useState, useEffect  } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import EnchereCard from "../component/EnchereCard";
import CategorieSideBar from "../component/CategorieSideBar";

import '../component/assets/css/bootstrap.min.css'
import '../component/assets/css/main.css'
import '../component/assets/css/blue.css'
import '../component/assets/css/owl.carousel.css'
import '../component/assets/css/owl.transitions.css'
import '../component/assets/css/animate.min.css'
import '../component/assets/css/rateit.css'
import '../component/assets/css/bootstrap-select.min.css'
import '../component/assets/css/font-awesome.css'

import {useParams  } from 'react-router-dom';

const EnchereDetail = () => {
    const {id} = useParams();
    const [enchere,setenchere] = useState([]);

    const getEnchere = () => {
        const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/enchere/"+id;
        fetch(url, {
           method: 'GET',
           headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(res => res.json())
        .then(data =>{
            setenchere(data.data);
        }) 
    }

    const [categories,setcategories] = useState([]);

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

    useEffect( () => {
        getEnchere();
        getAllCategorie();
    },[]);

    return (
        <div>
            <Header></Header>
            <body className="cnt-home">
                <div class="body-content outer-top-xs">
                    <div className="container">
                        <div class='row single-product'>
                            <div class='col-md-3 sidebar'>
                                <CategorieSideBar data={categories}></CategorieSideBar>
                            </div>
                            <div className='col-md-9'>
                                <EnchereCard data={enchere}></EnchereCard>
                            </div>                       
                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default EnchereDetail