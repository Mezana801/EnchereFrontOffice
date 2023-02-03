import React, { Component, useState, useEffect } from "react";
import CategorieSideBar from "./CategorieSideBar";
import FilterSideBar from "./FilterSideBar";

const SideBar = (props) => {
    const [categories,setcategories] = useState([]);

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

        getAllCategorie();
    },[]);

        return (
                <div class='col-md-3 sidebar'>
                    <CategorieSideBar data={categories}></CategorieSideBar>
                    <FilterSideBar data={categories}></FilterSideBar>
                </div>
        )
}
export default SideBar