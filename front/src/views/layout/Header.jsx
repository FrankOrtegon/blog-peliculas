import React from "react";
import {Link} from "react-router-dom";
import {getUser} from "../../application/selectors/user";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../../infrastructure/services/firebase/config/auth";
import {logOutUser} from "../../application/actions/user";
import alertify from "alertifyjs";

const Header = ({user, logOutUser}) => {

    const logoutUser = (event) => {
        event.preventDefault()
        logout().then(()=>{
            alertify.success("Log out success");
            logOutUser()
        }).catch(error=>{
            alertify.error(error.message);
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>Movie Blog App <i className="bi bi-camera-reels"/></Link>
                {(user.authenticated) ?
                    <div className="navbar-nav">
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/"}>
                            Home <i className="bi bi-house"/>
                        </Link>
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/profile"}>
                            Profile <i className="bi bi-person-circle"/>
                        </Link>
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/publications"}>
                            Publications <i className="bi bi-card-text"/>
                        </Link>
                        <button className="nav-item mr-3 btn btn-outline-light px-4"
                                onClick={(logoutUser)}>Log Out <i className="bi bi-door-open-fill"/>
                        </button>
                    </div> :
                    <div className="navbar-nav">
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/"}>
                            Home <i className="bi bi-house"/>
                        </Link>
                        <Link className="nav-item mr-3 btn btn-outline-light px-4" to={"/login"}>
                            Log In <i className="bi bi-box-arrow-right"/>
                        </Link>
                    </div>}
            </div>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logOutUser}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);