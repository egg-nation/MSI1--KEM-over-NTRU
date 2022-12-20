import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../components/form/RegularInputField";
import {AuthToken} from "../../../../apidocs/v1_pb";

type Props = {
    // authToken: AuthToken;
}

const CTRUGenerateKeysFields = ({}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [q2, setQ2] = useState<string>();
    const [eta, setEta] = useState<string>();

    const handleCTRUGenerateKeys = () => {

        console.log("ctru generate keys");
    }

    return (
        <Row>
            <div className={"form-field mb-3"}>
                <Col>
                    Parameters
                </Col>
                <Row>
                    <Col className="d-flex gap-4" xs={{span: 12}}>
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
                </Row>
                <Row>
                    <Col>
                        <Button
                            className="button"
                            variant="primary"
                            onClick={() => handleCTRUGenerateKeys()}>
                            Generate keys
                        </Button>
                    </Col>
                </Row>
            </div>
        </Row>
    );
}

export default CTRUGenerateKeysFields;
