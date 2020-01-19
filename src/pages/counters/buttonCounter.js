import React, {useEffect} from 'react'

const ButtonCounter = (props) => {
    const everyFourth = (length) => {
        const residue = length % 4
        if (residue === 0) {
            return 'special'
        }
        if (residue != 0) {
            return 'simple'
        }

    }

    const maxNumber = () => {
             if (props.maxArray.length > 0) {
            const array1 = props.maxArray
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            return array1.reduce(reducer);
        } else {
                 return 0
             }

    }
            return (
        <div className='pb-4'>
            <button onClick={() => props.addCount(props.length + 1, maxNumber(), everyFourth(props.length + 1))} className="btn btn-primary">Добавить элемент-счётчик</button>
        </div>
    )
}

export default ButtonCounter;