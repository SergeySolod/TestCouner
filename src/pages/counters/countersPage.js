import React from 'react'
import ButtonCounter from './buttonCounter'
import {connect} from 'react-redux'
import {addCount, plusOne, minusOne, removeCounter} from "../../redux/reducers/couners-reducer";
import Counters from "./counters";
import {counterLenght, counterMaxArray} from "../../redux/selectors/counters-selector";
import store from "../../redux/redux-store";
import {PLUS_ONE_EVERY_SECOND} from '../../redux/reducers/couners-reducer'

// сделано вне компоненты с целью избежать вызова этой функции при повторной отрисовки комопненты в случае обновления state
// а это случается очень часто, чаще раза в секунду
setInterval(() => {
    store.dispatch({type: PLUS_ONE_EVERY_SECOND})
}, 1000)

// контейнерная компонента для отрисовки чистых компонента (классовые не использовались вообще, только функциональные)
const CountersPage = (props) => {
        return (
        <div>
            <ButtonCounter addCount={props.addCount} length={props.length} maxArray={props.maxArray}/>
            <Counters counters={props.counters} plusOne={props.plusOne} minusOne={props.minusOne} removeCounter={props.removeCounter}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters,
        length: counterLenght(state),
        maxArray: counterMaxArray(state)
    }
}

export default connect(mapStateToProps, {addCount, plusOne, minusOne, removeCounter})(CountersPage);