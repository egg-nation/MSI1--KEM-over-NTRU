import React, {useState} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {Col, Container, Row} from "react-bootstrap";
import * as Yup from "yup";

import SmallTitle from "../../components/typography/titles/SmallTitle";
import GenericText from "../../components/typography/text/GenericText";
import Logo from "../../utils/resources/Logo";

import {RegisterCredentials, User} from "../../apidocs/v1_pb";
import {UserServiceApiClient} from "../../services/api/UserServiceApiClient";
import grpcWeb from "grpc-web";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";

import "../../utils/css/forms.css";
import "../../utils/css/styles.css";
import "../../utils/css/paddings.css";

const Register = () => {

    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useAtom(userAtom);
    currentUser && window.open("/", "_self");

    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required!"),
        email: Yup.string()
            .email("This is not a valid e-mail address.")
            .required("E-mail address is required!"),
        password: Yup.string()
            .required("Password is required!")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Password contain 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character"
            )
    });

    const handleRegister = (formValue: { username: string, email: string, password: string }) => {

        const {username, email, password} = formValue;
        setIsLoading(true);

        const registerCredentials = new RegisterCredentials();
        registerCredentials.setUsername(username);
        registerCredentials.setEmailaddress(email);
        registerCredentials.setPassword(password);

        UserServiceApiClient.register(registerCredentials, {},
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
                                                <Field name="username" type="text" className="form-control"
                                                       placeholder="Type your username here..."/>
                                                <ErrorMessage
                                                    name="username"
                                                    component="div"
                                                    className="alert alert-danger alert-with-text"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Field name="email" type="email" className="form-control"
                                                       placeholder="Type your e-mail address here..."/>
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
                                                    placeholder="Type your password here..."
                                                />
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="alert alert-danger alert-with-text"
                                                />
                                            </div>

                                            <div className="form-group d-flex justify-content-center">
                                                <button type="submit" disabled={isLoading}>
                                                    <span>Sign Up</span>
                                                </button>
                                            </div>

                                            {
                                                message && (
                                                    <div className="form-group">
                                                        <div className="alert alert-danger d-flex justify-content-center" role="alert">
                                                            {message}
                                                        </div>
                                                    </div>
                                                )
                                            }
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