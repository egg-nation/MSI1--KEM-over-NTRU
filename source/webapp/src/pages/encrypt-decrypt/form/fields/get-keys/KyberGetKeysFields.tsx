import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";

type Props = {
    authToken: any;
}

const KyberGetKeysFields = ({authToken}: Props) => {

    const handleKyberGetKeys = () => {

        console.log("kyber get keys");
    }

    return (
        <Row>
            <Col className="no-padding-left content-align-end">
                <Button
                    className="button"
                    variant="primary"
                    onClick={() => handleKyberGetKeys()}>
                    Get keys
                </Button>
            </Col>
        </Row>
    );
}

export default KyberGetKeysFields;
