import {useState} from "react";

export const CommentCreate = ({count, addComment, idPublication}) => {

    const [content, setContent] = useState('');

    const addCommentSubmit = (event) => {
        event.preventDefault();
        const comment = {
            idPublication: idPublication,
            idCount: count.idCount,
            content: content,
        }
        addComment(comment)
        setContent('')
    }

    return (
        <div className="input-group mb-3">
            <input type="text"
                   className="form-control"
                   value={content}
                   onChange={event => setContent(event.target.value)}/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={addCommentSubmit}>Add Comment</button>
            </div>
        </div>
    )
}

export default CommentCreate;