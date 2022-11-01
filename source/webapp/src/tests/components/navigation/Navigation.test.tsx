import React from 'react';
import {render} from '@testing-library/react';
import Navigation from "../../../components/navigation/Navigation";
import NavItem from "../../../components/navigation/NavItem";
import WikiIcon from "../../../resources/icons/menu/WikiIcon";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('Navigation component test', () => {

    it('should render Navigation with no errors when there are NavItems', () => {

        // execute
        render(
            <Navigation>
                <NavItem icon={<WikiIcon/>} text="Wiki" url="/wiki" target="_self"/>
            </Navigation>
        );

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should render Navigation with no errors when there are no NavItems', () => {

        // execute
        render(<Navigation></Navigation>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display Navigation correctly', () => {

        // execute
        const {container, getByRole} = render(<Navigation></Navigation>);

        // verify
        const navigation = getByRole("navigation", container);
        expect(navigation).not.toBeNull();

        expect(console.error).not.toHaveBeenCalled();
    })
})
