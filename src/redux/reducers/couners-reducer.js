const ADD_COUNT = 'TestBlocks/blocks-reducer/ADD_COUNT';
const PLUS_ONE = 'TestBlocks/blocks-reducer/ADD_COUNT';
const MINUS_ONE = 'TestBlocks/blocks-reducer/ADD_COUNT';

let initialState = [];

const countersReducer = (state = initialState, {type, id, number}) => {
    switch (type) {
        case ADD_COUNT:
            const count = {id, number}
            return [...state, count]
             case PLUS_ONE: {
            return [...state].map(block => {
                if (block.id === id) {
                    block.number = +1
                }
                return block;
            })
        }
        case MINUS_ONE: {
            return [...state].map(block => {
                if (block.id === id) {
                    block.number = +1
                }
                return block;
            })
        }



        default:
            return state;
    }
}

export const addCount = (id, number) => ({type: ADD_COUNT, id, number});
export const plusOne = () => ({type: PLUS_ONE});
export const minusOne = () => ({type: MINUS_ONE});

export default countersReducer