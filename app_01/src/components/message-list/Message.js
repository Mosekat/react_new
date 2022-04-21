
import "./Message.css"
import React from "react";

function Message(props) {
    let classAuthor = 'me';
    if(props.author !== 'User'){
        classAuthor = 'you';
    }
    return (
        <li className={classAuthor}>
            <div className="entete">
                <h3>10:12AM, Today</h3>
                <h2>{props.author}</h2>
                <span className="status blue"></span>
            </div>
            <div className="triangle"></div>
            <div className="message">
                {props.text}
            </div>
        </li>
    );
}

export default Message;