import React from "react";
import Footer from "./footer";
import Header from "./navbar";
import Carousel from 'react-bootstrap/Carousel';

function Company(){
    return (
        <>
            <Header></Header>
            <div className="company container">
                <p className="whatwedo" id="mission">About Us</p>
                <p className="vision2">We are the team of trims and packaging experts whom you can trust for the packaging and branding solutions for fashion industry.<br/> Based in ncr region of india , we are one of the fastest growing and reliable packaging house started by a team of highly experienced and technical experts of this industy. <br/>We are supporting reknowned brands with our services and diverse range of packaging products used for branding in fashion industry. <br />Being the experts we are always focused on innovation and new product developments using latest materials and techniques</p>
            </div>
            <div className="container">
                <p className="whatwedo" id="mission">Our Mission</p>
                <p className='vision2' >To set the benchmark of becoming the most recognised brand for providing most innovative and sustainable solutions to the fashion industry</p>
            </div> 
            <div className="container">
                <p className="whatwedo" id="vision">Our Vision</p>
                <p className='vision2' >Our Vision Is To Become The Most Preferable Partner For Your Trims And Packaging Solutions.</p>
            </div> 
            <div className="container">
                <p className="whatwedo" id="values">Our Values</p>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=First slide&bg=373940"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
            </div> 
            <Footer></Footer>
        </>
    );
}

export default Company;