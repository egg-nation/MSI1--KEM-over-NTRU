import React from 'react';
import {render} from '@testing-library/react';
import Dashboard from "../../pages/Dashboard";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('Dashboard component test', () => {

    it('should render Dashboard with no errors', () => {

        // execute
        render(<Dashboard/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display Dashboard correctly', () => {

        // execute
        const {container, getByRole} = render(<Dashboard/>);

        // verify
        const navigation = getByRole("navigation", container);
        expect(navigation).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })
})
