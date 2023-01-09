import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {
    AuthToken,
    CTRUKey,
    CTRUKeys
} from "../../../../../apidocs/v1_pb";
import grpcWeb from "grpc-web";
import {CTRUServiceApiClient} from "../../../../../services/api/CTRUServiceApiClient";

type Props = {
    authToken: any;
}

const CTRUGetKeysFields = ({authToken}: Props) => {

    const [message, setMessage] = useState<string>();
    const [ctruKeys, setCtruKeys] = useState<Array<CTRUKey> | undefined>();
    const [displayCtruKeys, setDisplayCtruKeys] = useState(false);

    const handleCTRUGetKeys = () => {

        setDisplayCtruKeys(false);

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        CTRUServiceApiClient.getKeys(newAuthToken, {},
            (err: grpcWeb.RpcError, response: CTRUKeys) => {

                if (response != null) {

                    const ctruKeysList = response.getKeysList();
                    setCtruKeys(ctruKeysList);
                    setDisplayCtruKeys(true);

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
                    onClick={() => handleCTRUGetKeys()}>
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
                    displayCtruKeys && ctruKeys && ctruKeys[0].getParameters() && (
                        ctruKeys?.map((ctruKey, index) => {

                            return (
                                <div className={"list-entry"}>
                                    <div className={"mb-3 mt-3"}><h6 className={"skin-color"}><strong>CTRU
                                        key {index}</strong>
                                    </h6></div>
                                    <div className={"mb-2"}><strong>Key id:</strong> {ctruKey.getKeyid()}</div>
                                    <div className={"mb-2"}><strong>Public key:</strong> {ctruKey.getPk()}</div>
                                    <div className={"mb-2"}><strong>Secret key:</strong> {ctruKey.getSk()}</div>
                                    <div className={"mb-1"}><strong>CTRU parameters:</strong></div>
                                    <div className={"mb-2"}>n: {ctruKey.getParameters()?.getN()};
                                        q: {ctruKey.getParameters()?.getQ()};
                                        q2: {ctruKey.getParameters()?.getQ2()};
                                        eta: {ctruKey.getParameters()?.getEta()}</div>
                                </div>
                            );
                        })
                    )
                }
            </Col>
        </Row>
    );
}

export default CTRUGetKeysFields;
