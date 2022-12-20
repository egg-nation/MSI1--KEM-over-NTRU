import React from "react";
// import "./radioInput.css";

type Props = {
    fieldName: string,
    fieldId: string,
    fieldValue: string,
    checkedValue: string,
    setCheckedValue(checkedValue: string): void
}

const RadioInputField = ({fieldName, fieldId, fieldValue, checkedValue, setCheckedValue}: Props) => {

    return (
        <div className="form-check">
            <label className="form-check-label"
                   htmlFor={fieldId}
            >
                {fieldValue}
                <input
                    id={fieldId}
                    type="radio"
                    className="form-check-input"
                    aria-invalid="false"
                    name={fieldName}
                    defaultChecked={checkedValue === fieldValue}
                    value={fieldValue}
                    onChange={event => setCheckedValue(event.target.value)}
                />
            </label>
        </div>
    );
}

export default RadioInputField;
