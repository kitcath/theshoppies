import React from 'react';



/*returns state data: describes how state is transfered to new state*/
export default (state, action) => {
    switch(action.type){
        case "REMOVE_MOVIE_FROM_NOMINATIONLIST":
            return {
                ...state,
                nominationList: state.nominationList.filter((o) => o.imdbID !== action.payload.imdbID),
            };

        case "ADD_MOVIE_TO_NOMINATIONLIST":
           if( ! state.nominationList || state.nominationList.length === 0){
                return {
                    ...state,
                    nominationList:[action.payload, ...state.nominationList],
                    };
            }
            if(state.nominationList.find(o => o.imdbID === action.payload.imdbID)){
                alert("cant nominate more than once!");
                return{
                    ...state,
                    nominationList: [...state.nominationList]
                };
            }else if(state.nominationList.length > 4){
                alert("You can only nominate 5 movies!");
                return{
                    ...state,
                    nominationList: [...state.nominationList]
                };
            }else{
                 return {
                ...state,
                nominationList:[action.payload, ...state.nominationList],
                };
            };

        default:
            return state;
    } //end of switch 
};