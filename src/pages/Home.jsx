import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    return(
        <>
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Navbar />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Home</h1>
        </div>
        </div>
        </>
    )
}
export default Home;