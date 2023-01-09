import SmallTitle from "../typography/titles/SmallTitle";
import GenericText from "../typography/text/GenericText";
import "./ctaButton.css";
import {ReactNode} from "react";

type Props = {
    title: string,
    text: string,
    icon: ReactNode,
    path: string
}

const CTAButton = ({title, text, icon, path}: Props) => {

    return (
        <a onClick={() => window.location.href = path}>
            <div className={"cta-box"}>
                <div className={"cta-box-icon"}>{icon}</div>
                <div className={"cta-box-title"}><SmallTitle>{title}</SmallTitle></div>
                <div className={"cta-box-text half-opacity"}><GenericText>{text}</GenericText></div>
            </div>
        </a>
    );
}

export default CTAButton;