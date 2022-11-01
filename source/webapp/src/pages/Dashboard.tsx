import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import NavItem from "../components/navigation/NavItem";
import DashboardIcon from "../resources/icons/menu/DashboardIcon";
import EncryptDecryptIcon from "../resources/icons/menu/EncryptDecryptIcon";
import EntriesVisualizationIcon from "../resources/icons/menu/EntriesVisualizationIcon";
import WikiIcon from "../resources/icons/menu/WikiIcon";
import React from "react";

const Dashboard = () => {

    return (
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col xl={{span: 2}} lg={{span: 3}}>
                            <Navigation>
                                <NavItem icon={<DashboardIcon/>} text="Dashboard" url="/" target="_self"/>
                                <NavItem icon={<EncryptDecryptIcon/>} text="Encrypt / Decrypt" url="/encrypt-decrypt"
                                         target="_self"/>
                                <NavItem icon={<EntriesVisualizationIcon/>} text="Entries visualization"
                                         url="/entries-visualization" target="_self"/>
                                <NavItem icon={<WikiIcon/>} text="Wiki" url="/wiki" target="_self"/>
                            </Navigation>
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