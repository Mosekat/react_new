const initialState = {
    arrayChats: [
        {id: 1, name: 'Chat room 1', path: "/room-1"},
        {id: 2, name: 'Chat room 2', path: "/room-2"},
        {id: 3, name: 'Chat room 3', path: "/room-3"},
        {id: 4, name: 'Chat room 4', path: "/room-4"},
    ],
}

 const chatsReducer = (state = initialState, action) => {

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
        default:
            return state;

    }
}
export default  chatsReducer;
