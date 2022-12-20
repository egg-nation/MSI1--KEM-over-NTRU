import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";
import {AuthToken} from "../../../../../apidocs/v1_pb";

type Props = {
    authToken: AuthToken;
}

const CTRUEncapsulateFields = ({authToken}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [q2, setQ2] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [pk, setPk] = useState<string>();
    const [sk, setSk] = useState<string>();

    const handleCTRUEncapsulate = () => {

        console.log("ctru encapsulate");
    }

    return (
        <Row>
            <div className={"form-field mb-3"}>
                <Col className="form-label no-padding-left mb-2">
                    Parameters
                </Col>
                <Row>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"n"} fieldValue={"n"}
                                           setFieldValue={setN}
                                           fieldAreaLabel={"n"}/>
                        <RegularInputField fieldName={"q"} fieldValue={"q"}
                                           setFieldValue={setQ}
                                           fieldAreaLabel={"q"}/>
                        <RegularInputField fieldName={"q2"} fieldValue={"q2"}
                                           setFieldValue={setQ2}
                                           fieldAreaLabel={"q2"}/>
                        <RegularInputField fieldName={"eta"} fieldValue={"eta"}
                                           setFieldValue={setEta}
                                           fieldAreaLabel={"eta"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"Public key"} fieldValue={"pk"}
                                           setFieldValue={setPk}
                                           fieldAreaLabel={"pk"}/>
                        <RegularInputField fieldName={"Secret key"} fieldValue={"sk"}
                                           setFieldValue={setSk}
                                           fieldAreaLabel={"sk"}/>
                    </Col>
                    <Row>
                        <Col className="no-padding-left no-padding-right content-align-end">
                            <Button
                                className="button"
                                variant="primary"
                                onClick={() => handleCTRUEncapsulate()}>
                                Add keys
                            </Button>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Row>
    );
}

export default CTRUEncapsulateFields;
