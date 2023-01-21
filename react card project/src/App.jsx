import React from "react"
import Content from "./components/content"
import Footer from "./components/footer"
import Profile from "./components/Profile"
import pfp from "./assets/profilepic.png"
export default function App() {
    return (
        <div className="container">
        
             <img src={pfp} className="prof--pic" alt="" width={319} height={317}/>
            <Profile />
            <Content />
            <Footer />
        </div>
    )
}