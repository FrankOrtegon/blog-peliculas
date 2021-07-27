import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Footer from "../layout/Footer";
import {Profile} from "../pages/users/Profile";


describe('renders test in views', () => {
    test('testing profile', () => {
        const updateCount = jest.fn();

        const history = {
            push: jest.fn()
        };

        const dummyUser = {
            userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
            userName: "sebastian cano",
            userEmail: "sebas.cano1036@gmail.com",
            photoURL: "https://lh3.googleusercontent.com/a/AATXAJy86dPBpC-LgdzOV4B7mcHbkRdPoUGPWDQv-9L6=s96-c",
            authenticated: false
        }

        const dummyCount = {
            userid: "HoPQghuxLxfbMVHYAviqkTIk2JK2",
            name: "Pancho",
            phone: "3058935598",
            plan: "false",
        }

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

    test('testing footer', () => {
        const {getByText} = render(<Footer/>);
        expect(getByText(/Movies Blog App 2021 by Group 03./).textContent).toEqual("© Movies Blog App 2021 by Group 03.");
    })

})