import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as BsIcon from 'react-icons/bs';

export default function SalesCard(props) {
    return (
        <div>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-subtitle mb-2">{props.title}</h5>
                    <h2 className="pt-3">${props.money}</h2>
                    <p className="card-text">
                        {props.stat === 'more' ?
                            <span className="text-success">{props.percent}%<BsIcon.BsArrowUp /></span> :
                            <span className="text-danger">{props.percent}%<BsIcon.BsArrowDown /></span>}
                        <span className="text-muted">than last year</span>
                    </p>
                    <div className="pt-4">
                        <hr/>
                        <a href="/" className="text-dark">More Insight <FiIcons.FiChevronRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
