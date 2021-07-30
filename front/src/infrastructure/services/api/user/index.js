const functions = {
    createUser: (user) => {
        return{
            userid: user.userid,
            email: user.email,
            photoURL: user.photoURL,
        }
    }
}

export default functions