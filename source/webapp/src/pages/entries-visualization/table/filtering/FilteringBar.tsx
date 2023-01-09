import React, {useEffect, useState} from "react";
import {Entry} from "../../../../apidocs/v1_pb";
import AlgorithmFilter from "./filters/AlgorithmFilter";
import FunctionFilter from "./filters/FunctionFilter";
import {Col, Row} from "react-bootstrap";
import "../../../../utils/css/forms.css";

type Props = {
    entriesListToDisplay: Array<Entry>,
    setEntriesListToDisplay(entriesListToDisplay: Array<Entry>): void,
    updatedEntriesListToDisplay: boolean,
    setUpdatedEntriesListToDisplay(updatedEntriesListToDisplay: boolean): void
}

const FilteringBar = ({
                          entriesListToDisplay,
                          setEntriesListToDisplay,
                          updatedEntriesListToDisplay,
                          setUpdatedEntriesListToDisplay
                      }: Props) => {

    const [algorithmFilteredEntries, setAlgorithmFilteredEntries] = useState<Array<Entry>>(entriesListToDisplay);
    const [functionFilteredEntries, setFunctionFilteredEntries] = useState<Array<Entry>>(entriesListToDisplay);

    const setMultipleFilteredEntries = () => {

        let multipleFilteredEntries = Array<Entry>();

        algorithmFilteredEntries.forEach(entry => {

            if (functionFilteredEntries.includes(entry)) {

                multipleFilteredEntries.push(entry);
            }
        })

        setEntriesListToDisplay(multipleFilteredEntries);
    }

    useEffect(() => {

        setMultipleFilteredEntries();
        setUpdatedEntriesListToDisplay(!updatedEntriesListToDisplay);

    }, [algorithmFilteredEntries, functionFilteredEntries]);

    return (
        <Row className="no-padding-left filtering-bar flex-grow-1 d-flex flex-row align-items-center mb-3">
            <Col md={3} sm={6} className="no-padding-left me-2">
                <AlgorithmFilter entriesListToDisplay={entriesListToDisplay}
                                 setEntriesListToDisplay={setAlgorithmFilteredEntries}
                                 updatedEntriesListToDisplay={updatedEntriesListToDisplay}
                                 setUpdatedEntriesListToDisplay={setUpdatedEntriesListToDisplay}/>
            </Col>
            <Col md={3} sm={6} className="no-padding-left me-2">
                <FunctionFilter entriesListToDisplay={entriesListToDisplay}
                                setEntriesListToDisplay={setFunctionFilteredEntries}
                                updatedEntriesListToDisplay={updatedEntriesListToDisplay}
                                setUpdatedEntriesListToDisplay={setUpdatedEntriesListToDisplay}/>
            </Col>
        </Row>
    );
}

export default FilteringBar;