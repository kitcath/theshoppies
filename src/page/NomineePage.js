import React, { useContext } from 'react'
import image from '../images/navbar.png';
import styled from 'styled-components';
import '../css/NomineePage.css';
import { Nominees } from '../components/Nominees';
import {GlobalContext} from '../context/globalState';

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
    const {
        removeMovieFromNominationList,
        nominationList
    } = useContext (GlobalContext)

    const validate =() => {
        if (nominationList.length === 0){
            alert("You must nominate at least 1 movie!")
        }else {
            nominationList.map((movie) => {
                removeMovieFromNominationList(movie);
            })
            alert("Your nominees were saved!");
            window.location.href= "https://kitcath.github.io/";
        }
    }
    return (
        <>
            <Section>
                <div className="header">
                    <h4 className="page-name"> Your Nominations</h4>
                    <div className="submit-container">
                     <button className="submit-btn" onClick={validate}> Submit </button>
                </div> 
            </div>
            </Section> 
            <div className="nominee-page-container">
                  <Nominees />
            </div> 
        </>
    )
}


