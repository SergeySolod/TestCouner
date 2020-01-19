import React, {useEffect} from 'react'

const ButtonCounter = (props) => {
    const everyFourth = (length) => {
        // residue - остаток от деления длины массива на 4
        const residue = length % 4
        // если пи делении 0 то это 4 элемент - специальный
        if (residue === 0) {
            return 'special'
        }
        // если пи делении не 0 то это не 4 элемент - обычный
        if (residue != 0) {
            return 'simple'
        }

    }

    // получаем массив чисел объектов счётчиков, которые есть на странице
    const maxNumber = () => {
             if (props.maxArray.length > 0) {
            const array1 = props.maxArray
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            // сумируем числа массива
            return array1.reduce(reducer);
        } else {
                 return 0
             }

    }


    // при нажатии на кнопку будет сразу три действия выполняться - id по длине массива объектов (счётчиков)
    // number - либо 0 либо сумма чисел счётчиков со страницы
    // статус - либо обычный либо специальный в зависимости от того, 4 счётчик это или нет
            return (
        <div className='pb-4'>
            <button onClick={() => props.addCount(props.length + 1, maxNumber(), everyFourth(props.length + 1))} className="btn btn-primary">Добавить элемент-счётчик</button>
        </div>
    )
}

export default ButtonCounter;