import React, { useEffect } from "react";
import Footer from "./footer";
import Header from "./navbar";
import Aos from 'aos';
import "aos/dist/aos.css";
function Services(){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <div>
            <Header></Header>
            <div >
                <div className="container">
                    <p className="whatwedo" data-aos = "zoom-in">WHAT WE DO</p>
                    <p className='vision2' data-aos = "zoom-in">We are the team of technically sound professionals in terms of packaging industries
                        having ability to meet culture's need, provide ideas and advice and understand the 
                        thought process of customer about their product.
                    </p> 
                </div>
                <div className="container">
                    <div className="row" data-aos = "zoom-in">
                        <p className="services">SERVICES</p>
                        <div className="col-4">
                            <img className="icon2" src="images/sketch.png"></img>
                            <p className="serviceitem">Concept Designing</p>
                        </div>
                        <div className="col-4">
                            <img className="icon2" src="images/structural-design.png"></img>
                            <p className="serviceitem">Structural Designing</p>
                        </div>
                        <div className="col-4">
                            <img className="icon2" src="images/supply-chain.png"></img>
                            <p className="serviceitem">Product Development</p>
                        </div>
                    </div>
                    
                </div>
                <div className="container">
                    <div className="row" data-aos = "zoom-in">
                        <div className="col-4">
                            <img className="icon2" src="images/control-system.png"></img>
                            <p className="serviceitem">Quality Management</p>
                        </div>
                        <div className="col-4">
                            <img className="icon2" src="images/truck.png"></img>
                            <p className="serviceitem">Logistics</p>
                        </div>
                        <div className="col-4">
                            <img className="icon2" src="images/warehouse.png"></img>
                            <p className="serviceitem">Stock Management</p>
                        </div>
                    </div>   
                </div>
                <div className="container">
                    <div className="row" data-aos = "zoom-in">
                        <div className="col-4">
                            <img className="icon2" src="images/membrane.png"></img>
                            <p className="serviceitem">Choosing Right Material</p>
                        </div>
                        <div className="col-4">
                            <img className="icon2" src="images/give.png"></img>
                            <p className="serviceitem">PDQ Services</p>
                        </div>
                        <div className="col-4">
                            <img className="icon2" src="images/creative-design.png"></img>
                            <p className="serviceitem">Creative Designing</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Services;