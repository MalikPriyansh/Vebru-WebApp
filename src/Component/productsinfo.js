import React, { useEffect } from "react";
import Header from "./navbar";
import data from '../data';
import Aos from 'aos';
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer";

function Productinfo(){
    const location = useLocation();
    const arr = location.pathname.split("/");
    console.log(arr);
    const productObject = data[1].products[arr[2]];
    const navigate = useNavigate();
    const gotonext = (ind)=>{
        navigate("/productinfo/"+ind);
    }

    const gotoOtherProduct = ()=>{
        navigate("/otherproducts")
    }

  useEffect(() => {
    
      window.scrollTo(0, 0);

    // Cleanup the listener when the component unmounts
  });
    console.log(productObject);
    const url1 = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/"+productObject.carousel[0];
    const url2 = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/"+productObject.carousel[1];
    const url3 = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/"+productObject.carousel[2];
    const leatherimg = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/leather icon 2.png";
    const leathermainicon = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/leathermainicon.png";
    const hangtag = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/hangtagicon.png";
    const packaging = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/packaging.jpeg";
    const polybag = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/polybag.png";
    const otherproductimg = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/otherproducts5.png"
    console.log(data);
    return(
        <div>
            <Header></Header>
            <div className="container">
                <p className="whatwedo" id="productName">{productObject.name}</p>
                <p className='vision2' >{productObject.description}</p>
            </div> 
            <Carousel >
              <Carousel.Item interval={1000}>
                <img
                  className="product-img"
                  src={url1}
                  alt="First slide"
                  height={15}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className=" product-img"
                  src={url2}
                  alt="First slide"
                  height={30}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" product-img"
                  src={url3}
                  alt="First slide"
                  height={30}
                />
              </Carousel.Item>
            </Carousel>
            <div className="row">
                {/* {data[1].products.map((item,index)=>{
                    return index%2 ? <div className="product-item col-4" onClick={()=>gotonext(index)}>
                        <p className="productname">{item.name}</p>
                    </div> : <div className="product-item2 col-4" onClick={()=>gotonext(index)}>
                    <p className="productname">{item.name}</p>
                </div>
                })} */}
                <div className="product-item1 col-4" onClick={()=>gotonext(0)}>
                        <img className="producticon" src={hangtag}/>
                        <p className="productname">{data[1].products[0].name}</p>
                </div>
                <div className="product-item2 col-4" onClick={()=>gotonext(1)}>
                        <img className="producticon" src={leatherimg}/>
                        <p className="productname">{data[1].products[1].name}</p>
                </div>
                <div className="product-item3 col-4" onClick={()=>gotonext(2)}>
                    <img className="producticon" src={leathermainicon}/>
                    <p className="productname">{data[1].products[2].name}</p>
                </div>
                <div className="product-item4 col-4" onClick={()=>gotonext(3)}>
                    <img className="producticon" src={packaging} />
                    <p className="productname">{data[1].products[3].name}</p>
                </div>
                <div className="product-item5 col-4" onClick={()=>gotonext(4)}>
                    <img className="producticon" src={polybag}></img>
                    <p className="productname">{data[1].products[4].name}</p>
                </div>
                <div className="product-item6 col-4" onClick={()=>gotoOtherProduct()}>
                  <img className="producticon" src={otherproductimg}></img>
                    <p className="productname">Other Products</p>
                </div>
            </div>  
            <Footer></Footer>
        </div>
    )
}

export default Productinfo;