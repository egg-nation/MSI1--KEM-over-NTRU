import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import EntriesVisualizationIcon from "../../utils/resources/icons/menu/EntriesVisualizationIcon";
import Loader from "../../components/loader/Loader";
import "../../utils/css/table.css";
import "./entriesVisualization.css";
import {EntryServiceApiClient} from "../../services/api/EntryServiceApiClient";
import {AuthToken, Entries, Entry} from "../../apidocs/v1_pb";
import grpcWeb from "grpc-web";
import EntriesTable from "./table/EntriesTable";

const EntriesVisualization = () => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    const [entriesList, setEntriesList] = useState<Array<Entry> | undefined>();
    const [displayEntriesList, setDisplayEntriesList] = useState(false);

    useEffect(() => {

        const authToken = currentUser?.authToken;

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        EntryServiceApiClient.getEntryHistory(newAuthToken, {},
            (err: grpcWeb.RpcError, response: Entries) => {

                if (response != null) {

                    const entriesHistoryList = response.getEntriesList();
                    setEntriesList(entriesHistoryList);
                    setDisplayEntriesList(true);

                } else {

                    console.log(err.message);
                }
            });

    }, []);

    if (currentUser === undefined) {

        return (<Loader/>);

    } else {

        return (
            <>
                <section>
                    <Container fluid>
                        <Row>
                            <Col xl={{span: 2}} lg={{span: 3}} className="no-padding-left no-padding-right">
                                <Navigation currentPage="/entries-visualization"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<EntriesVisualizationIcon/>} text={"Entries visualization"}/>
                                </Row>
                                <Row>
                                    <div className="content-padding content">
                                        {
                                            displayEntriesList && <EntriesTable entriesList={entriesList!}/>
                                        }
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default EntriesVisualization;