import React from 'react'

const Counters = (props) => {
    return (
        <div className="row">
            {props.counters.map(counter => <div className='col-sm-3 col-lg-3 col-md-3 book-list pb-4'
                                                key={counter.id}>
                <ul className="pagination pagination-lg">
                    <div onClick={() => props.removeCounter(counter.id)}
                         className="btn btn-light">&#10008;</div>
                    {counter.status === 'simple' &&
                    <li className="page-item active"><a className="page-link"
                                                        onClick={() => props.minusOne(counter.id)}>-</a></li>}
                    {counter.status === 'simple' &&
                    <li className="page-item"><a className="page-link">{counter.number}</a></li>}
                    {counter.status === 'simple' && <li className="page-item active">
                        <a className="page-link"
                           onClick={() => props.plusOne(counter.id)}>+</a>
                    </li>}
                    {counter.status === 'special' &&
                    <li className="page-item"><a className="page-link">{counter.number}</a></li>}
                </ul>
            </div>)
            }
        </div>
    )
}

export default Counters;