import React from 'react'
import home1 from "../img/home1.png"
//import styles
// import styled from "styled-components"
import { About, Description, Image, Hide } from "../styles"
// Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from "./Wave"

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams </span> come </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact Us for any photography and videoraphy ideas that you hav. we have professionals with amazing skills
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="a-guy-with-a-camera" />
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection