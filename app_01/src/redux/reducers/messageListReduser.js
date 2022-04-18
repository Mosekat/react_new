const initialState = {
    messageList: [],
}
 const messageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addMessage":
            return {
                ...state, messageList: [...state.messageList, action.payload]
            };

        default:
            return state;

    }
}

export default  messageListReducer;