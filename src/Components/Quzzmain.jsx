import React from 'react'
import { Link } from "react-router-dom"
import "../App.css"
// import Question from "./Question"
import Question from './Question'

const Quzzmain = () => {
    return (

        <>
            <div className="top">
                <img className="Kalvium_logo" src="https://kalvium.com/wp-content/uploads/2023/05/Kalvium-OG.webp" alt="" />
                <h2 className="Welcome">Welcome to Konfident Quizz</h2>
                
            </div>
<div className="main">
            <Link to="/Question">
                <button>Play</button>
            </Link></div>
        </>
    )
}

export default Quzzmain
