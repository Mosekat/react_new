export const getAnswer = () => {
    return (dispatch, getState) => {
        let messageList = getState().messageList.messageList;
        let timerId = null;
        if (messageList.length) {
            const lastMessage = messageList[messageList.length - 1];
            if (lastMessage.author === 'User') {
                timerId = setTimeout(() => {
                    dispatch({
                        type: 'addMessage',
                        message: {author: 'Bot', text: 'hello User', chatId: lastMessage.chatId}
                    })
                }, 1500);
            }
        }
        return () => clearInterval(timerId);
    }
}