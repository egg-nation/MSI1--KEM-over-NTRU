import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";
import {AuthToken, CTRUKey, CTRUKeygenParameters, CTRUKeygenResult, CTRUParameters} from "../../../../../apidocs/v1_pb";
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
    const [ctruKey, setCtruKey] = useState<CTRUKey | undefined>();
    const [displayCtruKey, setDisplayCtruKey] = useState(false);

    const handleCTRUGenerateKeys = () => {

        setDisplayCtruKey(false);

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        let ctruParameters = new CTRUParameters();
        ctruParameters.setN(Number(n));
        ctruParameters.setQ(Number(q));
        ctruParameters.setQ2(Number(q2));
        ctruParameters.setEta(Number(eta));

        let ctruKeygenParameters = new CTRUKeygenParameters();
        ctruKeygenParameters.setToken(newAuthToken);
        ctruKeygenParameters.setParameters(ctruParameters);

        CTRUServiceApiClient.keygen(ctruKeygenParameters, {},
            (err: grpcWeb.RpcError, response: CTRUKeygenResult) => {

                if (response != null) {

                    const generatedCtruKey = response.getKeys();
                    setCtruKey(generatedCtruKey);
                    setDisplayCtruKey(true);

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
                <Row className="no-padding-left">
                    {
                        displayCtruKey && ctruKey && ctruKey.getParameters() &&
                        <Col className="break-text no-padding-left" xs={12}>
                            <div className={"list-entry"}>
                                <div className={"mb-3 mt-3"}><h6 className={"skin-color"}><strong>CTRU key</strong>
                                </h6></div>
                                <div className={"mb-2"}><strong>Key id:</strong> {ctruKey?.getKeyid()}</div>
                                <div className={"mb-2"}><strong>Public key:</strong> {ctruKey?.getPk()}</div>
                                <div className={"mb-2"}><strong>Secret key:</strong> {ctruKey?.getSk()}</div>
                                <div className={"mb-1"}><strong>CTRU parameters:</strong></div>
                                <div className={"mb-2"}>n: {ctruKey?.getParameters()?.getN()};
                                    q: {ctruKey?.getParameters()?.getQ()};
                                    q2: {ctruKey?.getParameters()?.getQ2()};
                                    eta: {ctruKey?.getParameters()?.getEta()}</div>
                            </div>
                        </Col>
                    }
                </Row>
            </div>
        </Row>
    );
}

export default CTRUGenerateKeysFields;
