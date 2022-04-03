import { ListElements} from './list-menu';
import { MessageList} from './message-list';
import {useParams, Link} from "react-router-dom";


const Home = (props) => {
    let {id} = useParams();
    let arCurrent = [];
    if(typeof id === 'undefined'){
        arCurrent = props.arrChats.filter((elem, key) => key === 0);
    }else{
        arCurrent = props.arrChats.filter((elem) => elem.id == id);
    }

    let [current] = arCurrent;
    console.log(current)

    if(!current){
        current = {
            name:"none",
        }
    }
    return (
        <div>
            <aside>
                <header>
                    <input type="text" placeholder="search"></input>
                </header>
                <ListElements  arrChats={props.arrChats} profile={props.profile} deleteChat={props.deleteChat} addChat={props.addChat}/>

            </aside>
            <main>
                <header>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""></img>
                    <div>
                        <h2>{current.name}</h2>
                        <h3>already 1902 messages</h3>
                    </div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""></img>
                </header>
                <MessageList chatId={id}/>
            </main>
        </div>
    );
}
export default Home;
