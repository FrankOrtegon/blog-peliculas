import {connect} from "react-redux";
import React from "react";
import {addPublications} from '../../../application/actions/publication';
import {updatePublications} from '../../../application/actions/publication';
import {deletePublications} from '../../../application/actions/publication';
import { useEffect } from "react";
import {bindActionCreators} from "redux";

export const PublicationCreate = ({addPublications, updatePublications, deletePublications}) => {
    useEffect(()=>{
        const publication = {
            name: "Transportador por siempre",
            category: "Terror",
            description: "esta es la descripcion"
        }
        addPublications(publication)

        const publicationSubmit ={
            name: "Transportador",
            category: "Accion",
            description: "esta es la descripcion"
        }
        updatePublications(publicationSubmit)
        deletePublications(publication)
    }, [])

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Form to create Publication</h3>
                </div>
                <div className="card-footer">
                    <label className={"m-3"}>Name</label>
                    <input placeholder={"Name"}
                           className={"form-control"}
                           name={"name"}/>
                    <label className={"m-3"}>Category</label>
                    <select className="form-select form-control"
                            name={"category"}
                            >
                        <option >Terror</option>
                        <option >Action</option>
                        <option >Comedy</option>
                        <option >Anime</option>
                        <option >Science fiction</option>
                    </select>
                    <label className={"m-3"}>Description</label>
                    <input type={"text"}
                           placeholder={"Description"}
                           className={"form-control"}
                           name={"description"}/>
                    
                    <div className="text-center">
                        <button onClick="" className="btn btn-success px-5 mt-4 ">Add <i
                            className="bi bi-plus-square"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addPublications, updatePublications, deletePublications}, dispatch);
}

export default connect(null, mapDispatchToProps)(PublicationCreate);