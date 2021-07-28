import React, {useState} from "react";

const Publications = () => {
    const [category, setCategory] = useState('all');
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3">
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
                <div className="col-md-6">
                    <br/><br/>
                    <h1 className="cover-heading mt-5 font-weight-bold">
                        {category} Publications <i className="bi bi-camera-reels"/>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Publications;