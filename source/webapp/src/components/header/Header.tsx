import React from "react";
import "./header.css";

type Props = {
    icon: React.ReactNode,
    text: string
}

const Header = ({icon, text}: Props) => {

    return (
        <div className={"header"}>
            <div className={"header-icon"}>{icon}</div>
            <div className={"header-text"}>{text}</div>
        </div>
    );
}

export default Header;