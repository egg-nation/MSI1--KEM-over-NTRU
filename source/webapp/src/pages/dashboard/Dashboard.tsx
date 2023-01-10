import {Col, Container, Row} from "react-bootstrap";
import Navigation from "../../components/navigation/Navigation";
import React from "react";
import {userAtom} from "../../services/UserAtom";
import {useAtom} from "jotai";
import Header from "../../components/header/Header";
import DashboardIcon from "../../utils/resources/icons/menu/DashboardIcon";
import Loader from "../../components/loader/Loader";
import CTAButton from "../../components/cta/CTAButton";
import WikiIcon from "../../utils/resources/icons/menu/WikiIcon";
import EncryptDecryptIcon from "../../utils/resources/icons/menu/EncryptDecryptIcon";
import EntriesVisualizationIcon from "../../utils/resources/icons/menu/EntriesVisualizationIcon";
import TechnicalReportIcon from "../../utils/resources/icons/menu/TechnicalReportIcon";

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
                                <Row className="content-padding">
                                    <Col xl={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                                        <Row className={"padding-top-smaller"}>
                                            <Col className={"no-padding-left mt-3"} xl={6} xs={12}>
                                                <CTAButton title={"Encrypt / Decrypt"}
                                                           text={"Run key generation, encapsulation and decapsulation functions for the CTRU and Kyber algorithms"}
                                                           path={"/encrypt-decrypt"}
                                                           icon={<EncryptDecryptIcon/>}/>
                                            </Col>
                                            <Col className={"no-padding-left mt-3"} xl={6} xs={12}>
                                                <CTAButton title={"Entries visualization"}
                                                           text={"Visualize your past runs' entry history and stats over it based on execution time and filters"}
                                                           path={"/entries-visualization"}
                                                           icon={<EntriesVisualizationIcon/>}/>
                                            </Col>
                                            <Col className={"no-padding-left mt-3"} xl={6} xs={12}>
                                                <CTAButton title={"Wiki"} text={"What does KON do? What are CTRU and Kyber about? How do I use the platform?"}
                                                           icon={<WikiIcon/>} path={"/wiki"}/>
                                            </Col>
                                            <Col className={"no-padding-left mt-3"} xl={6} xs={12}>
                                                <CTAButton title={"Technical report"}
                                                           text={"Problem presentation. SotA. Our solution. Results, evaluation. Comparison. Future work, etc."}
                                                           icon={<TechnicalReportIcon/>} path={"/technical-report"}/>
                                            </Col>
                                        </Row>
                                    </Col>
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