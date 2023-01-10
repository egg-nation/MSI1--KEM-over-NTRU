import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {AuthToken, KYBERKey, KYBERKeys} from "../../../../../apidocs/v1_pb";
import grpcWeb from "grpc-web";
import {KyberServiceApiClient} from "../../../../../services/api/KyberServiceApiClient";
import {getButtonToCopyTextToClipboard} from "../../../../../utils/helpers/GeneralHelpers";

type Props = {
    authToken: any;
}

const KyberGetKeysFields = ({authToken}: Props) => {

    const [message, setMessage] = useState<string>();
    const [kyberKeys, setKyberKeys] = useState<Array<KYBERKey> | undefined>();
    const [displayKyberKeys, setDisplayKyberKeys] = useState(false);

    const handleKyberGetKeys = () => {

        setDisplayKyberKeys(false);

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        KyberServiceApiClient.getKeys(newAuthToken, {},
            (err: grpcWeb.RpcError, response: KYBERKeys) => {

                if (response != null) {

                    const kyberKeysList = response.getKeysList();
                    setKyberKeys(kyberKeysList);
                    setDisplayKyberKeys(true);

                } else {

                    setMessage(err.message);
                }
            });
    }

    return (
        <Row>
            <Col className="no-padding-left content-align-end" xs={12}>
                <Button
                    className="button"
                    variant="primary"
                    onClick={() => handleKyberGetKeys()}>
                    Get keys
                </Button>
            </Col>
            <Col xs={12}>
                {
                    message && (
                        <div className="form-group">
                            <div
                                className="alert alert-danger d-flex justify-content-center"
                                role="alert">
                                {message}
                            </div>
                        </div>
                    )
                }
            </Col>
            <Col className="break-text" xs={12}>
                {
                    displayKyberKeys && kyberKeys && kyberKeys[0].getParameters() && (
                        kyberKeys?.map((kyberKey, index) => {

                            return (
                                <div className={"list-entry"}>
                                    <div className={"mb-3 mt-3"}><h6 className={"skin-color"}><strong>Kyber
                                        key {index}</strong>
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
                                        k: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getK().toString())};
                                        eta: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getEta().toString())};
                                        du: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getDu().toString())};
                                        dv: {getButtonToCopyTextToClipboard(kyberKey.getParameters()?.getDv().toString())}
                                    </div>
                                </div>
                            );
                        })
                    )
                }
            </Col>
        </Row>
    );
}

export default KyberGetKeysFields;
