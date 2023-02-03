import React from "react";

const HeaderCarroussel = () => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">			
        <div id="hero">
            <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
           
                <div className="item" style={{"backgroundImage": 'url(/assets/images/sliders/bid4.jpg)'}}>
                    <div className="container-fluid">
                        <div className="caption bg-color vertical-center text-left">
                            <div className="slider-header fadeInDown-1"></div>
                            <div className="big-text fadeInDown-1"  style={{color: 'black', fontFamily: 'cursive'}}>
                               Mada-Enchere
                            </div>

                            <div className="excerpt fadeInDown-2 hidden-xs">

                            </div>
                            <div className="button-holder fadeInDown-3">
                                <span style={{color: 'black', fontSize: 18, fontWeight: "bolder"}}>Le site pour lancer vos enchères à votre prix.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item" style={{"backgroundImage": 'url(/assets/images/sliders/bid5.jpeg)'}}>
                    <div className="container-fluid">
                        <div className="caption bg-color vertical-center text-left">
                            <div className="big-text fadeInDown-1">
                                 <span className="highlight">Qualité</span>
                            </div>

                            <div className="excerpt fadeInDown-2 hidden-xs">
                            
                            </div>
                            <div className="button-holder fadeInDown-3">
                            <span style={{fontSize: 18, fontWeight: "bolder"}}>Trouvez des lots de votre choix et commencez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeaderCarroussel