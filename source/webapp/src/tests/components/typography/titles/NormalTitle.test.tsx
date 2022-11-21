import React from 'react';
import {render} from '@testing-library/react';
import NormalTitle from "../../../../components/typography/titles/NormalTitle";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('NormalTitle component test', () => {

    it('should render NormalTitle with no errors', () => {

        // execute
        render(<NormalTitle>some text example</NormalTitle>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display NormalTitle correctly', () => {

        // execute
        const {container} = render(<NormalTitle>some text example</NormalTitle>);

        // verify
        const normalTitle = container.getElementsByClassName("normal-title").item(0);
        expect(normalTitle!.textContent).toContain("some text example");

        expect(console.error).not.toHaveBeenCalled();
    })
})
