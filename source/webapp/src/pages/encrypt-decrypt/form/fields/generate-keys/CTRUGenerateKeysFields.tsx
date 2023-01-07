import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";
import {AuthToken, CTRUKeygenParameters, CTRUKeygenResult, CTRUParameters} from "../../../../../apidocs/v1_pb";
import {CTRUServiceApiClient} from "../../../../../services/api/CTRUServiceApiClient";
import grpcWeb from "grpc-web";

type Props = {
    authToken: any;
}

const CTRUGenerateKeysFields = ({authToken}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [q2, setQ2] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [message, setMessage] = useState<string>();

    const handleCTRUGenerateKeys = () => {

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        let ctruKeygenParameters = new CTRUKeygenParameters();
        ctruKeygenParameters.setToken(newAuthToken);

        let ctruParameters = new CTRUParameters();
        ctruParameters.setN(Number(n));
        ctruParameters.setQ(Number(q));
        ctruParameters.setQ2(Number(q2));
        ctruParameters.setEta(Number(eta));

        ctruKeygenParameters.setParameters(ctruParameters);

        CTRUServiceApiClient.keygen(ctruKeygenParameters, {},
            (err: grpcWeb.RpcError, response: CTRUKeygenResult) => {

                if (response != null) {

                    const generatedKeys = "Key id: " + response.getKeys()?.getKeyid() +
                        ", public key: " + response.getKeys()?.getPk() +
                        ", secret key: " + response.getKeys()?.getSk();

                    setMessage(generatedKeys);

                } else {

                    setMessage(err.message);
                }
            });
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
                </Row>
                <Row>
                    <Col className="no-padding-left content-align-end">
                        <Button
                            className="button"
                            variant="primary"
                            onClick={() => handleCTRUGenerateKeys()}>
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

export default CTRUGenerateKeysFields;
