import {useDispatch,useSelector} from 'react-redux';
import {isActiveSelector} from "../redux/reducers/selectors/selectors";
import {contactsSelector} from "../redux/reducers/selectors/selectors";

const About = () => {
    const contacts = useSelector(contactsSelector);
    let isActive = useSelector(isActiveSelector);
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
