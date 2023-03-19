import React from "react";

export default function Card(props) {
    return (
     <div className="card flex">
        <div>
            <img className="card--cover" src={props.card.img.cover} />
        </div>
        <div className="">
            <div className="card--details">
                <div className="card--stats">
                    <h4>{props.card.ranger}</h4>
                    <h2 className="card--name">{props.card.name}</h2>
                    <h5>Power Rangers {props.card.season}</h5>
                </div>
                <img className="season-img" src={props.card.img.season}/>
            </div>
            <div className="card--bioprice" >
                <p className="card--bio" >{props.card.bio} <a href={props.card.wiki} target="_blank" className="read-more" >Read more..</a> </p>
                <p className="card--price" >Price: £{props.card.price}. Bought at: {props.card.bought}.</p>
            </div>
        </div>
     </div>
    )
}
