import React from 'react';
import {render} from '@testing-library/react';
import GenericText from "../../../../components/typography/text/GenericText";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('GenericText component test', () => {

    it('should render GenericText with no errors', () => {

        // execute
        render(<GenericText>some text example</GenericText>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display GenericText correctly', () => {

        // execute
        const {container} = render(<GenericText>some text example</GenericText>);

        // verify
        const genericText = container.getElementsByClassName("generic-text").item(0);
        expect(genericText!.textContent).toContain("some text example");

        expect(console.error).not.toHaveBeenCalled();
    })
})
