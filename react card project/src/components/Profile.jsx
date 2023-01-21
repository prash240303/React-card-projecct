import React from "react";
import email from "../assets/email.svg"
import linkedin from "../assets/linkedin.svg"

export default function Profile()
{
    return (
     <profile className="profile">
                 
                  <div className="prof--name">Laura Smith </div>
                   <div className="prof--role"> Frontend Developer</div>
                  

                  <div className="prof--website">laurasmith.website</div>

                    <div className="prof--buttons">

                          <button className="prof--email-btn">
                           <img src={email} className="prof--email--icon"></img> <p className="prof--email">Email </p></button>
                         <button className="prof--linkedin-btn">
                          <img src={linkedin} className="prof--linkedin--icon"></img><p className="prof--linkedin">Linkedin</p></button>
                    </div>
       
    </profile>
    )
}