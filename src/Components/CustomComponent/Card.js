import React from 'react'
import * as BsIcon from 'react-icons/bs';
import LineImg from '../../assets/img/Dashboard/greenline.png';

export default function Card(props) {
    return (
        <div>
            <div className="card" style={{ backgroundImage: `url${LineImg}`, height: '100%', backgroundSize: 'cover' }}>
                <div className="card-body">
                    <h5 className="card-subtitle mb-2 text-muted">{props.title}</h5>
                    <h2>{props.number}</h2>
                    <p className="card-text">
                        {props.stat === 'more' ?
                            <span className="text-success">{props.percent}%<BsIcon.BsArrowUp /></span> :
                            <span className="text-danger">{props.percent}%<BsIcon.BsArrowDown /></span>}
                        <span className="text-muted">than last year</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
