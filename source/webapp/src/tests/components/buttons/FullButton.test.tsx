import React from 'react';
import {render} from '@testing-library/react';
import FullButton from "../../../components/buttons/FullButton";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('FullButton component test', () => {

    it('should render FullButton with no errors', () => {

        // execute
        render(<FullButton url={"/test"}>button text</FullButton>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display FullButton correctly', () => {

        // execute
        const {container} = render(<FullButton url={"/test"}>button text</FullButton>);

        // verify
        const fullButton = container.getElementsByClassName("button").item(0);
        expect(fullButton!.textContent).toContain("button text");

        expect(console.error).not.toHaveBeenCalled();
    })
})
