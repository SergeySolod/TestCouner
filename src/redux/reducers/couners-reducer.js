const ADD_COUNT = 'TestBlocks/blocks-reducer/ADD_COUNT';
const PLUS_ONE = 'TestBlocks/blocks-reducer/PLUS_ONE';
const MINUS_ONE = 'TestBlocks/blocks-reducer/MINUS_ONE';

let initialState = [];

const countersReducer = (state = initialState, {type, id, number}) => {
    switch (type) {
        case ADD_COUNT:
            const count = {id, number}
            return [...state, count]
        case PLUS_ONE: {
            return [...state].map(count => {
                if (count.id === id) {
                    return {...count, number: count.number+1}
                }
                return count;
            })
        }
        case MINUS_ONE: {
            return [...state].map(count => {
                if (count.id === id) {
                    return {...count, number: count.number-1}
                }
                return count;
            })
        }
        default:
            return state;
    }
}

export const addCount = (id, number) => ({type: ADD_COUNT, id, number});
export const plusOne = (id) => ({type: PLUS_ONE, id});
export const minusOne = (id) => ({type: MINUS_ONE, id});

export default countersReducer