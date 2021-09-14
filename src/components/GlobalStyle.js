import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    user-select: none;
}

html {
    @media (max-width: 1500px){
        font-size: 75%;
    }
}

body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #fff;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;

    &:hover{
        background-color: #23d997;
        color: #fff;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
    @media (max-width: 1300px){
        font-size: 2rem;
    }
}

h3{
    color: #fff;
}

h4{
    font-weight: bold;
    font-size: 2rem;
}

a{
    font-size: 1.1rem;
}

span{
    font-weight: bold;
    color: #23d997;
}

p{
    padding: 0rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`

export default GlobalStyle