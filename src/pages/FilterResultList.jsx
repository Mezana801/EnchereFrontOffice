import React, { Component,useState, useEffect  } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import FilterSideBar from "../component/FilterSideBar";
import EnchereList from "../component/EnchereList";
import { useLocation } from 'react-router-dom'

const FilterResultList = () => {
    const location = useLocation();
    console.log("LOCATIOiiN "+JSON.stringify(location));   
    const encheres = location?.state?.props;

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
        getAllCategorie();
    },[]);

    return (
        <div>
            <Header></Header>
            <body className="cnt-home">
                <div className="body-content outer-top-xs" id="top-banner-and-menu">
                    <div className="container">
                        <div className='row'>
                            <div class='col-md-3 sidebar'>
                                <FilterSideBar data={categories}></FilterSideBar>
                            </div>
                            <EnchereList data={encheres}></EnchereList>
                        </div>
                    </div>
                </div>
                
            </body>
            <Footer></Footer>
        </div>
    )
}

export default FilterResultList