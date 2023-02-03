import React, { Component, useState, useEffect } from "react";

const MiserList = (props) => {
    const mises = props?.data;
    const misesList = [];
    var i = 0;
    const usd = new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0
    });

    mises?.forEach((mise, row) => {
       if( i == 0 ){
            misesList.push(
                <div className="row">
                    <div className="col-md-8">
                        {mise?.utilisateurs?.nom} {mise?.utilisateurs?.prenom}
                    </div>
                    <div className="col-md-4">
                    <span style={{fontWeight: "bolder", color: "tomato", fontSize: 14 }}>  {usd.format(mise?.montantMax)} Ar</span>
                    </div>
                    <hr />
                </div>
            );
       } else{
            misesList.push(
                <div className="row">
                    <div className="col-md-8">
                        {mise?.utilisateurs?.nom} {mise?.utilisateurs?.prenom}
                    </div>
                    <div className="col-md-4">
                        <span style={{fontWeight: "bolder"}}> {usd.format(mise?.montantMax)} Ar</span>
                    </div>
                    <hr />
            </div>
        );
       }
        i ++;
    })

        return (
            <div className="listeMise" style={{padding: 15}}>
                {misesList}
            </div>
        )
}
export default MiserList