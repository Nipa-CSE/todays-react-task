import React from "react";

let Footer = () => {
    return (
        <div>
            <div className = "footdiv">
            <div className="div1">
                <h3>NMEPS</h3>
            </div>
            <div className="div1">
                 <h3>Timing</h3>
                 <br/>
                 <p>Sat,Sun and Mon at 3:30pm</p>
            </div>
            <div className="div1">
                <h3>Explore</h3>
                <br/>
                <div><a href = "#">Home</a></div>
                <div><a href = "#">About Us</a></div>
                <div><a href = "#">Contact</a></div>
            </div>
            <div className="div1">
                <h3>Address</h3>
                <br/>
                <div>
                U.A.E <br/>
                Office 201, 2nd Floor,<br/> Al Khor Bldg, Deira<br/>
                Rd, Al Sabka, Dubai
                </div>
            </div> 
        </div>
        <div className = "copyr">
             <h4>Copyright : NMEPS</h4>
        </div>
    </div>
        
    );
  }
Footer();

export default Footer;