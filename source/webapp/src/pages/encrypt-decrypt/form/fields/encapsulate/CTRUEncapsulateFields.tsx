import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";

type Props = {
    authToken: any;
}

const CTRUEncapsulateFields = ({authToken}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [q2, setQ2] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [keyId, setKeyId] = useState<string>();
    const [pk, setPk] = useState<string>();
    const [sk, setSk] = useState<string>();
    const [iterations, setIterations] = useState<string>();
    const [message, setMessage] = useState<string>();

    const handleCTRUEncapsulate = () => {

        setMessage("n: " + n + ", q: " + q + ", q2: " + q2 + ", eta: " + eta + ", key id: " + keyId +
            ", public key: " + pk + ", secret key: " + sk + ", iterations: " + iterations);
    }

    return (
        <Row>
            <div className={"form-field mb-3"}>
                <Col className="form-label no-padding-left mb-2">
                    Parameters
                </Col>
                <Row>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"n"} fieldValue={""}
                                           setFieldValue={setN}
                                           fieldAreaLabel={"n"}/>
                        <RegularInputField fieldName={"q"} fieldValue={""}
                                           setFieldValue={setQ}
                                           fieldAreaLabel={"q"}/>
                        <RegularInputField fieldName={"q2"} fieldValue={""}
                                           setFieldValue={setQ2}
                                           fieldAreaLabel={"q2"}/>
                        <RegularInputField fieldName={"eta"} fieldValue={""}
                                           setFieldValue={setEta}
                                           fieldAreaLabel={"eta"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"Key id"} fieldValue={""}
                                           setFieldValue={setKeyId}
                                           fieldAreaLabel={"keyId"}/>
                        <RegularInputField fieldName={"Public key"} fieldValue={""}
                                           setFieldValue={setPk}
                                           fieldAreaLabel={"pk"}/>
                        <RegularInputField fieldName={"Secret key"} fieldValue={""}
                                           setFieldValue={setSk}
                                           fieldAreaLabel={"sk"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 2}}>
                        <RegularInputField fieldName={"Iterations"} fieldValue={""}
                                           setFieldValue={setIterations}
                                           fieldAreaLabel={"interations"}/>
                    </Col>
                    <Row>
                        <Col className="no-padding-left no-padding-right content-align-end">
                            <Button
                                className="button"
                                variant="primary"
                                onClick={() => handleCTRUEncapsulate()}>
                                Encapsulate
                            </Button>
                        </Col>
                    </Row>
                    <Row className="no-padding-left">
                        <Col className="no-padding-left no-padding-right">
                            {
                                message && (
                                    <div className="form-group">
                                        <div
                                            className="alert alert-success d-flex justify-content-center"
                                            role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )
                            }
                        </Col>
                    </Row>
                </Row>
            </div>
        </Row>
    );
}

export default CTRUEncapsulateFields;
