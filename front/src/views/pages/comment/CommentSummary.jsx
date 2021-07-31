import React from "react";

export const CommentSummary = ({count, comment, deleteComment}) => {

    const deleteSubmit = (event) => {
        event.preventDefault();
        deleteComment(comment.idComment)
    }

    return (
        <div>
            <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">Wrote by: {comment.idCount}</h5>
                    <p className={"card-text"}>
                        Content: {comment.content.value}
                    </p>
                    {((count.plan.plan) && (comment.idCount === count.idCount)) ?
                        <button className={"btn btn-danger mr-1 px-5"} onClick={deleteSubmit}>Delete <i
                            className="bi bi-trash"/>
                        </button>
                        : null}
                </div>
            </div>
        </div>

    )
}

export default CommentSummary;