import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <br/><br/>
                    <h1 className="cover-heading mt-5 font-weight-bold">
                        Welcome to the movie blog app <i className="bi bi-camera-reels"/>
                    </h1>
                    <h4 className={"color-black mt-5"}>
                        In this application you can see a large list of reviews of your favorite movies,
                        and other functionalities ... do not miss it, and register now
                    </h4>
                    <Link className=" mt-5 btn btn-primary px-4" to={"/login"}>Log In now</Link>
                    <br/><br/>
                </div>
            </div>
            <hr className="m-5"/>
            <h1 className="cover-heading mt-5 font-weight-bold">
                developed by <i className="bi bi-file-earmark-code"/>
            </h1>
            <hr className="m-5"/>
            <div className="row">
                <div className="col-md-4">
                    <img className="rounded-circle"
                         src="https://image.flaticon.com/icons/png/512/206/206853.png"
                         alt="" width={"140"} height={"140"} />
                        <h2>Sebastian C.</h2>
                        <p>Frontend Developer</p>
                </div>
                <div className="col-md-4">
                    <img className="rounded-circle"
                         src="https://image.flaticon.com/icons/png/512/219/219990.png"
                         alt="" width={"140"} height={"140"} />
                    <h2>Luisa G.</h2>
                    <p>Backend Developer</p>
                </div>
                <div className="col-md-4">
                    <img className="rounded-circle"
                         src="https://www.munitamarindo.gob.pe/wp-content/uploads/2019/09/profile_png_1113533.png"
                         alt="" width={"140"} height={"140"} />
                    <h2>Frank O.</h2>
                    <p>Backend Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Home;