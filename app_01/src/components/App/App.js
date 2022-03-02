import Message from "../Message/Message";
import './App.css';

function App() {
    const text="Самый лучший день - сегодня";
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Message text={text}/>
        </div>
    );
}

export default App;
