import React from "react";
import {bindActionCreators} from "redux";
import {deletePublications, loadPublications, updateVote} from "../../../application/actions/publication";
import {connect} from "react-redux";
import {getComment} from "../../../application/selectors/comment";
import CommentSummary from "../comment/CommentSummary";
import CommentCreate from "../comment/CommentCreate";

export const PublicationSummary = ({publication, count, deletePublications, comment,addComment, deleteComment, updateVote}) => {

    const deleteSubmit = () => {
        deletePublications(publication._id)
    }

    return (
        <div className="card my-5">
            <div className="card-body">
                <h5 className="card-title">Title: {publication.name}</h5>
                <h6 className="card-subtitle mb-2 ">Category: {publication.category}</h6>
                <img src={publication.image} className={"card-img mb-3"} alt={""}/>
                <p className={"card-text"}>
                    Content: {publication.description}
                </p>
                <a src={publication.like}><button className={"btn btn-info px-5 float-right mr-1 px-5"} >View <i
                            className="bi bi-play-btn"/>
                        </button></a>
                {((publication.idCount === count.idCount) && count.plan.plan) ?
                    <div>
                        <button className={"btn btn-danger px-5 float-right mr-1 px-5"} onClick={deleteSubmit}>Delete <i
                            className="bi bi-trash"/>
                        </button>
                        
                        
                    </div>
                    : null}
                <br/>
                <hr className="my-4"/>
                {(count.plan.plan)?
                    <CommentCreate addComment={addComment} count={count} idPublication={publication._id} />
                    :null}
                {comment.length ? comment.map(element => {
                    return (element.idPublication.value === publication._id) ?
                        <CommentSummary key={element.idComment} count={count} comment={element} deleteComment={deleteComment}/>
                        : null
                }) : null}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPublications, deletePublications, updateVote}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        comment: getComment(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicationSummary);