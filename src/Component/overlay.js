import { useAnimation } from "framer-motion";
import ReacT from "react";
import { useNavigate } from "react-router-dom";
import data from "../data";

function Overlayfunc(){
    const navigate = useNavigate();
    const url2 = "https://vebruassets.s3.ap-northeast-1.amazonaws.com/images/LOGO.png";
    const gotoProductPage = (ind)=>{
        navigate("/productinfo/"+ind);
    }

    const gotoCompany = ()=>{
        navigate("/company");
    }

    const gotoServices =()=>{
        navigate("/services");
    }

    const gotoHomePage = ()=>{
        navigate('/');
    }

    const gotoContacts = ()=>{
        navigate("/contacts");
    }
    return (
        <div className="container">
            <div className="row">
            <img className='nav-link' src={url2} />
            </div>
            <div className="row">
                <div className="col-5 overlayservices">
                    <p onClick={gotoHomePage}>HOMEPAGE</p>
                    <p onClick={gotoCompany}>COMPANY</p>
                    <p onClick={gotoServices}>OUR WORK</p>
                    <p onClick={gotoContacts}>CONTACTS</p>
                </div>
                <div className="col-5">
                    <p className="overlayproduct">PRODUCTS</p>
                    <hr ></hr>
                    <div className="row productitem">
                            {
                                data[1].products.map((item,index)=>{
                                    return <div className="col-6">
                                        <p className="overlayproductitem" onClick={()=>gotoProductPage(index)}>{item.name} </p>
                                    </div>
                                })
                            }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overlayfunc;