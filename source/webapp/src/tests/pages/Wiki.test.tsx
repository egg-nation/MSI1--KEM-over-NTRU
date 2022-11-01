import React from 'react';
import {render} from '@testing-library/react';
import Wiki from "../../pages/Wiki";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('Wiki component test', () => {

    it('should render Wiki with no errors', () => {

        // execute
        render(<Wiki/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display Wiki correctly', () => {

        // execute
        const {container, getByRole} = render(<Wiki/>);

        // verify
        const navigation = getByRole("navigation", container);
        expect(navigation).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })
})
