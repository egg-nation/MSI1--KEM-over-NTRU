import React from 'react';
import {act, fireEvent, queryByAttribute, render} from '@testing-library/react';
import Register from "../../../pages/register/Register";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

const getByName = queryByAttribute.bind(null, 'name');

describe('Register component test', () => {

    it('should render Register with no errors', () => {

        // execute
        render(<Register/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display Register correctly', () => {

        // execute
        const {container, getByText} = render(<Register/>);

        // verify
        const registerForm = container.getElementsByClassName("register-form").item(0);
        expect(registerForm).not.toBeNull();

        const registerFormTitle = getByText("Register");
        expect(registerFormTitle).not.toBeNull();

        const usernameRegisterField = getByName(container, "username");
        expect(usernameRegisterField!.textContent).toContain("");

        const registerFormButton = getByText("Sign Up");
        expect(registerFormButton).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })

    it('should change username, email and password field value correctly', async() => {

        // setup
        const {container} = render(<Register/>);

        const usernameRegisterField = getByName(container, "username") as HTMLElement;
        const emailRegisterField = getByName(container, "email") as HTMLElement;
        const passwordRegisterField = getByName(container, "password") as HTMLElement;

        // execute
        await act(async() => {
            fireEvent.change(usernameRegisterField, {target: {value: 'testUsr'}});
        });

        await act(async() => {
            fireEvent.change(emailRegisterField, {target: {value: 'test'}});
        });

        await act(async() => {
            fireEvent.change(passwordRegisterField, {target: {value: 'testPass1!'}});
        });

        // verify
        // @ts-ignore
        expect(usernameRegisterField!.value).toBe('testUsr');
        // @ts-ignore
        expect(emailRegisterField!.value).toBe('test');
        // @ts-ignore
        expect(passwordRegisterField!.value).toBe('testPass1!');

        expect(console.error).not.toHaveBeenCalled();
    })
})
