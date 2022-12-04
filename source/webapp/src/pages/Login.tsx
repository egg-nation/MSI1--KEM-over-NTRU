import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {Col, Row, Container} from "react-bootstrap";
import * as Yup from "yup";

import SmallTitle from "../components/typography/titles/SmallTitle";
import GenericText from "../components/typography/text/GenericText";
import Logo from "../resources/Logo";

import * as grpcWeb from 'grpc-web';
import {LoginCredentials, User} from "../apidocs/v1_pb";
import {UserServiceApiClient} from "../api/UserServiceApiClient";

import "../helpers/forms.css";
import "../helpers/styles.css";
import "../helpers/paddings.css";
import {useAtom} from "jotai";
import {userAtom} from "../services/UserAtom";

const Login = () => {

    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useAtom(userAtom);
    currentUser && window.open("/", "_self");

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required!"),
        password: Yup.string().required("Password is required!"),
    });

    const handleLogin = (formValue: { username: string, password: string }) => {

        const {username, password} = formValue;
        setIsLoading(true);

        const loginCredentials = new LoginCredentials();
        loginCredentials.setUsername(username);
        loginCredentials.setPassword(password);

        UserServiceApiClient.login(loginCredentials, {},
            (err: grpcWeb.RpcError, response: User) => {

                response != null ?
                    setCurrentUser({
                        username: response.getUsername(),
                        email: response.getEmailaddress(),
                        authToken: response.getToken()
                    }) :
                    setMessage(err.message);

                setIsLoading(false);
            });
    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={{span: 4, offset: 4}} lg={{span: 6, offset: 1}}>
                            <div className="login-form padding-top-bottom-small">
                                <div className="d-flex justify-content-center">
                                    <Logo/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <SmallTitle>Sign in</SmallTitle>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleLogin}
                                >
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <Field name="username" type="text" className="form-control"
                                                   placeholder="Type your username here..."/>
                                            <ErrorMessage
                                                name="username"
                                                component="div"
                                                className="alert alert-danger alert-with-text"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <Field name="password" type="password" className="form-control"
                                                   placeholder="Type your password here..."/>
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="alert alert-danger alert-with-text"
                                            />
                                        </div>

                                        <div className="form-group d-flex justify-content-center">
                                            <button type="submit" disabled={isLoading}>
                                                <span>Login</span>
                                            </button>
                                        </div>

                                        {
                                            message && (
                                                <div className="form-group">
                                                    <div
                                                        className="alert alert-danger alert-with-text alert-with-background d-flex justify-content-center"
                                                        role="alert">
                                                        {message}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Form>
                                </Formik>
                            </div>
                            <div className="d-flex justify-content-center">
                                <GenericText><span className="half-opacity">Don’t have a KON account? </span><a
                                    href="/register">Register now</a><span
                                    className="half-opacity">.</span></GenericText>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Login;