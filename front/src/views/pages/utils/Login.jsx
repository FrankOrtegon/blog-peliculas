import React from "react";
import {
    signInWithFacebook,
    signInWithGitHub,
    signInWithGoogle
} from "../../../infrastructure/services/firebase/config/auth";
import {bindActionCreators} from "redux";
import {loginUser} from "../../../application/actions/user";
import {connect} from "react-redux";
import alertify from "alertifyjs";

const LogIn = ({loginUser}) => {

    const loginWithGoogleUser = (event) => {
        event.preventDefault();
        signInWithGoogle().then(r => {
            alertify.success("Login success");
            loginUser();
        }).catch(error => {
            alertify.error(error.message)
        })
    }
    const loginWithFacebookUser = (event) => {
        event.preventDefault();
        signInWithFacebook().then(r => {
            alertify.success("Login success");
            loginUser();
        }).catch(error => {
            alertify.error(error.message)
        })
    }
    const loginWithGitHubUser = (event) => {
        event.preventDefault();
        signInWithGitHub().then(r => {
            alertify.success("Login success");
            loginUser();
        }).catch(error => {
            alertify.error(error.message)
        })
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">log in with a social network</h3>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-danger btn-block" onClick={loginWithGoogleUser}>
                                <i className="bi bi-google"/> Log in with Google
                            </button>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-info btn-block" onClick={loginWithFacebookUser}>
                                <i className="bi bi-facebook"/> Log in with Facebook
                            </button>
                            <hr className="my-4"/>
                            <button className="btn btn-lg btn-dark btn-block" onClick={loginWithGitHubUser}>
                                <i className="bi bi-github"/> Log in with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(LogIn);