import React from 'react';
import {render} from '@testing-library/react';
import EmptyButton from "../../../components/buttons/EmptyButton";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('EmptyButton component test', () => {

    it('should render EmptyButton with no errors', () => {

        // execute
        render(<EmptyButton url={"/test"} text={"button text"} target={"_self"}/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display EmptyButton correctly', () => {

        // execute
        const {container} = render(<EmptyButton url={"/test"} text={"button text"} target={"_self"}/>);

        // verify
        const emptyButton = container.getElementsByClassName("button").item(0);
        expect(emptyButton!.textContent).toContain("button text");

        expect(console.error).not.toHaveBeenCalled();
    })
})
