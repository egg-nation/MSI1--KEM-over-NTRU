import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import React from "react";
import {useAtom} from "jotai";
import {userAtom} from "../services/UserAtom";

const Wiki = () => {

    const [currentUser, ] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    return (
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col xl={{span: 2}} lg={{span: 3}}>
                            <Navigation currentPage="/wiki"/>
                        </Col>
                        <Col xl={{span: 4, offset: 3}} lg={{span: 7, offset: 1}}>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Wiki;