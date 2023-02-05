import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./navbar";
import Aos from 'aos';
import data from '../data';
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
function Products(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    const navigate = useNavigate();

    const gotoProductPage = (ind)=>{
        navigate("/productinfo/"+ind);
    }

    return(
        <div>
            <Header></Header>
            <div >
                <div className="container">
                    <p className="whatwedo" data-aos = "zoom-in">PRODUCTS</p>
                    <p className='vision2' data-aos = "zoom-in">Our products are the result of an exclusive effort based on the specific needs of every customer, 
                    in order to spread the brand's message by designing the most suitable solution.
                    </p> 
                </div>
                <div className="container">
                    {
                        data[1].products.map((item,index)=>{
                            return index%2==0 ?<div data-aos = "zoom-in" className='row servicerow' onClick={()=>gotoProductPage(index)}>
                                <div className='col-6'>
                                    <motion.img className='consultimg'whileHover={{scale:1.1,boxShadow:"8px 8px 8px 8px rgb(63 122 126)"}} src={item.image}></motion.img>
                                    <p className='consult'>{item.name}</p>
                                </div>
                                <div className="col-6"></div>
                            </div>:
                            <div data-aos = "zoom-in" className='row servicerow' onClick={()=>gotoProductPage(index)}>
                            <div className="col-6"></div>
                            <div className='col-6'>
                                <motion.img className='consultimg'whileHover={{scale:1.1,boxShadow:"8px 8px 8px 8px rgb(63 122 126)"}} src={item.image}></motion.img>
                                <p className='consult'>{item.name}</p>
                            </div>
                        </div>

                        })
                    }    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Products;