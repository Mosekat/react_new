
import "./Message.css"

function Message(props) {
    return (
        <div className='msg'>
            {props.text}
        </div>
    );
}

export default Message;