import React from "react"

export default function Card(props,item) {
    return (
        <div className="card">
            {props.item.openSpots === 0 &&<div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/images/Star 1.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
} 