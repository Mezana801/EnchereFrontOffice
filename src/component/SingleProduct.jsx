const SingleProduct = (props) => {
    var photos = props.photos;

    return(
        <div id="owl-single-product">
            {/* { photos?.map(photo => {
                return ( */}
                    <div className="single-product-gallery-item" id="slide1">
                        <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p8.jpg" >
                            <img className="img-responsive" alt="" src="assets/images/lot12_1.webp"/>
                        </a>
                    </div>
                 {/* )
            })}   */}
        </div>
    )
}

export default SingleProduct