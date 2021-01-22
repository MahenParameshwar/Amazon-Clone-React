import React, { useEffect } from 'react';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';
import ProductsContainer from '../Layout/ProductsContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../Styles/home.css"
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../Redux/Cart/action';
import Pagination from '@material-ui/lab/Pagination';
import { makefetchProductsRequest, setPage } from '../../Redux/Product/action';

function Home(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
}

const {loggedUser} = useSelector((state)=>state.login)
const {total,limit,page} = useSelector((state)=>state.products)
const dispatch =   useDispatch();

useEffect(()=>{
  dispatch(setCart(loggedUser.cart))
},[])

const getPages = () => {
  if (total % limit === 0) return total / limit;
  else return Math.floor(total / limit) + 1;
};

useEffect(() => {
  dispatch(makefetchProductsRequest({page,limit}))
  console.log("called")
}, [page]);

const handlePageChange = (event, value) => {
  dispatch(setPage(value));
};

    return (
        <>
          <Navbar/>
          <div className="banner-container">

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

        </div>
            
            <ProductsContainer/>
            <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
              <Pagination 
              count={getPages()} 
              page={page}
              onChange={handlePageChange}
              variant="outlined" 
              shape="rounded" />
            </div>
            
          <Footer/>  
        </>
    );
}

export default Home;