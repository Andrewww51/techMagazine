import React from 'react'
import './Landing.css'
// import { useHistory } from 'react-router-dom'
import img_left_1 from '../../media/artificial_arm.jpg'
import img_left_2 from '../../media/keyboard.jpg'
import img_left_3 from '../../media/motherboard.jpg'
import img_right_1 from '../../media/techtools.jpg'
import img_right_2 from '../../media/vr.jpg'
import img_right_3 from '../../media/workstation.jpg'

function Landing() {
    
    // let history = useHistory();

    // function storageHandler() {
    //     localStorage.setItem("new_visitor", "no")
    //     history.push("/")
    // }

    return (
        <div id="landing_container">
            <div className="center">
                <div id="heading">
                    <h1>Tech news magazine</h1>
                    <h4>by Andrew</h4>
                </div>
                <button id="btn">I want those tech news</button>
            </div>
            <img className="landingImage" id="left_1" src={img_left_1} alt="" />
            <img className="landingImage" id="left_2" src={img_left_2} alt="" />
            <img className="landingImage" id="left_3" src={img_left_3} alt="" />
            <img className="landingImage" id="right_1" src={img_right_1} alt="" />
            <img className="landingImage" id="right_2" src={img_right_2} alt="" />
            <img className="landingImage" id="right_3" src={img_right_3} alt="" />
        </div>
    )
}

export default Landing