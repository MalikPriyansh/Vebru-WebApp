import React, { useEffect, useState } from 'react';
import Header from "./navbar";
import data from '../data';
import { motion } from "framer-motion";
import Aos from 'aos';
import "aos/dist/aos.css";
import {Link, useNavigate} from  'react-router-dom'
import Footer from './footer';


function HomeScreen(){
        useEffect(()=>{
            Aos.init({duration:2000});
        },[]);

        const navigate = useNavigate();
        

        const gotoProductPage = (ind)=>{
            ind!=5 ? navigate("/productinfo/"+ind) : navigate("/services");
        }

        return (
            <>
                <Header></Header>
                <section>
                    <div>
                        <img className='mockup' src='images/high_res_logo_image.jpg' />
                    </div>
                    <div >
                            <div className='row '>
                                <div className='col-12'>
                                    <p className='services'>OUR PRODUCTS & SERVICES</p>
                                </div>
                            </div>
                            <div data-aos = "zoom-in" className='row servicerow'>
                                <div className='col-1'></div>
                                <div className='col-4' onClick={()=>gotoProductPage(0)}>
                                    <motion.img className='consultimg'whileHover={{scale:1.1,boxShadow:"8px 8px 8px 8px rgb(63 122 126)"}} src={data[1].products[0].image}></motion.img>
                                    <p className='consult'>{data[1].products[0].name}</p>
                                </div>
                            </div>
                            <div className='col-2'></div>
                            {
                                data[0].products.map((item,index)=>{
                                    if(index!=0) return index%2==0?<div data-aos = "zoom-in" className='row servicerow'>
                                        <div className='col-1'></div>
                                        <div className='col-4' onClick={()=>gotoProductPage(index)}>
                                            <motion.img className='consultimg2'whileHover={{scale:1.1,boxShadow:"8px 8px 8px 8px rgb(63 122 126)"}} src={item.image}></motion.img>
                                            <p className='consult'>{item.name}</p>
                                        </div>
                                        <div className='col-2'></div>
                                    </div>
                                    :
                                    <div data-aos = "zoom-in" className='row servicerow' >
                                    <div className='col-7'>
                                        
                                    </div>
                                    {/* <div className='col-1'></div> */}
                                    <div className='col-4' onClick={()=>gotoProductPage(index)}>
                                        <motion.img className='consultimg1' whileHover={{scale:1.1,boxShadow:"8px 8px 8px 8px rgb(63 122 126)"}} src={item.image}></motion.img>
                                        <p className='consult'>{item.name}</p>
                                    </div>
                                </div>
                                })
                            }
                            {/* <div >
                                <p className='vebru'>VEBRU</p>
                                <p className='vision'>We are the team of technically sound professionals in terms of packaging industries
                                    having ability to meet culture's need, provide ideas and advice and understand the 
                                    thought process of customer about their product.
                                </p>
                            </div> */}
                        <Footer></Footer>   
                    </div>
                </section>
            </>
        );
}

export default HomeScreen;