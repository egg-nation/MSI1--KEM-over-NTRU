import React, {useState} from "react";
import Select from "react-select";
import {Entry} from "../../../../../apidocs/v1_pb";

type Props = {
    entriesListToDisplay: Array<Entry>,
    setEntriesListToDisplay(entriesListToDisplay: Array<Entry>): void,
    updatedEntriesListToDisplay: boolean,
    setUpdatedEntriesListToDisplay(updatedEntriesListToDisplay: boolean): void
}

const AlgorithmFilter = ({
                             entriesListToDisplay,
                             setEntriesListToDisplay,
                             updatedEntriesListToDisplay,
                             setUpdatedEntriesListToDisplay
                         }: Props) => {

    const options = [
        {value: "All", label: "-- all --"},
        {value: "CTRU", label: "CTRU"},
        {value: "Kyber", label: "Kyber"}
    ];

    const initialFilterValue = "Algorithm";
    const [placeholderText, setPlaceholderText] = useState(initialFilterValue);

    const handleFilterEntriesByAlgorithm = (selectedOption: string) => {

        selectedOption === options[0].value ?
            setPlaceholderText(initialFilterValue) :
            setPlaceholderText(selectedOption);

        let foundEntries = entriesListToDisplay;

        switch (selectedOption) {

            case options[1].value: {

                foundEntries = entriesListToDisplay.filter(entry => entry.getAlgorithmname() == "CTRU");

                break;
            }
            case options[2].value: {

                foundEntries = entriesListToDisplay.filter(entry => entry.getAlgorithmname() == "Kyber");

                break;
            }
            case options[0].value: {

                foundEntries = entriesListToDisplay;
            }
        }

        setEntriesListToDisplay(foundEntries);
        setUpdatedEntriesListToDisplay(!updatedEntriesListToDisplay);
    }

    return (
        <Select
            isMulti={false}
            isSearchable={false}
            id="entries-algorithm-filter"
            name="type"
            placeholder={placeholderText}
            options={options}
            value={null}
            className="basic-multi-select"
            onChange={(event: any) => {
                handleFilterEntriesByAlgorithm(event.value)
            }}
        />
    );
}

export default AlgorithmFilter;