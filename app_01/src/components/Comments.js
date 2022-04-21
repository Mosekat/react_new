import {useDispatch, useSelector} from "react-redux";
import {commentsSelector} from "../redux/reducers/selectors/selectors";
import {useEffect} from "react";
import {loadComments} from "../redux/reducers/commentsReducer";

export const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(commentsSelector);
    const loading = useSelector(state => state.comments.loading);
    let error = useSelector(state => state.comments.error);
    const handleError=()=>{
        dispatch(loadComments())
    }

    useEffect(() => {
            dispatch(loadComments())
        }, []
    );

    return (
        <div style={{fontSize: 15}}>
            {error?(<div>Произошла ошибка. Попробуйте еще раз
            <button onClick={handleError}>Повторить попытку</button></div>): loading ? (<div>Идет загрузка</div>) : (comments.map((comment) => (
                    <p key={comment.id}>{comment.body}</p>
                )))}
        </div>
    )
}
