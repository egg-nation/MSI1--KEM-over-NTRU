import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

import "../helpers/forms.css";
import "../helpers/styles.css";
import "../helpers/paddings.css";

import SmallTitle from "../components/typography/titles/SmallTitle";
import {Col, Row, Container} from "react-bootstrap";
import GenericText from "../components/typography/text/GenericText";
import Logo from "../resources/Logo";

const Login = () => {

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
    });

    const handleLogin = () => {

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
                                            <Field name="username" type="text" className="form-control"/>
                                            <ErrorMessage
                                                name="username"
                                                component="div"
                                                className="alert alert-danger alert-with-text"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <Field name="password" type="password" className="form-control"/>
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="alert alert-danger alert-with-text"
                                            />
                                        </div>

                                        <div className="form-group d-flex justify-content-center">
                                            <button type="submit">
                                                <span>Login</span>
                                            </button>
                                        </div>
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