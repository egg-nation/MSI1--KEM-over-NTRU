import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";
import {
    AuthToken,
    KYBERKey,
    KYBERKeygenParameters,
    KYBERKeygenResult,
    KYBERParameters
} from "../../../../../apidocs/v1_pb";
import grpcWeb from "grpc-web";
import {KyberServiceApiClient} from "../../../../../services/api/KyberServiceApiClient";
import {getButtonToCopyTextToClipboard} from "../../../../../utils/helpers/GeneralHelpers";

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
    const [kyberKey, setKyberKey] = useState<KYBERKey | undefined>();
    const [displayKyberKey, setDisplayKyberKey] = useState(false);

    const handleKyberGenerateKeys = () => {

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        let kyberParameters = new KYBERParameters();
        kyberParameters.setN(Number(n));
        kyberParameters.setQ(Number(q));
        kyberParameters.setEta(Number(eta));
        kyberParameters.setK(Number(k));
        kyberParameters.setDu(Number(du));
        kyberParameters.setDv(Number(dv));

        let kyberKeygenParameters = new KYBERKeygenParameters();
        kyberKeygenParameters.setToken(newAuthToken);
        kyberKeygenParameters.setParameters(kyberParameters);

        KyberServiceApiClient.keygen(kyberKeygenParameters, {},
            (err: grpcWeb.RpcError, response: KYBERKeygenResult) => {

                if (response != null) {

                    const generatedKyberKey = response.getKeys();
                    setKyberKey(generatedKyberKey);
                    setDisplayKyberKey(true);

                } else {

                    setMessage(err.message);
                }
            });
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
                <Row className="no-padding-left">
                    {
                        displayKyberKey && kyberKey && kyberKey.getParameters() &&
                        <Col className="break-text no-padding-left" xs={12}>
                            <div className={"list-entry"}>
                                <div className={"mb-3 mt-3"}><h6 className={"skin-color"}><strong>Kyber
                                    key</strong>
                                </h6></div>
                                <div className={"mb-2"}><strong>Key
                                    id:</strong> {getButtonToCopyTextToClipboard(kyberKey.getKeyid())}</div>
                                <div className={"mb-2"}><strong>Public
                                    key:</strong> {getButtonToCopyTextToClipboard(kyberKey.getPk())}</div>
                                <div className={"mb-2"}><strong>Secret
                                    key:</strong> {getButtonToCopyTextToClipboard(kyberKey.getSk())}</div>
                                <div className={"mb-1"}><strong>Kyber parameters:</strong></div>
                                <div className={"mb-2"}>
                                    n: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getN().toString())};
                                    q: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getQ().toString())};
                                    eta: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getEta().toString())};
                                    du: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getDu().toString())};
                                    dv: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getDv().toString())}
                                </div>
                            </div>
                        </Col>
                    }
                </Row>
            </div>
        </Row>
    );
}

export default KyberGenerateKeysFields;
