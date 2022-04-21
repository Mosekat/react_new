const initialState = {
    comments: [],
    loading: false,
    error: false,
    errorString:'no errror'
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "loading":
            return {
                ...state,
                loading: true,
                error: false
            }
        case "load-comments":
            return {
                ...state,
                comments: action.payload,
                loading: false,
            }
        case "error":
            return {
                ...state
                ,
                loading: false,
                error: action.payload,
            }
        default:
            return state;

    }
}
export const loadComments = () => {
    return async (dispatch) => {
        dispatch({
            type: 'loading',
        })

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments/");
            const data = await response.json();
            dispatch({
                type: 'load-comments',
                payload: data,
            })
        } catch (error) {

            dispatch({
                type: "error",
                payload: error.message,
            })
        }


    }
}