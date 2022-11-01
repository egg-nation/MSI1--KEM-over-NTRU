import React from 'react';
import {render} from '@testing-library/react';
import App from '../App';

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('App component test', () => {

    it('should render App with no errors', () => {

        // execute
        render(<App/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })
})
