const initialState = {
    arrayChats: [
        {id: 1, name: 'Chat room 1', path: "/room-1"},
        {id: 2, name: 'Chat room 2', path: "/room-2"},
        {id: 3, name: 'Chat room 3', path: "/room-3"},
        {id: 4, name: 'Chat room 4', path: "/room-4"},
    ],
    messageList: [],
    profile: {id: 4, name: 'Profile', path: "/profile"},
    contacts: [{
        name: 'Екатерина',
        email: 'mail@mail.ru',
        phone: '+7-777-77-77',
    }],
    isActive: false,
}
export const chatsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "deleteChat":
            return {
                ...state,
                arrayChats: state.arrayChats.filter((chat => {
                    return chat.id !== action.id;
                }))
            };
        case "addChat":
            return {
                ...state, arrayChats: [...state.arrayChats, action.chat]
            };

        case "addMessage":
            return {
                ...state, messageList: [...state.messageList, action.message]
            };
        case 'add':
            if (state.isActive) {
                state.isActive = false;
            } else {
                state.isActive = true;
            }
            return {...state}
        default:
            return state;

    }
}
