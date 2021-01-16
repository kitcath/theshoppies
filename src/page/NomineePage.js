import React from 'react'
import image from '../images/navbar.png';
import styled from 'styled-components';
import '../css/NomineePage.css';
import { Nominees } from '../components/Nominees';

const Section = styled.section
`
    background: url(${image}) top;
    background-filter: blur(20px);
    background-opacity: 0.5;
    margin-top:30px;
    height: 250px;
    transform: translateY(40px);
    overflow:auto;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
`;
export const NomineePage = () => {
    return (
        <>
            <Section>
                <h4 className="page-name"> Your Nominations</h4>
            </Section> 
            <div className="nominee-page-container">
                  <Nominees />
            </div>
        </>
    )
}


