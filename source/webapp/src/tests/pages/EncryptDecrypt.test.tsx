import React from 'react';
import {render} from '@testing-library/react';
import EncryptDecrypt from "../../pages/EncryptDecrypt";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('EncryptDecrypt component test', () => {

    it('should render EncryptDecrypt with no errors', () => {

        // execute
        render(<EncryptDecrypt/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display EncryptDecrypt correctly', () => {

        // execute
        const {container, getByRole} = render(<EncryptDecrypt/>);

        // verify
        const navigation = getByRole("navigation", container);
        expect(navigation).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })
})
