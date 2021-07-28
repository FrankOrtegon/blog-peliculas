import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {Footer} from "../layout/Footer";
import {Profile} from "../pages/users/Profile";
import {Header} from "../layout/Header";
import {App} from "../routes/App";
import {LogIn} from "../pages/utils/Login";
import {Home} from "../pages/utils/Home";
import {Router} from "react-router-dom";
import {createMemoryHistory} from 'history';

describe('renders test in views', () => {
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
        plan: "false",
    }

    test('testing profile', () => {
        const updateCount = jest.fn();

        const history = {
            push: jest.fn()
        };

        const {getByTestId} = render(
            <Profile user={dummyUser} updateCount={updateCount} count={dummyCount} history={history}/>
        );

        const input = getByTestId("input-test-name")

        fireEvent.change(input, {target: {value: 'new name'}})

        const button = getByTestId("btn-test")

        fireEvent.click(button)

        expect(updateCount).toHaveBeenCalledWith({
            name: "new name",
            phone: "3058935598",
            plan: "false",
            userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
        });

        expect(history.push).toHaveBeenCalled();
    })

    test('testing Login', () => {
        const loginUser = jest.fn();
        const {getByTestId} = render(<LogIn loginUser={loginUser}/>);
        const button = getByTestId("btn-test")
        fireEvent.click(button)
    })

   /* test('testing App', () => {
        const history = createMemoryHistory()
        const logOutUser = jest.fn();
        const {getByTestId} = render(
            <App user={dummyUser}/>
        );
    })*/

    test('testing header', () => {
        const history = createMemoryHistory()
        const logOutUser = jest.fn();
        const {getByTestId} = render(
            <Router history={history}>
                <Header user={dummyUser} logOutUser={logOutUser}/>
            </Router>
        );
        const button = getByTestId("btn-test");
        fireEvent.click(button)

    })
    test('testing footer', () => {
        const {getByText} = render(<Footer/>);
        expect(getByText(/Movies Blog App 2021 by Group 03./).textContent).toEqual("© Movies Blog App 2021 by Group 03.");
    })

    test('testing home', () => {
        const history = createMemoryHistory()
        const {getByText} = render(
            <Router history={history}>
                <Home/>
            </Router>
        );
        expect(getByText(/Welcome to the movie blog app/i).textContent).toEqual("Welcome to the movie blog app ")
    })
})