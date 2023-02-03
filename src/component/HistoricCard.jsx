import React, { Component,useState, useEffect  } from "react";

const HistoricCard = (props) => {
    const historiques = props?.data;
    const usd = new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0
    });

    function toFRDate(date){
        return new Date(date).toLocaleString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
    }

    function cardWinner(winnerPerson){
        return (
            <div className="statutEnchere">
                <p>Etat : <span style={{backgroundColor: "#FE96A0", paddingLeft: 10, paddingRight: 10, borderRadius: 20, color: "#ED0000", fontWeight: 'bolder'}}>Terminé</span></p>
                <p>Gagnant(e) : <b>{winnerPerson?.utilisateurs?.nom} {winnerPerson?.utilisateurs?.prenom} <span style={{color: "#59b210"}}>{usd.format(winnerPerson?.montantmax)} Ar</span></b></p>
            </div>
        )
    }
    function getStateEnchere(enchere){
        if( enchere?.status === 1 ){
            return cardWinner(enchere?.maxMise);

        } else if( enchere?.status === 0 ){
            return(
            <div className="statutEnchere">
                <p>Etat : <span style={{backgroundColor: "#85C17E", paddingLeft: 10, paddingRight: 10, borderRadius: 20, color: "#00561B", fontWeight: 'bolder'}}>En cours</span></p>
            </div>)
        } else if( enchere?.status === 2 ){
            return(
            <div className="statutEnchere">
                <p>Etat : <span style={{backgroundColor: "#A9EAFE", paddingLeft: 10, paddingRight: 10, borderRadius: 20, color: "#003366", fontWeight: 'bolder'}}>A venir</span></p>
            </div>)
        }
    }

    return (
        <div className="col-sm-12 col-md-12">
            { historiques.map(historique => {
                return (
                    <div className="row" style={{ marginBottom: 25, backgroundColor: 'white', padding: 10 }}>
                        <div className="col-sm-6 col-md-6">
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <img src={"/assets/images/"+historique.coverphoto} style={{objectFit: "cover", objectPosition: "center"}} width={150} height={150}/>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <h3 className="name">Lot N°{historique.id}</h3>
                                    <p>Début : {toFRDate(historique?.dateetheure)}</p>
                                    <p>Durée: {historique?.dureeenchere}</p>
                                    <p>Prix: <span style={{color: "#59b210"}}>{usd.format(historique.prixdemise)} Ar</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <h4>Description</h4>
                            <hr />
                            <p>{historique?.description}</p>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <h4>Statut</h4>
                            <hr />
                            {getStateEnchere(historique)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HistoricCard