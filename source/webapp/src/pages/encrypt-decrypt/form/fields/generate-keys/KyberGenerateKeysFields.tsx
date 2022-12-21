import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";

type Props = {
    authToken: any;
}

const KyberGenerateKeysFields = ({authToken}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [k, setK] = useState<string>();
    const [du, setDu] = useState<string>();
    const [dv, setDv] = useState<string>();
    const [message, setMessage] = useState<string>();

    const handleKyberGenerateKeys = () => {

        setMessage("n: " + n + ", q: " + q + ", eta: " + eta + ", k: " + k + ", du: " + du + ", dv: " + dv);
    }

    return (
        <Row>
            <div className={"form-field mb-3"}>
                <Col className="form-label mb-2">
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
                        <RegularInputField fieldName={"eta"} fieldValue={""}
                                           setFieldValue={setEta}
                                           fieldAreaLabel={"eta"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"k"} fieldValue={""}
                                           setFieldValue={setK}
                                           fieldAreaLabel={"k"}/>
                        <RegularInputField fieldName={"du"} fieldValue={""}
                                           setFieldValue={setDu}
                                           fieldAreaLabel={"du"}/>
                        <RegularInputField fieldName={"dv"} fieldValue={""}
                                           setFieldValue={setDv}
                                           fieldAreaLabel={"dv"}/>
                    </Col>
                </Row>
                <Row>
                    <Col className="no-padding-left content-align-end">
                        <Button
                            className="button"
                            variant="primary"
                            onClick={() => handleKyberGenerateKeys()}>
                            Generate keys
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
            </div>
        </Row>
    );
}

export default KyberGenerateKeysFields;
