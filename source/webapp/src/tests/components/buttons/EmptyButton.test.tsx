import React from 'react';
import {render} from '@testing-library/react';
import EmptyButton from "../../../components/buttons/EmptyButton";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('EmptyButton component test', () => {

    it('should render EmptyButton with no errors', () => {

        // execute
        render(<EmptyButton url={"/test"}>button text</EmptyButton>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display EmptyButton correctly', () => {

        // execute
        const {container} = render(<EmptyButton url={"/test"}>button text</EmptyButton>);

        // verify
        const emptyButton = container.getElementsByClassName("button").item(0);
        expect(emptyButton!.textContent).toContain("button text");

        expect(console.error).not.toHaveBeenCalled();
    })
})
