import React from "react";
import Aos from 'aos';
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./navbar";
import Footer from "./footer";
import otherproduct from "../otherproduct";

function OtherProducts(){
    const navigate = useNavigate();
    const gotonext = ()=>{
        // navigate("/productinfo/");
    }
    return <div>
        <Header></Header>
        <div className="container">
            <p className="whatwedo" >OTHER PRODUCTS</p>
            <p className='vision2' ></p>
        </div> 
        <img className="product-img" src=""/>  
        <div className="row">
            <div className="product-item1 col-4" onClick={()=>gotonext()}>
                    <img className="producticon" src=""/>
                    <p className="productname">{otherproduct.list[0].name}</p>
            </div>
            <div className="product-item2 col-4" onClick={()=>gotonext()}>
                    <img className="producticon" src=""/>
                    <p className="productname">{otherproduct.list[1].name}</p>
            </div>
            <div className="product-item3 col-4" onClick={()=>gotonext()}>
                <img className="producticon" src="images/leathermainicon.png"/>
                <p className="productname">{otherproduct.list[2].name}</p>
            </div>
            <div className="product-item4 col-4" onClick={()=>gotonext()}>
                <img className="producticon" src=""/>
                <p className="productname">{otherproduct.list[3].name}</p>
            </div>
            <div className="product-item5 col-4" onClick={()=>gotonext()}>
                <img className="producticon" src="images/polybag.png"/>
                <p className="productname">{otherproduct.list[4].name}</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
}

export default OtherProducts;