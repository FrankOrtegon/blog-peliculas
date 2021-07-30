import React from "react";
import {bindActionCreators} from "redux";
import {deletePublications, loadPublications} from "../../../application/actions/publication";
import {connect} from "react-redux";
import {getComment} from "../../../application/selectors/comment";

export const PublicationSummary = ({publication, idCount,deletePublications, comment}) => {

    const deleteSubmit = () => {
       // deletePublications(publication.id)
        console.log("deleted publication:",publication.id)
    }

  return(
      <div className="card my-5">
          <div className="card-body">
              <h5 className="card-title">{publication.name}</h5>
              <h6 className="card-subtitle mb-2 ">Category: {publication.category}</h6>
              <p className={"card-text"}>
                  {publication.description}
              </p>
              {(publication.idCount===idCount)?
                  <button className={"btn btn-danger mr-1 px-5"} onClick={deleteSubmit}>Delete <i
                      className="bi bi-trash"/>
                  </button>
                  :null}
          </div>
          {/*comment.length?
              <CommentSummary  idCount={idCount}  />
              :null
              */}
      </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loadPublications,deletePublications}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        comment: getComment(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicationSummary);