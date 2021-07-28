import React, {useState} from "react";

const Publications = () => {
    const [category, setCategory] = useState('all');

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
                    {
                        //
                    }
                    <div className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title">First Publication</h5>
                            <h6 className="card-subtitle mb-2 ">Category: Action</h6>
                            <p className={"card-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iste nobis possimus? Ad
                                culpa dignissimos distinctio fuga incidunt ipsum, iure magni molestias odio pariatur
                                perferendis quo quos reprehenderit velit vitae?
                            </p>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title">Second Publication</h5>
                            <h6 className="card-subtitle mb-2 ">Category: Suspense</h6>
                            <p className={"card-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iste nobis possimus? Ad
                                culpa dignissimos distinctio fuga incidunt ipsum, iure magni molestias odio pariatur
                                perferendis quo quos reprehenderit velit vitae?
                            </p>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-body">
                            <h5 className="card-title">Third Publication</h5>
                            <h6 className="card-subtitle mb-2 ">Category: Anime</h6>
                            <p className={"card-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit iste nobis possimus? Ad
                                culpa dignissimos distinctio fuga incidunt ipsum, iure magni molestias odio pariatur
                                perferendis quo quos reprehenderit velit vitae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publications;