import React from 'react';
import {render} from '@testing-library/react';
import EntriesVisualization from "../../../pages/entries-visualization/EntriesVisualization";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('EntriesVisualization component test', () => {

    it('should render EntriesVisualization with no errors', () => {

        // execute
        render(<EntriesVisualization/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display EntriesVisualization correctly', () => {

        // execute
        const {container, getByRole} = render(<EntriesVisualization/>);

        // verify
        const navigation = getByRole("navigation", container);
        expect(navigation).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })
})
