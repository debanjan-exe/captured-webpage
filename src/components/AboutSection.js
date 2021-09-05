import React from 'react'
import home1 from "../img/home1.png"
//import styles
// import styled from "styled-components"
import { About, Description, Image, Hide } from "../styles"

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams </span> come </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact Us for any photography and videoraphy ideas that you hav. we have professionals with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="a-guy-with-a-camera" />
            </Image>
        </About>
    )
}

export default AboutSection