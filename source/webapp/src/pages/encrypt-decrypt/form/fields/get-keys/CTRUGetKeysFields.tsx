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

    const handleCTRUGetKeys = () => {

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);


        CTRUServiceApiClient.getKeys(newAuthToken, {},
            (err: grpcWeb.RpcError, response: CTRUKeys) => {

                if (response != null) {

                    console.log(response)
                    console.log(response.getKeysList())

                } else {

                    setMessage(err.message);
                }
            });
    }

    return (
        <Row>
            <Col className="no-padding-left content-align-end">
                <Button
                    className="button"
                    variant="primary"
                    onClick={() => handleCTRUGetKeys()}>
                    Get keys
                </Button>
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
                {
                    ctruKeys && (
                        <div className="form-group">
                            <div
                                className="alert alert-danger d-flex justify-content-center"
                                role="alert">
                                {
                                    ctruKeys?.map((ctruKey) => {

                                        return (
                                            <div>
                                                <div>Parameters</div>
                                                <div><strong>n: </strong>{ctruKey.getParameters()?.getN()}</div>
                                                <div><strong>q: </strong>{ctruKey.getParameters()?.getQ()}</div>
                                                <div><strong>q2: </strong>{ctruKey.getParameters()?.getQ2()}</div>
                                                <div><strong>eta: </strong>{ctruKey.getParameters()?.getEta()}</div>
                                                <div><strong>id: </strong>{ctruKey.getKeyid()}</div>
                                                <div><strong>public key: </strong>{ctruKey.getPk()}</div>
                                                <div><strong>secret key: </strong>{ctruKey.getSk()}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </Col>
        </Row>
    );
}

export default CTRUGetKeysFields;
