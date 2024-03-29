import React from "react";
import { useNavigate } from "react-router-dom";

function Footer(){
    const url = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/linkedin.png";
    const navigate = useNavigate();
    const gotoProducts = ()=>{
        navigate("/products");
    }

    const gotoServices = ()=>{
        navigate("/services");
    }

    const gotoCompany = ()=>{
        navigate("/company");
    }

    const gotoProductPage = (ind)=>{
        navigate("/productinfo/"+ind);
    }

    const gotoOtherProducts = ()=>{
        navigate("/otherproducts");
    }

    return (
        <div id='footer'>
                <div className="row" >
                <div className='col-lg-1 col-12'></div>
                    <div className='col-lg-2 col-12'>
                        <h1 className='subs'>Vebru</h1>
                        <img className='icons' src={url}></img>
                    </div> 
                    
                    <div className="col-lg-2 col-4">
                        <ul id="li">
                            <li className="footerheading" >
                                COMPANY
                            </li>
                            <li className="liitem" onClick={()=>gotoCompany()}>
                                Our Values
                            </li>
                            <li className="liitem" onClick={()=>gotoCompany()}>
                                Mission
                            </li>
                            <li className="liitem" onClick={()=>gotoCompany()}>
                                Vision
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-4">
                        <ul id="li">
                            <li className="footerheading" onClick={()=>gotoProducts()}>
                                PRODUCTS
                            </li>
                            <li className="liitem" onClick={()=>gotoProductPage(1)}>
                                Label
                            </li>
                            <li className="liitem" onClick={()=>gotoProductPage(0)}>
                                Hangtags
                            </li>
                            <li className="liitem" onClick={()=>gotoProductPage(3)}>
                                Packaging
                            </li>
                            <li className="liitem" onClick={()=>gotoProductPage(2)}>
                                Patches
                            </li>
                            <li className="liitem" onClick={()=>gotoProductPage(2)}>
                                Badges
                            </li>
                            <li className="liitem" onClick={()=>gotoOtherProducts()}>
                                Other Products
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-4'>
                        <ul id="li">
                            <li className="footerheading">
                                OUR WORK
                            </li>
                            <li className="liitem" >
                                Consulting
                            </li>
                            <li className="liitem" onClick={gotoServices}>
                                Services
                            </li>
                            <li className="liitem" >
                                Logistics
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-4'>
                        <ul id='li'>
                            <li className="footerheading">
                                CONTACTS
                            </li> 
                            <li>
                                B-4, Sector-60, Noida, Distt. : Gautam Buddha Nagar, Uttar Pradesh. -201301
                            </li> 
                            <li>
                                T : +91 8287317599
                            </li> 
                            <li>
                                E : info@vebru.in
                            </li> 
                        </ul>
                    </div>
                </div>
                <p className='heading3 subs'>© Copyright 2022 . All Rights Reserved</p>
                <p className='text3'>By using this website you will understand the information presented is provided 
                    for the the information purpose.
                </p>
            </div>
    );
}

export default Footer;