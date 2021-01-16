import React from 'react';
import styled from 'styled-components';
import image from '../images/Cinema.jpg';
import { useHistory } from 'react-router-dom';

const Section = styled.section
`
    background: url(${image}) top;
    background-filter: blur(20px);
    background-opacity: 0.5;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
`;
const Container = styled.div
`
    color: #fff;
    padding:5rem;
    background-filter: blur(5px);
    background-color: rgba(0,0,0,0.8);
    margin:10rem;
    border-radius: 10px;
    

    h1 {
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-transform: uppercase;
    }

    p {
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin-bottom:1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 50;
        text-transform: uppercase;
    }

    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        margin-bottom: 0.8rem 2rem;
        color: #fff;
        background: rgb(250,99,99);
        border:none;
        border-radius:4px;
        cursor:pointer;
        outline: none;
        margin-top: 0.2rem;
        margin-left: 14rem;
        margin-right: 12rem;
    }
`;

function Landing() {

    const history = useHistory();
        return ( 
            <>
            <Section>
                <Container>
                    <h1> The Shoppies</h1>
                    <button onClick={() => history.push('/browse')}>Start Nominating</button>
                </Container>
             </Section>
             </>
        )
    
}

export default Landing
