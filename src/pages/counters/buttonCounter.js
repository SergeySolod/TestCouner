import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {addCount} from "../../redux/reducers/couners-reducer";

const ButtonCounter = (props) => {
        return (
        <div className='pb-3'>
            <button onClick={() => props.addCount(0)} className="btn btn-primary">Добавить элемент-счётчик</button>
        </div>
    )
}

export default connect(null, {addCount})(ButtonCounter);