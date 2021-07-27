import {auth} from "./firebase";

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
    const provider = new auth.GithubAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithFacebook(){
    const provider = new auth.FacebookAuthProvider();
    return auth().signInWithPopup(provider)
}

export function logout() {
    return auth().signOut();
}

