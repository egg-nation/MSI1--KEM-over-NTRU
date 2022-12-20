import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {AuthToken, CTRUKeys} from "../../../../../apidocs/v1_pb";
import grpcWeb from "grpc-web";
import {CTRUServiceApiClient} from "../../../../../services/api/CTRUServiceApiClient";

type Props = {
    authToken: AuthToken;
}

const CTRUGetKeysFields = ({authToken}: Props) => {

    const handleCTRUGetKeys = () => {

        console.log("ctru get keys")
        // console.log("0")
        // const stream = CTRUServiceApiClient.getKeys(authToken, {});
        // console.log("1")
        // stream.on('data', function(response) {
        //     console.log("here")
        //     console.log(response.getPk());
        // });
        // stream.cancel();
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
            </Col>
        </Row>
    );
}

export default CTRUGetKeysFields;
