import React from "react";
import Header from "./navbar";
import data from '../data';
import Aos from 'aos';
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer";

function Productinfo(){
    const location = useLocation();
    const arr = location.pathname.split("/");
    const productObject = data[1].products[arr[2]];
    const navigate = useNavigate();
    const gotonext = (ind)=>{
        navigate("/productinfo/"+ind);
    }
    console.log(productObject.image);
    const url = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/"+productObject.image;
    return(
        <div>
            <Header></Header>
            <div className="container">
                <p className="whatwedo" >{productObject.name}</p>
                <p className='vision2' >{productObject.description}</p>
            </div> 
            <img className="product-img" src= {url}/>  
            <div className="row">
                {/* {data[1].products.map((item,index)=>{
                    return index%2 ? <div className="product-item col-4" onClick={()=>gotonext(index)}>
                        <p className="productname">{item.name}</p>
                    </div> : <div className="product-item2 col-4" onClick={()=>gotonext(index)}>
                    <p className="productname">{item.name}</p>
                </div>
                })} */}
                <div className="product-item1 col-4" onClick={()=>gotonext(0)}>
                        <p className="productname">{data[1].products[0].name}</p>
                </div>
                <div className="product-item2 col-4" onClick={()=>gotonext(1)}>
                        <p className="productname">{data[1].products[1].name}</p>
                </div>
                <div className="product-item3 col-4" onClick={()=>gotonext(2)}>
                    <p className="productname">{data[1].products[2].name}</p>
                </div>
                <div className="product-item4 col-4" onClick={()=>gotonext(3)}>
                    <p className="productname">{data[1].products[3].name}</p>
                </div>
                <div className="product-item5 col-4" onClick={()=>gotonext(4)}>
                    <p className="productname">{data[1].products[4].name}</p>
                </div>
                {/* <div className="product-item6 col-4" onClick={()=>gotonext(5)}>
                    <p className="productname">{data[1].products[5].name}</p>
                </div> */}
            </div>  
            <Footer></Footer>
        </div>
    )
}

export default Productinfo;