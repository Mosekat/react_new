import {useDispatch} from 'react-redux';
import {useSelector} from "react-redux";

const About = () => {
    const contacts = useSelector((state) => {
        return state.contacts
    });
    let isActive = useSelector(state => {
        return state.isActive
    });
    const dispatch = useDispatch();
    return (
        <main>
            <header>
                <div>
                    <h2>Profile user</h2>
                    {contacts.map((contact) => (
                        <ul key={contact.name}>
                            <li>{contact.name}</li>
                            <li>{contact.email}</li>
                            <li>{contact.phone}</li>
                        </ul>
                    ))}
                    <input type='checkbox' checked={isActive} onChange={() => dispatch({type: 'add'})}/>
                </div>
            </header>
        </main>
    );
}
export default About;
