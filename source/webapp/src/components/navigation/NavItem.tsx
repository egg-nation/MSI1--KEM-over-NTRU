import SidebarMenu from 'react-bootstrap-sidebar-menu';

import "./navigation.css";

type Props = {
    url?: string,
    target?: string,
    isActive?: boolean,
    icon?: React.ReactNode,
    text?: string,
    onClick?(): void,
    className?: string
}

const NavItem = ({url, target, isActive, icon, text, onClick, className}: Props) => {

    return (
        <SidebarMenu.Nav.Link onClick={onClick} href={url} target={target} className={isActive ? "active " + className : className
        }>
            <SidebarMenu.Nav.Icon>
                {icon}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
                {text}
            </SidebarMenu.Nav.Title>
        </SidebarMenu.Nav.Link>
    );
}

export default NavItem;