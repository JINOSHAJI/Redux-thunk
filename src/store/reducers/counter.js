import * as actionTypes from '../actions/actionType';

initiaState ={
    counter:10
}
const reducer= (state=initiaState, action) => {
     switch(action.type){
        case actionTypes.INCREMENT_COUNT:
            return{
                ...state,
                
                counter : state.counter+1,
            };
        case actionTypes.DECREMENT_COUNT:
            return{
                ...state,
                counter : state.counter - 1
            };
       case actionTypes.ADD_FIVE:
          console.log(state);  /* action.counter since addNumber() has key of counter*/
           return{
               ...state,
               counter: state.counter + action.counter
        };
        default :
         return state;
     }
}

export default reducer;