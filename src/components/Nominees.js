import React, { useContext } from 'react';
import {GlobalContext} from '../context/globalState';
import '../css/Nominees.css';


export const Nominees = () => {
    const { nominationList } = useContext (GlobalContext);
    const {removeMovieFromNominationList} = useContext(GlobalContext);

    const addDefaultImage = (ev) => {
        ev.target.src = 'https://assets.stickpng.com/images/58482ec0cef1014c0b5e4a70.png'
    }
    
    if (! nominationList || nominationList.length === 0){
        return (
            <>
                <div className="null">
                    <h4 className="loading"> No Nominees yet!</h4>
                </div>
            </>
        );  
    }else{
        return nominationList.map((aMovie,index) =>{
             
            return(
                <div className="image-container" key={index}>
                    <div className="card">
                        <div className="image">
                            <img src={aMovie.Poster} onError={addDefaultImage} alt="nominee-poster" style={{width: "300px", height:"400px"}}/>
                            <h6 className="title"> {aMovie.Title}, <i> {aMovie.Year} </i> </h6>
                        </div>
                        <div className="overlay">
                              <button 
                              className="btn-remove"
                              onClick={() => {removeMovieFromNominationList(aMovie)}}
                              > Remove</button>
                        </div> 
                        <div className="done">
                        </div>  
                    </div>
                </div>
            )
        })
    }
}
