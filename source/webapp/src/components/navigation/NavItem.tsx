import SidebarMenu from 'react-bootstrap-sidebar-menu';

import "./navigation.css";

const NavItem = (props: any) => {

    return (
        <SidebarMenu.Nav.Link href={props.url} className={props.isActive ? "active" : undefined
        }>
            <SidebarMenu.Nav.Icon>
                {props.icon}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
                {props.text}
            </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
    );
}

export default NavItem;