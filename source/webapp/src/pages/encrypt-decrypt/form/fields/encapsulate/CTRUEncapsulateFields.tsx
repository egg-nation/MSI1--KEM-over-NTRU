import React, {useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import RegularInputField from "../../../../../components/form/RegularInputField";
import {
    AuthToken, CTRUExecution, CTRUKey,
    CTRUParameters,
    Entries,
    Entry
} from "../../../../../apidocs/v1_pb";
import grpcWeb from "grpc-web";
import {CTRUServiceApiClient} from "../../../../../services/api/CTRUServiceApiClient";
import {getButtonToCopyTextToClipboard} from "../../../../../utils/helpers/GeneralHelpers";

type Props = {
    authToken: any;
}

const CTRUEncapsulateFields = ({authToken}: Props) => {

    const [n, setN] = useState<string>();
    const [q, setQ] = useState<string>();
    const [q2, setQ2] = useState<string>();
    const [eta, setEta] = useState<string>();
    const [keyId, setKeyId] = useState<string>();
    const [pk, setPk] = useState<string>();
    const [sk, setSk] = useState<string>();
    const [iterations, setIterations] = useState<string>();
    const [data, setData] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [entriesList, setEntriesList] = useState<Array<Entry> | undefined>();
    const [displayEntriesList, setDisplayEntriesList] = useState(false);

    const handleCTRUEncapsulate = () => {

        setDisplayEntriesList(false);

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        let ctruParameters = new CTRUParameters();
        ctruParameters.setN(Number(n));
        ctruParameters.setQ(Number(q));
        ctruParameters.setQ2(Number(q2));
        ctruParameters.setEta(Number(eta));

        let ctruKey = new CTRUKey();
        ctruKey.setKeyid(keyId!);
        ctruKey.setPk(pk!);
        ctruKey.setSk(sk!);
        ctruKey.setParameters(ctruParameters);

        let ctruExecution = new CTRUExecution();
        ctruExecution.setToken(newAuthToken);
        ctruExecution.setIterations(Number(iterations));
        ctruExecution.setKeys(ctruKey);
        ctruExecution.setData(data!);

        CTRUServiceApiClient.runEncaps(ctruExecution, {},
            (err: grpcWeb.RpcError, response: Entries) => {

                if (response != null) {

                    const encapsulatedEntriesList = response.getEntriesList();
                    setEntriesList(encapsulatedEntriesList);
                    setDisplayEntriesList(true);

                } else {

                    setMessage(err.message);
                }
            });
    }

    return (
        <Row>
            <div className={"form-field mb-3"}>
                <Col className="form-label no-padding-left mb-2">
                    Parameters
                </Col>
                <Row>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"n"} fieldValue={""}
                                           setFieldValue={setN}
                                           fieldAreaLabel={"n"}/>
                        <RegularInputField fieldName={"q"} fieldValue={""}
                                           setFieldValue={setQ}
                                           fieldAreaLabel={"q"}/>
                        <RegularInputField fieldName={"q2"} fieldValue={""}
                                           setFieldValue={setQ2}
                                           fieldAreaLabel={"q2"}/>
                        <RegularInputField fieldName={"eta"} fieldValue={""}
                                           setFieldValue={setEta}
                                           fieldAreaLabel={"eta"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"Key id"} fieldValue={""}
                                           setFieldValue={setKeyId}
                                           fieldAreaLabel={"keyId"}/>
                        <RegularInputField fieldName={"Public key"} fieldValue={""}
                                           setFieldValue={setPk}
                                           fieldAreaLabel={"pk"}/>
                        <RegularInputField fieldName={"Secret key"} fieldValue={""}
                                           setFieldValue={setSk}
                                           fieldAreaLabel={"sk"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 12}}>
                        <RegularInputField fieldName={"Data"} fieldValue={""}
                                           setFieldValue={setData}
                                           fieldAreaLabel={"data"}/>
                    </Col>
                    <Col className="d-flex gap-4 no-padding-left mb-3" xs={{span: 2}}>
                        <RegularInputField fieldName={"Iterations"} fieldValue={""}
                                           setFieldValue={setIterations}
                                           fieldAreaLabel={"iterations"}/>
                    </Col>
                    <Row>
                        <Col className="no-padding-left no-padding-right content-align-end">
                            <Button
                                className="button"
                                variant="primary"
                                onClick={() => handleCTRUEncapsulate()}>
                                Encapsulate
                            </Button>
                        </Col>
                    </Row>
                    <Row className="no-padding-left">
                        <Col className="no-padding-left no-padding-right">
                            {
                                message && (
                                    <div className="form-group">
                                        <div
                                            className="alert alert-success d-flex justify-content-center"
                                            role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )
                            }
                        </Col>
                    </Row>
                    <Col className="break-text" xs={12}>
                        {
                            displayEntriesList && entriesList && entriesList[0] && (
                                entriesList?.map((entry, index) => {

                                    return (
                                        <div className={"list-entry"}>
                                            <div className={"mb-3 mt-3"}><h6 className={"skin-color"}>
                                                <strong>Entry {index}</strong>
                                            </h6></div>
                                            <div className={"mb-2"}><strong>Execution
                                                time:</strong> {entry.getExecutiontime()} ms
                                            </div>
                                            <div className={"mb-2"}>
                                                <strong>Output:</strong> {getButtonToCopyTextToClipboard(entry.getOutput())}
                                            </div>
                                        </div>
                                    );
                                })
                            )
                        }
                    </Col>
                </Row>
            </div>
        </Row>
    );
}

export default CTRUEncapsulateFields;
