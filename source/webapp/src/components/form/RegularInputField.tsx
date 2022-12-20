import React from "react";

type Props = {
    fieldName: string,
    fieldValue: string,
    setFieldValue(fieldValue: string): void,
    fieldAreaLabel: string
}

const RegularInputField = ({
                               fieldName,
                               fieldValue,
                               setFieldValue,
                               fieldAreaLabel
                           }: Props) => {

    return (
        <div className="form-field">
            <div className="col-form-label">
                {fieldName}
            </div>
            <input
                className={"form-control"}
                defaultValue={fieldValue}
                aria-label={fieldAreaLabel}
                onChange={event => {setFieldValue(event.target.value)}}
            />
        </div>
    );
}

export default RegularInputField;
