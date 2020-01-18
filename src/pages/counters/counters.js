import React from 'react'
import ButtonCounter from './buttonCounter'

const Counters = () => {
    return (
        <div>
            <ButtonCounter/>
            <ul className="pagination pagination-lg">
                <li className="page-item active"><a className="page-link" href="#">-</a></li>
                <li className="page-item"><a className="page-link" href="#">Значение</a></li>
                <li className="page-item active"><a className="page-link" href="#">+</a></li>
            </ul>
        </div>
    )
}

export default Counters;