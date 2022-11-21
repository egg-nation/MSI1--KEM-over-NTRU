import "./generic-text.css";

const GenericText = (props: any) => {

    return (
        <div className="generic-text">
            <p>
                {props.children}
            </p>
        </div>
    );
}

export default GenericText;