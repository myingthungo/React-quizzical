import React from "react"

export default function Destination(props) {
    return (
        <div className="destination-container">
            <div className="destination-container-upper">
                <img className="destination-img" src={props.item.image}/>
                <div className="destination-tags-container">
                    <div className="destination-tags">
                        <div className="tag black"><h6>{props.item.location}</h6></div>
                        <a href={props.item.map} target="_blank"><div className="tag"><img src="../assets/img_locationPin.svg"/></div></a>
                    </div>
                </div>
                <div className="destination-container-lower">
                    <div className="destination-dates-container dark-grey">
                        <div className="destination-dates-container-left">
                            <div className="date"><p>{props.item.dates.from}</p></div>
                            <div className="date"><p>-</p></div>
                            <div className="date"><p>{props.item.dates.to}</p></div>
                        </div>
                        <div className="destination-dates-container-right">
                            <div className="date"><p>{props.item.dates.days} days</p></div>
                        </div>
                    </div>
                </div>
                <h3 className="black gap-4">{props.item.title}</h3>
                <p className="black">{props.item.description}</p>
            </div>
            <div className="verticle-separator"></div>
        </div>
    )
}