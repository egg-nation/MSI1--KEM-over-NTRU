import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../components/form/RegularInputField";
import {AuthToken} from "../../../../apidocs/v1_pb";

type Props = {
    // authToken: AuthToken;
}

const KyberGetKeysFields = ({}: Props) => {

    const handleKyberGetKeys = () => {

        console.log("kyber get keys");
    }

    return (
        <Row>
            <Col>
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
