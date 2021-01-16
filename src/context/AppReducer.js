
/*returns state data: describes how state is transfered to new state*/
export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_NOMINATIONLIST":
            return {
                ...state,
                nominationList:[action.payload, ...state.nominationList],
            };
            case "REMOVE_MOVIE_FROM_NOMINATIONLIST":
                return {
                    ...state,
                    nominationList: state.nominationList.filter((movie) => movie.id !== action.payload),
                }
        default:
            return state;
    } //end of switch 
};