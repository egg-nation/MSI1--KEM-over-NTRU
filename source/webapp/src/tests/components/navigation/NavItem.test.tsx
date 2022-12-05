import React from 'react';
import {render} from '@testing-library/react';
import NavItem from "../../../components/navigation/NavItem";
import WikiIcon from "../../../utils/resources/icons/menu/WikiIcon";

beforeEach(() => {
    jest.spyOn(console, 'error');
});

describe('NavItem component test', () => {

    it('should render NavItem with no errors', () => {

        // execute
        render(<NavItem icon={<WikiIcon/>} text="Wiki" url="/wiki" target="_self"/>);

        // verify
        expect(console.error).not.toHaveBeenCalled();
    })

    it('should display NavItem correctly', () => {

        // execute
        const {container} = render(<NavItem icon={<WikiIcon/>} text="Wiki" url="/wiki" target="_self"/>);

        // verify
        const navItemIcon = container.getElementsByClassName("sidebar-menu-nav-icon").item(0);
        const navItemTitle = container.getElementsByClassName("sidebar-menu-nav-title").item(0);

        expect(navItemIcon!.getElementsByClassName("icon")).not.toBeNull();
        expect(navItemTitle!.textContent).toContain("Wiki");

        expect(console.error).not.toHaveBeenCalled();
    })
})
