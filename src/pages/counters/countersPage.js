import React from 'react'
import ButtonCounter from './buttonCounter'
import {connect} from 'react-redux'
import {addCount, plusOne, minusOne} from "../../redux/reducers/couners-reducer";
import Counters from "./counters";

const CountersPage = (props) => {
        return (
        <div>
            <ButtonCounter addCount={props.addCount}/>
            <Counters counters={props.counters} plusOne={props.plusOne} minusOne={props.minusOne}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counters: state.counters
    }
}

export default connect(mapStateToProps, {addCount, plusOne, minusOne})(CountersPage);