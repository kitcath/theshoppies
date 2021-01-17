import React, {useContext} from 'react';
import '../css/MovieList.css';
import {GlobalContext} from '../context/globalState';

export const MovieList = ({movies}) => { 
    const {
        addMovieToNominationList,
        nominationList
    } = useContext (GlobalContext)

    const addDefaultImage = (ev) => {
        ev.target.src = 'https://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png'
    }

    const checkExist = (aMovie) => {
        let isDisabled = nominationList.find(o => o.imdbID === aMovie.imdbID);
        const storedMovie = isDisabled ? true : false;
        return storedMovie;
    }
    

    if (! movies || movies.length === 0){
        return (
            <div>
                Loading
            </div>
        );  
    }else{
        return movies.map(aMovie =>{ 
            const checkMovie = checkExist (aMovie);
            return(
                <div className="image-container" key={aMovie.imdbID}>
                    <div className="card">
                        <div className="image">
                            <img src={aMovie.Poster}  onError={addDefaultImage} alt="poster" style={{width: "300px", height:"400px"}}/>
                            <h6 className="title"> {aMovie.Title}, <i> {aMovie.Year} </i> </h6>
                        </div>
                        <div className="overlay">
                              <button 
                              className="btn-add"
                              disabled={checkMovie}
                              onClick= {() => addMovieToNominationList(aMovie)}> Nominate</button>
                        </div>   
                
                    </div>
                  
                </div>
            )
            
        })
    }
}

