import React, {useContext} from 'react';
import './MovieList.css';
import {GlobalContext} from '../context/globalState';

export const MovieList = ({movies}) => {
    
    const {
        addMovieToNominationList,
        nominationList
    } = useContext (GlobalContext)

       
    if (! movies || movies.length === 0){
        return (
            <div>
                Loading
            </div>
        );  
    }else{
        return movies.map(aMovie =>{
            
            return(
                <div className="image-container" key={aMovie.imdbID}>
                    <div className="card">
                        <div className="image">
                            <img src={aMovie.Poster} alt="poster"/>
                            <h6 className="title"> {aMovie.Title}, <i> {aMovie.Year} </i> </h6>
                        </div>
                        <div className="overlay">
                              <button 
                              className="btn"
                              onClick= {() => addMovieToNominationList(aMovie)}> Nominate</button>
                        </div>   
                
                    </div>
                  
                </div>
            )
            
        })
    }
}

