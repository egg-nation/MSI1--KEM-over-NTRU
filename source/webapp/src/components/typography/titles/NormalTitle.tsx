import "../../../utils/css/typography.css";
import "./title.css";

const NormalTitle = (props: any) => {

    return (
        <div className="normal-title">
            <h2>
                {props.children}
            </h2>
        </div>
    );
}

export default NormalTitle;