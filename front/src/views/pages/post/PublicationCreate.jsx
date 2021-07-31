import React, {useState} from "react";
import alertify from "alertifyjs";

export const PublicationCreate = ({idCount, addPublications}) => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('All');
    const [description, setDescription] = useState('');

    const publicationCreateSubmit = (event) => {
        event.preventDefault();
        const publicationObject = {
            idCount: idCount,
            name: name,
            category: category,
            description: description,
        }
        addPublications(publicationObject)
        alertify.success("add publication success")
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Form to create Publication</h3>
            </div>
            <div className="card-footer">
                <label className={"m-3"}>Title</label>
                <input placeholder={"Title"}
                       className={"form-control"}
                       value={name}
                       onChange={event => setName(event.target.value)}/>
                <label className={"m-3"}>Category</label>
                <select className="custom-select"
                        value={category}
                        onChange={(event => setCategory(event.target.value))}>
                    <option value="All">All</option>
                    <option value="Action">Action</option>
                    <option value="Anime">Anime</option>
                    <option value="Suspense">Suspense</option>
                </select>
                <label className={"m-3"}>Description</label>
                <input type={"text"}
                       placeholder={"Description"}
                       className={"form-control"}
                       value={description}
                       onChange={event => setDescription(event.target.value)}/>

                <div className="text-center">
                    <button onClick={publicationCreateSubmit} className="btn btn-success px-5 mt-4 ">Add <i
                        className="bi bi-plus-square"/>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PublicationCreate;
