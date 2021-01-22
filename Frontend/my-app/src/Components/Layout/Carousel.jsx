import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
}

function Carousel(props) {
    return (
        <Slider {...settings}>

        <div className="banners">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/AcBAUMonsoon2020/Ac_header_PC.jpg" alt=""/>
        </div>
        <div className="banners">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/BAU/Amazonbasics/AB_TV_B_1500x300.jpg" alt=""/>
        </div>
        <div className="banners">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/April/header/D16066823_IN_HETV_TV_CLP_TVHeader_BAUnewtheme_PC_CLP_1500x300" alt=""/>
        </div>
        <div className="banners">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/Ref_revamp2020/3april/Refrigerator-Revamp-page-1500-x-300-Banner._CB1586094282_.png" alt=""/>
        </div>

    </Slider>

    );
}

export default Carousel;