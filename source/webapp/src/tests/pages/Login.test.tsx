import React from 'react';
import {act, fireEvent, getByText, queryByAttribute, render} from '@testing-library/react';
import Login from "../../pages/Login";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

const getByName = queryByAttribute.bind(null, 'name');

describe('Login component test', () => {

    it('should render Login with no errors', () => {

        // execute
        render(<Login/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display Login correctly', () => {

        // execute
        const {container, getByText} = render(<Login/>);

        // verify
        const loginForm = container.getElementsByClassName("login-form").item(0);
        expect(loginForm).not.toBeNull();

        const loginFormTitle = getByText("Sign in");
        expect(loginFormTitle).not.toBeNull();

        const usernameLoginField = getByName(container, "username");
        expect(usernameLoginField!.textContent).toContain("");

        const loginFormButton = getByText("Login");
        expect(loginFormButton).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })

    it('should change username and password field value correctly', async() => {

        // setup
        const {container} = render(<Login/>);

        const usernameLoginField = getByName(container, "username") as HTMLElement;
        const passwordLoginField = getByName(container, "password") as HTMLElement;

        // execute
        await act(async() => {
            fireEvent.change(usernameLoginField, {target: {value: 'testUsr'}});
        });

        await act(async() => {
            fireEvent.change(passwordLoginField, {target: {value: 'testPass'}});
        });

        await act(async() => {
            fireEvent.change(passwordLoginField, {target: {value: ''}});
        });

        // verify
        // @ts-ignore
        expect(usernameLoginField!.value).toBe('testUsr');
        // @ts-ignore
        expect(passwordLoginField!.value).toBe('');

        expect(console.error).not.toHaveBeenCalled();
    })
})
