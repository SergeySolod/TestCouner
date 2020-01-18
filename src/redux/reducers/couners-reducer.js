const ADD_COUNT = 'TestBlocks/blocks-reducer/ADD_COUNT';

let initialState = [];

const countersReducer = (state = initialState, {type, number}) => {
    switch (type) {
        case ADD_COUNT:
            const count = {number}
            return [...state, count]
        default:
            return state;
    }
}

export const addCount = (number) => ({type: ADD_COUNT, number});

export default countersReducer