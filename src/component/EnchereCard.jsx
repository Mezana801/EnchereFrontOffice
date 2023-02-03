import React from "react";
import EncherirButton from "./EncherirButton";

const EnchereCard = (props) => {
    const enchere = props?.data; 
    const photos = enchere?.photos;

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

    if( enchere !== null || enchere !== undefined ){
        return (
            <div className="detail-block">
                <div className="row  wow fadeInUp">
      
                    <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
                        <div className="product-item-holder size-big single-product-gallery small-gallery">
                            <div id="owl-single-product"  height={200}>
                                <div className="single-product-gallery-item" id="slide1">
                                    {/* <a data-lightbox="image-1" data-title="Gallery" href={"assets/images/"+enchere?.coverphoto} > */}
                                        <img alt="" height={250} width={280} src={"https://wsfrontofficemobile-production-f9f5.up.railway.app/images/"+enchere?.coverphoto} style={{objectFit: "cover", objectPosition: "center"}}/>
                                    {/* </a> */}
                                </div>
                            </div>
                            <div >
                                <div>
                                    { photos?.map(photo => {
                                        return (
                                            <div class="item" style={{display: "inline-block", padding: 3}}>
                                                <a data-lightbox="image-1" data-title="Gallery" href={"https://wsfrontofficemobile-production-f9f5.up.railway.app/images/"+photo} >
                                                    <img alt="" class="img-responsive" width={70} height={70} style={{objectFit: "cover", objectPosition: "center"}} src={"https://wsfrontofficemobile-production-f9f5.up.railway.app/images/"+photo} />
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className='col-sm-6 col-md-7 product-info-block'>
                        <div className="product-info">
                            <h1 className="name">Lot N°{enchere.id}</h1>
                                <div className="rating-reviews m-t-20">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div className="rating rateit-small"></div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="reviews">
                                                
                                            </div>
                                        </div>
                                    </div>	
                                </div>
                                <div className="stock-container info-container m-t-10">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <div className="stock-box">
                                                <span className="label">Début :</span>
                                            </div>	
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="stock-box">
                                                <span className="value">{toFRDate(enchere?.dateetheure)}</span>
                                            </div>	
                                        </div>
                                    </div>	
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <div className="stock-box">
                                                <span className="label">Durée :</span>
                                            </div>	
                                        </div>
                                        <div className="col-sm-9">
                                            <div className="stock-box">
                                                <span className="value">{enchere?.dureeenchere} </span> 
                                            </div>	
                                        </div>
                                    </div>	
                                </div>

                                <div className="description-container m-t-20">
                                    {enchere?.description}
                                </div>

                                <div className="price-container info-container m-t-20">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="price-box">
                                                Prix minimum : 
                                                <span style={{color: "#59b210", fontSize: 20}}> {usd.format(enchere.prixdemise)} Ar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quantity-container info-container">
                                    <div className="row">
                                        
                                        <div className="col-sm-2">
                                            
                                        </div>
                                        
                                        <div className="col-sm-2">
                                           
                                        </div>

                                        <div className="col-sm-7">
                                            <EncherirButton id={enchere.id}></EncherirButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )}
        return (
            <center>
                <img src="/assets/images/wait.gif" />
            </center>
          )

    
}

export default EnchereCard