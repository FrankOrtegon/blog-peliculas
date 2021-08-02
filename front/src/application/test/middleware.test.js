import userMiddleware from '../middleware/user';
import {loadCount, loginUser, loginUserSuccess, updateCount, updateCountSuccess} from "../actions/user";
import { addComment, addCommentSuccess, deleteCommemtSuccess, deleteComment, loadComment, loadCommentSuccess, updateComment } from '../actions/comment';

describe('middleware user test functions', () => {
    const dummyUser = {
        userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        userName: "sebastian cano",
        userEmail: "sebas.cano1036@gmail.com",
        photoURL: "https://lh3.googleusercontent.com/a/AATXAJy86dPBpC-LgdzOV4B7mcHbkRdPoUGPWDQv-9L6=s96-c",
        authenticated: true
    }
    const dummyCount = {
        userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        name: "Pancho",
        phone: "3058935598",
        plan: "true",
    }

    const dummyComment = {
        idComment : "6104e36306dacd3b9e4107bf",
        idPublication : "6104dfba32484e0015f825e3",
        idCount : "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        content : "nuevo comentario"
    }

    const firebase = {
        user: {
            getUser: () => {
                return dummyUser
            }
        }
    }
    const api = {
        count: {
            getCount: () => {
                return dummyCount
            },
            updateCount: () => {
                return dummyCount
            },
        }
    }

    const dispatch = jest.fn();
    const next = jest.fn();

    const [loginUserFlow,updateCountFlow] = userMiddleware;

    describe('login user flow test', () => {

        const action = loginUser();

        test('login user flow test', async () => {
            await loginUserFlow({firebase, api})({dispatch})(next)(action);
            expect(dispatch).toHaveBeenCalledWith(loginUserSuccess(dummyUser))
            expect(dispatch).toHaveBeenCalledWith(loadCount(dummyCount))
            expect(next).toHaveBeenCalledWith(action);
        });

    })

    describe('update count flow test', () => {
        const action = updateCount(dummyCount);

        test('happy path count flow test', async () => {
            await updateCountFlow({api})({dispatch})(next)(action);
            expect(dispatch).toHaveBeenCalledWith(updateCountSuccess(dummyCount));
            expect(next).toHaveBeenCalledWith(action);
        })
    })

    describe('load comment flow test', () =>{
        const action = loadComment(dummyComment);

        test('happy path', async() => {
            await loadCommentFlow({api})({dispatch})(nex)(action);
            expect(dispatch).toHaveBeenCalledWith(loadCommentSuccess(dummyComment));
            expect(next).toHaveBeenCalledWith(action);
        })

    })

    describe('add comment flow test', () => {
        const action = addComment(dummyComment);

        test('Happy path', async() => {
            await addCommentFlow({api})({dispatch})(nex)(action);
            expect(dispatch).toHaveBeenCalledWith(addCommentSuccess(dummyComment));
            expect(next).toHaveBeenCalledWith(action);
        })
    })

    describe('update comment flow test', () => {
        const action = updateComment(dummyComment)

        test('Happy path', async() => {
            await updateCommentFlow({api})({dispatch})(next)(action);
            expect(dispatch).toHaveBeenCalledWith(updateCountSuccess(dummyComment));
            expect(next).toHaveBeenCalledWith(action);
        })
    })

    describe('delete comment flow', () => {
        const action = deleteComment(dummyComment);

        test('happy path', async() => {
            await updateCommentFlow({api})({dispatch})(next)(action);
            expect(dispatch).toHaveBeenCalledWith(deleteCommemtSuccess(dummyComment));
            expect(next).toHaveBeenCalledWith(action);
        })
    })
})