import "./button.css";

type Props = {
    url: string,
    text: string,
    target: string
}

const EmptyButton = ({url, text, target}: Props) => {

    return (
        <div className="button">
            <a href={url} target={target}><span className="text">{text}</span></a>
        </div>
    );
}

export default EmptyButton;