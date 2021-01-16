
/*returns state data: describes how state is transfered to new state*/
export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_NOMINATIONLIST":
            return {
                ...state,
                nominationList:[action.payload, ...state.nominationList],
            }
        default:
            return state;
    } //end of switch 
};