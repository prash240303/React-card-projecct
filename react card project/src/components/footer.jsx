import React from "react";
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/Instagram.svg"
import github from "../assets/github.svg"

export default function Footer()
{
    return (
        <footer>
          <img src={twitter} className="footer--twitter, footer--icons"  alt="" />
          <img src={facebook} className="footer--facebook , footer--icons" alt="" />
          <img src={instagram} className="footer--instagram , footer--icons" alt="" />
          <img src={github} className="footer--github , footer--icons" alt="" />
        </footer>
    )
}