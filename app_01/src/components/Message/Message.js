
import "./Message.css"

function Message(props) {
    return (
        <div className='msg'>
           <h2>{props.author}</h2>
            <h3>{props.text}</h3>
            <hr/>
        </div>
    );
}

export default Message;