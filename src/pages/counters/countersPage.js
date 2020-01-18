import React from 'react'
import ButtonCounter from './buttonCounter'
import {connect} from 'react-redux'
import {addCount, plusOne, minusOne, removeCounter} from "../../redux/reducers/couners-reducer";
import Counters from "./counters";
import {counterLenght} from "../../redux/selectors/counters-selector";

const CountersPage = (props) => {
        return (
        <div>
            <ButtonCounter addCount={props.addCount} length={props.length}/>
            <Counters counters={props.counters} plusOne={props.plusOne} minusOne={props.minusOne} removeCounter={props.removeCounter}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters,
        length: counterLenght(state),
    }
}

export default connect(mapStateToProps, {addCount, plusOne, minusOne, removeCounter})(CountersPage);