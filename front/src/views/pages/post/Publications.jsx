import {connect} from "react-redux";
import React, {useState} from "react";
import {getPublications} from '../../../application/selectors/publication'
import {getCount} from '../../../application/selectors/user'
import {addPublications, deletePublications, loadPublications} from "../../../application/actions/publication";
import {useEffect} from "react";
import {bindActionCreators} from "redux";
import PublicationSummary from "./PublicationSummary";
import {PublicationCreate} from "./PublicationCreate";
import {getComment} from "../../../application/selectors/comment";
import {addComment, deleteComment, loadComment} from "../../../application/actions/comment";


const Publications = ({count, publication, comment, loadPublications, addPublications, loadComment, deletePublications, addComment, deleteComment}) => {
    useEffect(() => {
        loadPublications()
        loadComment()
    }, [loadComment, loadPublications])

    const [category, setCategory] = useState('All');

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card my-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Instructions</h3>
                            <p className={"card-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Fugit iste nobis possimus? Ad culpa dignissimos distinctio
                                fuga incidunt ipsum, iure magni molestias odio pariatur perferendis
                                quo quos reprehenderit velit vitae?
                            </p>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Select category</h3>
                            <select className="custom-select"
                                    value={category}
                                    onChange={(event => setCategory(event.target.value))}>
                                <option value="All">All</option>
                                <option value="Action">Action</option>
                                <option value="Anime">Anime</option>
                                <option value="Suspense">Suspense</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h1 className="my-5 text-center cover-heading mt-5 font-weight-bold">
                        {category} Publications <i className="bi bi-camera-reels"/>
                    </h1>
                    {(count.plan.plan) ?
                        <PublicationCreate addPublications={addPublications} idCount={count.idCount}/> : null
                    }
                    {(publication.length) ? publication.map(element => {
                        return ((element.category === category) || (category === "All")) ?
                            <PublicationSummary
                                key={element._id}
                                publication={element}
                                count={count}
                                comment={comment}
                                deletePublications={deletePublications}
                                deleteComment={deleteComment}
                                addComment={addComment}/> : null
                    }) : null}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        publication: getPublications(state),
        count: getCount(state),
        comment: getComment(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadPublications,
        addPublications,
        loadComment,
        deletePublications,
        addComment,
        deleteComment
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
