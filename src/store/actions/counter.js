import * as  actionType from './actionType';

/*Action Handler */
export const incrementCount = () => {
    return {
        type: actionType.INCREMENT_COUNT,
    };
};


export const decrementCount = () => {
    return {
        type: actionType.DECREMENT_COUNT,
    };
};


export const addNumber = (number) => {
    return {
        type: actionType.ADD_FIVE,
        counter:number
    };
};