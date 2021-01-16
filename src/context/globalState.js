import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

//initial state 
const initialState = {
    nominationList:  []
};

//create context 
export const GlobalContext = createContext(initialState);

//Global Provider: access initial state for all components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer( AppReducer, initialState);

    useEffect (() => {
       localStorage.setItem('nominationList', JSON.stringify())
    }, [state])
    //actions: when adding to nominate button
    const addMovieToNominationList = movie =>{
        dispatch({type: "ADD_MOVIE_TO_NOMINATIONLIST", payload: movie});
    }

    return (
        <GlobalContext.Provider value={{
            nominationList: state.nominationList,
            addMovieToNominationList,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )


}