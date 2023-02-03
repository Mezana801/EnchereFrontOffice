import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const FilterSideBar = (props) => {
    const [statut, setStatut] = useState(10);
    const [categorie, setCategorie] = useState("");
    const [prixmin, setPrixmin] = useState("");
    const [prixmax, setPrixmax] = useState("");
    const [date, setDate] = useState("");
    const [motcle, setMotcle] = useState("");

    const navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://wsfrontofficemobile-production-f9f5.up.railway.app/enchere/search";
            fetch(url, {
               method: 'POST',
               headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json'},
               body: JSON.stringify({
                    status: statut,
                    categorieid: categorie,
                    prixmin: prixmin,
                    prixmax: prixmax,
                    dateetheure: date,
                    description: motcle
               })
            }).then(res => res.json())
            .then(data =>{
                navigate("/filter", {
                    state: {
                        props: data?.data
                    },
                });
            }) 
        } catch (err) {
          console.log(err);
        }
      };

    const categories = props.data;   
    return (
        <div className="sidebar-module-container" >
            <div className="sidebar-filter">
                <div className="sidebar-widget wow fadeInUp">
                    <h3 className="section-title">Filtrer</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="widget-header">
                            <h4 className="widget-title">Statut</h4>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="accordion">
                                <div className="accordion-group">
                                    <div className="accordion-heading">
                                        <p>
                                            <input type="radio" name="statut" value={2} onChange={(e) => setStatut(e.target.value)}/> A venir &nbsp;&nbsp;
                                            <input type="radio" name="statut" value={0} onChange={(e) => setStatut(e.target.value)}/> En cours &nbsp;&nbsp;
                                            <input type="radio" name="statut" value={1} onChange={(e) => setStatut(e.target.value)}/> Terminé &nbsp;&nbsp;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget-header">
                            <h4 className="widget-title">Catégorie</h4>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="accordion">
                                <div className="accordion-group">
                                    <div className="accordion-heading">
                                        <select className="dropdown dropdown-small" onChange={(e) => setCategorie(e.target.value)}  name="categorie">
                                            <option value="0">Tous</option>
                                            { categories.map(categorie => {
                                                return (
                                                    <option value={categorie.id}>{categorie.nom}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="widget-header">
                            <h4 className="widget-title">Prix</h4>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="accordion">
                                <div className="accordion-group">
                                    <div className="accordion-heading">
                                       <input type="number" name="prixmin" onChange={(e) => setPrixmin(e.target.value)} style={{ width: 100 }} placeholder="min"/> &nbsp; &nbsp;
                                       <input type="number" name="prixmax" onChange={(e) => setPrixmax(e.target.value)} style={{ width: 100 }} placeholder="max"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="widget-header">
                            <h4 className="widget-title">Date</h4>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="accordion">
                                <div className="accordion-group">
                                    <div className="accordion-heading">
                                    <input type="date" onChange={(e) => setDate(e.target.value)} name="date"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="widget-header">
                            <h4 className="widget-title">Mot clé</h4>
                        </div>
                        <div className="sidebar-widget-body">
                            <div className="accordion">
                                <div className="accordion-group">
                                    <div className="accordion-heading">
                                    <textarea name="motcle" onChange={(e) => setMotcle(e.target.value)} cols="20" rows="1"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <p><input type="submit" value="Appliquer" className="lnk btn btn-primary"/></p>
                    </form>
                </div>
            </div>
           </div>
    )

}

export default FilterSideBar