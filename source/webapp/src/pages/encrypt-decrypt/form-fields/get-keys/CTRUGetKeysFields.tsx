import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {AuthToken} from "../../../../apidocs/v1_pb";

type Props = {
    // authToken: AuthToken;
}

const CTRUGetKeysFields = ({}: Props) => {

    const handleCTRUGetKeys = () => {

        console.log("ctru get keys");
    }

    return (
        <Row>
            <Col>
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
