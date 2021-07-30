import React, {useState} from "react";

export const PublicationCreate = ({idCount}) => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const publicationCreateSubmit = () => {

        const publicationObject = {
            idCount: idCount,
            name: name,
            category: category,
            description: description,
        }

        console.log("se creo una publicacion", publicationObject)
    }

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
                           name={"name"}
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
                           name={"description"}/>
                    
                    <div className="text-center">
                        <button onClick={publicationCreateSubmit} className="btn btn-success px-5 mt-4 ">Add <i
                            className="bi bi-plus-square"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PublicationCreate