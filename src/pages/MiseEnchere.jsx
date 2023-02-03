import React, { Component,useState, useEffect  } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import EnchereCard from "../component/EnchereCard";
import MiserCard from "../component/MiserCard";

import {useParams  } from 'react-router-dom';

const MiseEnchere = () => {
    const {id} = useParams();
    const [enchere,setenchere] = useState([]);
    const [mises,setMises] = useState([]);
    let props = {
        data: mises,
        id: id
    }

    const getAllMisesRecent = async () => {
        const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/miseenchere/getRecentMises";
        await fetch(url, {
           method: 'POST',
           headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
           body: JSON.stringify({
                id: id
           })
        }).then(res => res.json())
        .then(data =>{
            console.log("mises limit 10 "+JSON.stringify(data?.data));
            setMises(data?.data);
        }) 
        .catch (err => {
            console.log("Erreur "+err);
        });
    }

    const getEnchere = () => {
        const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/enchere/"+id;
        fetch(url, {
           method: 'GET',
           headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
        }).then(res => res.json())
        .then(data => {
            setenchere(data?.data);
        }) 
    }

    useEffect( () => {
        getEnchere();
        getAllMisesRecent();
    },[]);

    return (
        <div>
            <Header></Header>
            <body className="cnt-home">
                <div class="body-content outer-top-xs">
                    <div className="container">
                        <div className='row single-product'>
                            <div className='col-md-8'>
                                <EnchereCard data={enchere}></EnchereCard>
                            </div>
                            <MiserCard {...props}></MiserCard>
                        </div>
                    </div>
                </div>
            </body>
            <Footer></Footer>
        </div>
    )
}

export default MiseEnchere