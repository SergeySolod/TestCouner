import React, {useEffect} from 'react'

const ButtonCounter = (props) => {
    const everyFourth = (length) => {
        // residue - остаток от деления длины массива на 4
        const residue = length % 4
        if (residue === 0) {
            return 'special'
        }
        if (residue != 0) {
            return 'simple'
        }

    }

        return (
        <div className='pb-4'>
            <button onClick={() => props.addCount(props.length + 1, 0, everyFourth(props.length + 1))} className="btn btn-primary">Добавить элемент-счётчик</button>
        </div>
    )
}

export default ButtonCounter;