import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import React from "react";
import {userAtom} from "../services/UserAtom";
import {useAtom} from "jotai";

const Dashboard = () => {

    const [currentUser, ] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    return (
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col xl={{span: 2}} lg={{span: 3}}>
                            <Navigation currentPage="/"/>
                        </Col>
                        <Col xl={{span: 4, offset: 3}} lg={{span: 7, offset: 1}}>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Dashboard;