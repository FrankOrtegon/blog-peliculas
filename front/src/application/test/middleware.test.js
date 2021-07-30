import userMiddleware from '../middleware/user';
import {loadCount, loginUser, loginUserSuccess, updateCount, updateCountSuccess} from "../actions/user";

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
})