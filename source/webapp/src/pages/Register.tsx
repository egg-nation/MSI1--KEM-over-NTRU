import React from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";

import "../helpers/forms.css";
import "../helpers/styles.css";
import "../helpers/paddings.css";

import {Col, Container, Row} from "react-bootstrap";
import SmallTitle from "../components/typography/titles/SmallTitle";
import GenericText from "../components/typography/text/GenericText";
import Logo from "../resources/Logo";

const Register = () => {

    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .required("This field is required!")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must contain 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character"
            )
    });

    const handleRegister = () => {


    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={{span: 4, offset: 4}} lg={{span: 6, offset: 1}}>
                            <div className="register-form padding-top-bottom-small">
                                <div className="d-flex justify-content-center">
                                    <Logo/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <SmallTitle>Register</SmallTitle>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleRegister}
                                >
                                    <Form>
                                        <div>
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
                                                <label htmlFor="email">Email</label>
                                                <Field name="email" type="email" className="form-control"/>
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="alert alert-danger alert-with-text"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Field
                                                    name="password"
                                                    type="password"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="alert alert-danger alert-with-text"
                                                />
                                            </div>

                                            <div className="form-group d-flex justify-content-center">
                                                <button type="submit">Sign Up</button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                            <div className="d-flex justify-content-center">
                                <GenericText><span className="half-opacity">Already have a KON account? </span><a
                                    href="/login">Sign in now</a><span
                                    className="half-opacity">.</span></GenericText>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Register;