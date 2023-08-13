import React from "react";
import Footer from "./footer";
import Header from "./navbar";

function Contacts(){
    return (
        <>
            <Header></Header>
            <div className="contactus">
                <p>Contact Us.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8946708846993!2d77.36040731428076!3d28.602936492172347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4fa5838ced3%3A0x3d5627947588d448!2sPrint%20elevators!5e0!3m2!1sen!2sin!4v1676217523469!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                    <ul className="address"> 
                        <li>
                            B-4, Sector-60, Noida, Distt. : Gautam Buddha Nagar, Uttar Pradesh. -201301 
                        </li> 
                        <br />
                        <li>
                            T : +91 9891128295 <br />
                        </li> 
                        <br />
                        <li>
                            E : info@vebru.in <br />
                        </li> 
                    </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Contacts;