import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import EncryptDecryptIcon from "../../utils/resources/icons/menu/EncryptDecryptIcon";
import Loader from "../../components/loader/Loader";
import RadioInputField from "../../components/form/RadioInputField";
import KyberGenerateKeysFields from "./form-fields/generate-keys/KyberGenerateKeysFields";
import CTRUGenerateKeysFields from "./form-fields/generate-keys/CTRUGenerateKeysFields";
import CTRUGetKeysFields from "./form-fields/get-keys/CTRUGetKeysFields";
import KyberGetKeysFields from "./form-fields/get-keys/KyberGetKeysFields";
import CTRUEncapsulateFields from "./form-fields/encapsulate/CTRUEncapsulateFields";
import KyberEncapsulateFields from "./form-fields/encapsulate/KyberEncapsulateFields";
import CTRUDecapsulateFields from "./form-fields/decapsulate/CTRUDecapsulateFields";
import KyberDecapsulateFields from "./form-fields/decapsulate/KyberDecapsulateFields";
import CTRUAddKeysFields from "./form-fields/add-keys/CTRUAddKeysFields";
import KyberAddKeysFields from "./form-fields/add-keys/KyberAddKeysFields";

const EncryptDecrypt = () => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    const [algorithmName, setAlgorithmName] = useState("CTRU");
    const [functionName, setFunctionName] = useState("Generate keys");

    const displayForm = () => {

        return(
            <div>
                <Row>
                    <div className={"form-field mb-3"}>
                        <Col>
                            Algorithm
                        </Col>
                        <Col className="d-flex gap-4">
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
                        <Col>
                            Function
                        </Col>
                        <Col className="d-flex gap-4">
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
                    <CTRUGenerateKeysFields/>
                }
                {
                    (algorithmName == "Kyber" && functionName === "Generate keys") &&
                    <KyberGenerateKeysFields/>
                }
                {
                    (algorithmName == "CTRU" && functionName === "Get keys") &&
                    <CTRUGetKeysFields/>
                }
                {
                    (algorithmName == "Kyber" && functionName === "Get keys") &&
                    <KyberGetKeysFields/>
                }
                {
                    (algorithmName == "CTRU" && functionName === "Add keys") &&
                    <CTRUAddKeysFields/>
                }
                {/*{*/}
                {/*    (algorithmName == "Kyber" && functionName === "Add keys") &&*/}
                {/*    <KyberAddKeysFields/>*/}
                {/*}*/}
                {
                    (algorithmName == "CTRU" && functionName === "Encapsulate") &&
                    <CTRUEncapsulateFields/>
                }
                {
                    (algorithmName == "Kyber" && functionName === "Encapsulate") &&
                    <KyberEncapsulateFields/>
                }
                {
                    (algorithmName == "CTRU" && functionName === "Decapsulate") &&
                    <CTRUDecapsulateFields/>
                }
                {
                    (algorithmName == "Kyber" && functionName === "Decapsulate") &&
                    <KyberDecapsulateFields/>
                }
            </div>
        );
    }

    if (currentUser === undefined) {

        return (<Loader/>);

    } else {

        return (
            <>
                <section>
                    <Container fluid>
                        <Row>
                            <Col xl={{span: 2}} lg={{span: 3}} className="no-padding-left no-padding-right">
                                <Navigation currentPage="/encrypt-decrypt"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<EncryptDecryptIcon/>} text={"Encrypt / Decrypt"}/>
                                </Row>
                                <Row>
                                    <div className="content-padding content">
                                        {
                                            displayForm()
                                        }
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default EncryptDecrypt;