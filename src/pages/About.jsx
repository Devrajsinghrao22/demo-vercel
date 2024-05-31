import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
    return(
        <>
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Navbar />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>About</h1>
        </div>
        </div>
        </>
    )
}
export default About;