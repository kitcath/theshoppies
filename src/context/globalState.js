import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

//initial state 
const initialState = {
    nominationList: localStorage.getItem('nominationList') ? JSON.parse(localStorage.getItem('nominationList') ) : []
};

//create context 
export const GlobalContext = createContext(initialState);

//Global Provider: access initial state for all components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer( AppReducer, initialState);

//will save nominees concurrently
    useEffect (() => {
       localStorage.setItem("nominationList", JSON.stringify(state.nominationList))
    }, [state])

    //actions: when adding to nominate button
    const addMovieToNominationList = movie =>{
        dispatch({type: "ADD_MOVIE_TO_NOMINATIONLIST", payload: movie});
    }

    //to remove movies
    const removeMovieFromNominationList = (movie) => {
        dispatch({type: "REMOVE_MOVIE_FROM_NOMINATIONLIST", payload:movie})
    }

    return (
        <GlobalContext.Provider value={{
            nominationList: state.nominationList,
            addMovieToNominationList,
            removeMovieFromNominationList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )


}