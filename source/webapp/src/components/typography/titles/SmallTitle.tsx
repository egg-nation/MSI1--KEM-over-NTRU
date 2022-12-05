import "../../../utils/css/typography.css";
import "./title.css";

const SmallTitle = (props: any) => {

    return (
        <div className="small-title">
            <h4>
                {props.children}
            </h4>
        </div>
    );
}

export default SmallTitle;