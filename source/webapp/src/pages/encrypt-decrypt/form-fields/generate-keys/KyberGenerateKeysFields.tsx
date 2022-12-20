import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../components/form/RegularInputField";
import {AuthToken} from "../../../../apidocs/v1_pb";

type Props = {
    // authToken: AuthToken;
}

const KyberGenerateKeysFields = ({}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [k, setK] = useState<string>();
    const [du, setDu] = useState<string>();
    const [dv, setDv] = useState<string>();

    const handleKyberGenerateKeys = () => {

        console.log("kyber generate keys");
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
                        <RegularInputField fieldName={"eta"} fieldValue={"eta"}
                                           setFieldValue={setEta}
                                           fieldAreaLabel={"eta"}/>
                    </Col>
                    <Col className="d-flex gap-4" xs={{span: 12}}>
                        <RegularInputField fieldName={"k"} fieldValue={"k"}
                                           setFieldValue={setK}
                                           fieldAreaLabel={"k"}/>
                        <RegularInputField fieldName={"du"} fieldValue={"du"}
                                           setFieldValue={setDu}
                                           fieldAreaLabel={"du"}/>
                        <RegularInputField fieldName={"dv"} fieldValue={"dv"}
                                           setFieldValue={setDv}
                                           fieldAreaLabel={"dv"}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            className="button"
                            variant="primary"
                            onClick={() => handleKyberGenerateKeys()}>
                            Generate keys
                        </Button>
                    </Col>
                </Row>
            </div>
        </Row>
    );
}

export default KyberGenerateKeysFields;
