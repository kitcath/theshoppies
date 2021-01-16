import React, { useContext } from 'react';
import {GlobalContext} from '../context/globalState';
import './Nominees.css';


export const Nominees = () => {
    const { nominationList } = useContext (GlobalContext);
    
    if (! nominationList || nominationList.length === 0){
        return (
            <>
                <div className="null">
                    <h4 className="null"> Loading...</h4>
                </div>
            </>
        );  
    }else{
        return nominationList.map((aMovie,index) =>{
             
            return(
                <div className="image-container" key={index}>
                    <div className="card">
                        <div className="image">
                            <img src={aMovie.Poster} alt="poster"/>
                            <h6 className="title"> {aMovie.Title}, <i> {aMovie.Year} </i> </h6>
                        </div>
                        <div className="overlay">
                              <button 
                              className="btn"
                              > Remove</button>
                        </div>   
                    </div>
                  
                </div>
            )
        })
    }
}
