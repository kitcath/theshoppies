import React, { useState, useEffect } from 'react';
import { MovieList } from './MovieList';
import './Search.css';
import styled from 'styled-components';
import image from '../images/navbar.png';

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

const Search = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    /*calls for the API */
  const getMovieRequest = async () => {
    

      const url = `http://www.omdbapi.com/?s=${query}&apikey=c2cd3803`
      const response = await fetch(url);
  
      /*converts HTTP request into JSON format */
      const responseJson = await response.json(); 
      setMovies(responseJson.Search);
      console.log(movies);
   
    
  }
  /*loads when app is used for the first time */
  useEffect(() => {
    getMovieRequest(query);
  }, [query]);


    return (
        <>
        
            <Section>
                  <input 
                    type="Text"
                    placeholder="Search for a movie by title"
                     className="search-box"
                     value={query}
                     onChange={(event) => setQuery(event.target.value)}
                    />
            </Section>
            <div className="movie-container">
                <MovieList movies = {movies} />
            </div>
        </>
     /*   <div className="browse-page">
            <div className="search-container">
                        <div className="bar">
                           
                        </div>
                </div>
                 <div className="movie-results">
                     <MovieList movies={movies} />
                </div>
         
        </div>*/
    )
}

export default Search;