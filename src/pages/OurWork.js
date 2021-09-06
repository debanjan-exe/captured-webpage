import React from 'react'
import styled from 'styled-components'
//images
import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"
//routing
import { Link } from 'react-router-dom'

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </Movie>

            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="theracer" />
                </Link>
            </Movie>

            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link  to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    /* background: #fff; */
    h2{
        padding: 1rem 0rem;
    }
`

const Movie = styled.div`
    padding-bottom: 10rem;
    h2{
        color: #fff;
    }
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
        border-radius: 0px 5px 5px 0px;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork
