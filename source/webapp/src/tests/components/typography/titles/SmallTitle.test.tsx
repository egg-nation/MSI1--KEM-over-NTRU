import React from 'react';
import {render} from '@testing-library/react';
import SmallTitle from "../../../../components/typography/titles/SmallTitle";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('SmallTitle component test', () => {

    it('should render SmallTitle with no errors', () => {

        // execute
        render(<SmallTitle>some text example</SmallTitle>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display SmallTitle correctly', () => {

        // execute
        const {container} = render(<SmallTitle>some text example</SmallTitle>);

        // verify
        const smallTitle = container.getElementsByClassName("small-title").item(0);
        expect(smallTitle!.textContent).toContain("some text example");

        expect(console.error).not.toHaveBeenCalled();
    })
})
