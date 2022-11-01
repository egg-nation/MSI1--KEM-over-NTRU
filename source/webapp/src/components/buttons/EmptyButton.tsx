import "./button.css";

const EmptyButton = (props: any) => {

    return (
        <div className="button">
            <a href={props.url}><span className="text">{props.children}</span></a>
        </div>
    );
}

export default EmptyButton;