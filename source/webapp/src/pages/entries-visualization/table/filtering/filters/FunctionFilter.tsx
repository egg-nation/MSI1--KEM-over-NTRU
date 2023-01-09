import React, {useState} from "react";
import Select from "react-select";
import {Entry} from "../../../../../apidocs/v1_pb";

type Props = {
    entriesListToDisplay: Array<Entry>,
    setEntriesListToDisplay(entriesListToDisplay: Array<Entry>): void,
    updatedEntriesListToDisplay: boolean,
    setUpdatedEntriesListToDisplay(updatedEntriesListToDisplay: boolean): void
}

const FunctionFilter = ({
                             entriesListToDisplay,
                             setEntriesListToDisplay,
                             updatedEntriesListToDisplay,
                             setUpdatedEntriesListToDisplay
                         }: Props) => {

    const options = [
        {value: "All", label: "-- all --"},
        {value: "Encapsulate", label: "Encapsulate"},
        {value: "Decapsulate", label: "Decapsulate"},
        {value: "Keygen", label: "Keygen"}
    ];

    const initialFilterValue = "Function";
    const [placeholderText, setPlaceholderText] = useState(initialFilterValue);

    const handleFilterEntriesByFunction = (selectedOption: string) => {

        selectedOption === options[0].value ?
            setPlaceholderText(initialFilterValue) :
            setPlaceholderText(selectedOption);

        let foundEntries = entriesListToDisplay;

        switch (selectedOption) {

            case options[1].value: {

                foundEntries = entriesListToDisplay.filter(entry => entry.getFunctionname() == "Encapsulate");

                break;
            }
            case options[2].value: {

                foundEntries = entriesListToDisplay.filter(entry => entry.getFunctionname() == "Decapsulate");

                break;
            }
            case options[3].value: {

                foundEntries = entriesListToDisplay.filter(entry => entry.getFunctionname() == "Keygen");

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
            id="entries-function-filter"
            name="type"
            placeholder={placeholderText}
            options={options}
            value={null}
            className="basic-multi-select"
            onChange={(event: any) => {
                handleFilterEntriesByFunction(event.value)
            }}
        />
    );
}

export default FunctionFilter;