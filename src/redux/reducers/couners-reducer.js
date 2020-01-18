const ADD_COUNT = 'TestBlocks/blocks-reducer/ADD_COUNT';
const REMOVE_COUNT = 'TestBlocks/blocks-reducer/REMOVE_COUNT';
const PLUS_ONE = 'TestBlocks/blocks-reducer/PLUS_ONE';
const MINUS_ONE = 'TestBlocks/blocks-reducer/MINUS_ONE';

let initialState = [];

const countersReducer = (state = initialState, {type, id, number, status}) => {
    switch (type) {
        case ADD_COUNT:
            const count = {id, number, status}
            return [...state, count]
        case REMOVE_COUNT: {
            return [...state].filter(count => count.id !== id);
        }
        case PLUS_ONE: {
            return [...state].map(count => {
                if (count.id === id) {
                    return {...count, number: count.number + 1}
                }
                return count;
            })
        }
        case MINUS_ONE: {
            return [...state].map(count => {
                if (count.id === id) {
                    return {...count, number: count.number - 1}
                }
                return count;
            })
        }

        default:
            return state;
    }
}

export const addCount = (id, number, status) => ({type: ADD_COUNT, id, number, status});
export const removeCounter = (id) => ({type: REMOVE_COUNT, id});
export const plusOne = (id) => ({type: PLUS_ONE, id});
export const minusOne = (id) => ({type: MINUS_ONE, id});

export default countersReducer