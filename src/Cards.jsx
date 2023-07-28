import React from "react";

let Cards = (props) => {

    return (
        <>
            <div className="nature">

                <a href={props.link} target="_blank" rel="noreferrer" >
                    <img src={props.imgsrc} alt="video" />
                </a>

                <div className="channel-info">
                    <div className="channel-img">
                        <img src={props.channelImgsrc} alt="channel-img" />
                    </div>

                    <div className="channel-details">
                        <h2 className="channel-title">{props.videoTitle}</h2>
                        <p className="channel-name">{props.channelName}</p>
                        <p> <span>{props.views}</span> &middot; <span>{props.time}</span></p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Cards;