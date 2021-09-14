import React from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from "./Toggle.js"
// Animations
import { AnimateSharedLayout } from 'framer-motion'
import { scrollReveal } from '../animation'
import { useScroll } from './useScroll'

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any questions <span> FAQ </span> </h2>

            <AnimateSharedLayout>
                <Toggle title="How do I start ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, mollitia?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, corrupti modi voluptatibus recusandae quo corporis.</p>
                    </div>
                </Toggle>

                <Toggle title="Daily Schedule ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, mollitia?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, temporibus.</p>
                    </div>
                </Toggle>

                <Toggle title="Different payment methods ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, mollitia?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab, dolore qui nobis architecto odit!</p>
                    </div>
                </Toggle>

                <Toggle title="What product do you offer ?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, mollitia?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab, dolore qui nobis architecto odit! Lorem ipsum dolor sit amet.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    user-select: none;
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection
