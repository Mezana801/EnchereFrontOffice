import React  from "react";
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const encheres = props.data; 
    const usd = new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0
    });

    if( encheres.length > 0 ){
        return (
            <div className='col-md-9'>
            <div className="clearfix filters-container m-t-10">
                <div className="row">
                    <div className="col col-sm-6 col-md-2">
                        <div className="filter-tabs">
                            <ul id="filter-tabs" className="nav nav-tabs nav-tab-box nav-tab-fa-icon">
                                <li className="active">
                                    <a data-toggle="tab" href="#grid-container"><i className="icon fa fa-th-large"></i>Grid</a>
                                </li>
                                <li><a data-toggle="tab" href="#list-container"><i className="icon fa fa-th-list"></i>List</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-6">
                        
                    </div>
                    <div className="col col-sm-6 col-md-4 text-right">
                        <div className="pagination-container">
                            <ul className="list-inline list-unstyled">
                                <li className="prev"><a ><i className="fa fa-angle-left"></i></a></li>
                                <li><a >1</a></li>	
                                <li className="active"><a >2</a></li>	
                                <li><a >3</a></li>	
                                <li><a >4</a></li>	
                                <li className="next"><a ><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-result-container ">
                <div id="myTabContent" className="tab-content category-list">
                    <div className="tab-pane active " id="grid-container">
                        <div className="category-product">
                            <div className="row">	
                                { encheres.map(enchere => {
                                    return (
                                    <div className="col-sm-6 col-md-4 wow fadeInUp">
                                        <div className="products">
                                            <div className="product">
                                                <div className="product-image">
                                                    <div className="image">
                                                        <Link to = {'/'+enchere.id}><img src={"https://wsfrontofficemobile-production-f9f5.up.railway.app/images/"+enchere.coverphoto} style={{objectFit: "cover", objectPosition: "center"}} width={250} height={250}/></Link>
                                                    </div>	             		   
                                                </div>
                                                <div className="product-info text-left">
                                                    <h3 className="name"><a href="detail.html">LOT N° {enchere.id}</a></h3>
                                                        <div class="rating rateit-small"></div>
                                                        <div className="product-price">	
                                                            Prix : 
                                                            <span style={{color: "#59b210", fontSize: 16}}> {usd.format(enchere.prixdemise)} Ar</span>						
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix filters-container">
                    <div className="text-right">
                        <div className="pagination-container">
                            <ul className="list-inline list-unstyled">
                                <li className="prev"><a ><i className="fa fa-angle-left"></i></a></li>
                                <li><a >1</a></li>	
                                <li className="active"><a >2</a></li>	
                                <li><a >3</a></li>	
                                <li><a >4</a></li>	
                                <li className="next"><a ><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    return (
        <center>
            <img src="/assets/images/wait.gif" />
        </center>
      )
}

export default ProductList