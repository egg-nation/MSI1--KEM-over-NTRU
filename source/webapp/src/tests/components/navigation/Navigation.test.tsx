import React from 'react';
import {render} from '@testing-library/react';
import Navigation from "../../../components/navigation/Navigation";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('Navigation component test', () => {

    it('should render Navigation with no errors', () => {

        // execute
        render(
            <Navigation currentPage={"/wiki"}/>
        );

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display Navigation correctly', () => {

        // execute
        const {container, getByRole} = render(<Navigation currentPage={"/wiki"}/>);

        // verify
        const navigation = getByRole("navigation", container);
        expect(navigation).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })
})
