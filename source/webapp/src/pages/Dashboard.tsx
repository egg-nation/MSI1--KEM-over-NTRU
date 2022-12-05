import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import React from "react";
import {userAtom} from "../services/UserAtom";
import {useAtom} from "jotai";
import Header from "../components/header/Header";
import DashboardIcon from "../resources/icons/menu/DashboardIcon";
import Loader from "../components/loader/Loader";

const Dashboard = () => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    if (currentUser === undefined) {

        return (<Loader/>);

    } else {

        return (
            <>
                <section>
                    <Container fluid>
                        <Row>
                            <Col xl={{span: 2}} lg={{span: 3}} className="no-padding-left no-padding-right">
                                <Navigation currentPage="/"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<DashboardIcon/>} text={"Dashboard"}/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Dashboard;