import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import EncryptDecryptIcon from "../../utils/resources/icons/menu/EncryptDecryptIcon";
import Loader from "../../components/loader/Loader";
import Form from "./form/Form";

const EncryptDecrypt = () => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    const displayForm = () => {

        if (currentUser != undefined && currentUser.authToken != undefined) {

            return (
                <Form authToken={currentUser?.authToken}/>
            );

        } else {

            return (<></>);
        }
    }

    if (currentUser === undefined) {

        return (<Loader/>);

    } else {

        return (
            <>
                <section>
                    <Container fluid>
                        <Row>
                            <Col xl={{span: 2}} lg={{span: 3}} className="no-padding-left no-padding-right">
                                <Navigation currentPage="/encrypt-decrypt"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<EncryptDecryptIcon/>} text={"Encrypt / Decrypt"}/>
                                </Row>
                                <Row>
                                    <div className="content-padding content">
                                        <Col xl={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}
                                             className="padding-top-smaller">
                                            {
                                                displayForm()
                                            }
                                        </Col>
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

export default EncryptDecrypt;