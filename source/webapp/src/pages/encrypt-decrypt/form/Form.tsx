import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import RadioInputField from "../../../components/form/RadioInputField";
import CTRUGenerateKeysFields from "./fields/generate-keys/CTRUGenerateKeysFields";
import KyberGenerateKeysFields from "./fields/generate-keys/KyberGenerateKeysFields";
import CTRUGetKeysFields from "./fields/get-keys/CTRUGetKeysFields";
import KyberGetKeysFields from "./fields/get-keys/KyberGetKeysFields";
import CTRUAddKeysFields from "./fields/add-keys/CTRUAddKeysFields";
import KyberAddKeysFields from "./fields/add-keys/KyberAddKeysFields";
import CTRUEncapsulateFields from "./fields/encapsulate/CTRUEncapsulateFields";
import KyberEncapsulateFields from "./fields/encapsulate/KyberEncapsulateFields";
import CTRUDecapsulateFields from "./fields/decapsulate/CTRUDecapsulateFields";
import KyberDecapsulateFields from "./fields/decapsulate/KyberDecapsulateFields";
import "../../../utils/css/forms.css";

type Props = {
    authToken: any;
}

const Form = ({authToken}: Props) => {

    const [algorithmName, setAlgorithmName] = useState("CTRU");
    const [functionName, setFunctionName] = useState("Generate keys");

    return (
        <div>
            <Row>
                <div className={"form-field mb-3"}>
                    <Col className="form-label">
                        Algorithm
                    </Col>
                    <Col className="d-flex gap-4 mb-2">
                        <RadioInputField fieldName={"algorithmName"} fieldId={"ctru"}
                                         fieldValue={"CTRU"}
                                         checkedValue={algorithmName}
                                         setCheckedValue={setAlgorithmName}/>
                        <RadioInputField fieldName={"algorithmName"} fieldId={"kyber"}
                                         fieldValue={"Kyber"}
                                         checkedValue={algorithmName}
                                         setCheckedValue={setAlgorithmName}/>
                    </Col>
                </div>
            </Row>
            <Row>
                <div className={"form-field mb-3"}>
                    <Col className="form-label">
                        Function
                    </Col>
                    <Col className="d-flex gap-4 mb-2">
                        <RadioInputField fieldName={"functionName"} fieldId={"keygen"}
                                         fieldValue={"Generate keys"}
                                         checkedValue={functionName}
                                         setCheckedValue={setFunctionName}/>
                        <RadioInputField fieldName={"functionName"} fieldId={"getKeys"}
                                         fieldValue={"Get keys"}
                                         checkedValue={functionName}
                                         setCheckedValue={setFunctionName}/>
                        <RadioInputField fieldName={"functionName"} fieldId={"addKeys"}
                                         fieldValue={"Add keys"}
                                         checkedValue={functionName}
                                         setCheckedValue={setFunctionName}/>
                        <RadioInputField fieldName={"functionName"} fieldId={"encaps"}
                                         fieldValue={"Encapsulate"}
                                         checkedValue={functionName}
                                         setCheckedValue={setFunctionName}/>
                        <RadioInputField fieldName={"functionName"} fieldId={"decaps"}
                                         fieldValue={"Decapsulate"}
                                         checkedValue={functionName}
                                         setCheckedValue={setFunctionName}/>
                    </Col>
                </div>
            </Row>
            {
                (algorithmName == "CTRU" && functionName === "Generate keys") &&
                <CTRUGenerateKeysFields authToken={authToken}/>
            }
            {
                (algorithmName == "Kyber" && functionName === "Generate keys") &&
                <KyberGenerateKeysFields authToken={authToken}/>
            }
            {
                (algorithmName == "CTRU" && functionName === "Get keys") &&
                <CTRUGetKeysFields authToken={authToken}/>
            }
            {
                (algorithmName == "Kyber" && functionName === "Get keys") &&
                <KyberGetKeysFields authToken={authToken}/>
            }
            {
                (algorithmName == "CTRU" && functionName === "Add keys") &&
                <CTRUAddKeysFields authToken={authToken}/>
            }
            {
                (algorithmName == "Kyber" && functionName === "Add keys") &&
                <KyberAddKeysFields authToken={authToken}/>
            }
            {
                (algorithmName == "CTRU" && functionName === "Encapsulate") &&
                <CTRUEncapsulateFields authToken={authToken}/>
            }
            {
                (algorithmName == "Kyber" && functionName === "Encapsulate") &&
                <KyberEncapsulateFields authToken={authToken}/>
            }
            {
                (algorithmName == "CTRU" && functionName === "Decapsulate") &&
                <CTRUDecapsulateFields authToken={authToken}/>
            }
            {
                (algorithmName == "Kyber" && functionName === "Decapsulate") &&
                <KyberDecapsulateFields authToken={authToken}/>
            }
        </div>
    );
}

export default Form;
