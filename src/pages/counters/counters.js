import React from 'react'

const Counters = (props) => {
        if (!props.counters) {
        return <div>Загрузка...</div>
    }
    return (
        <div className="row">
            {props.counters.map(counter => <div className='col-sm-3 col-lg-3 col-md-3 book-list'
                                                key={counter.id}>
                <ul className="pagination pagination-lg">
                    <li className="page-item active"><a className="page-link" onClick={() => props.minusOne(counter.id)}>-</a></li>
                    <li className="page-item"><a className="page-link" >{counter.number}</a></li>
                    <li className="page-item active"><a className="page-link" onClick={() => props.plusOne(counter.id)}>+</a></li>
                </ul>
            </div>)
            }
        </div>
    )
}






export default Counters;