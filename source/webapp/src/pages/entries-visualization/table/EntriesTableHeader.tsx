import React from "react";
import {Entry} from "../../../apidocs/v1_pb";
import {Button} from "react-bootstrap";
import SortIcon from "../../../utils/resources/icons/utils/SortIcon";

type Props = {
    entriesListToDisplay: Array<Entry>,
    setEntriesListToDisplay(entriesListToDisplay: Array<Entry>): void,
    updatedEntriesListToDisplay: boolean,
    setUpdatedEntriesListToDisplay(updatedEntriesListToDisplay: boolean): void
}

const EntriesTableHeader = ({
                                entriesListToDisplay,
                                setEntriesListToDisplay,
                                updatedEntriesListToDisplay,
                                setUpdatedEntriesListToDisplay
                            }: Props) => {

    const updateTableWithSortedEntriesList = (sortedEntriesList: Array<Entry>, event: any) => {

        setEntriesListToDisplay(sortedEntriesList);
        setUpdatedEntriesListToDisplay(!updatedEntriesListToDisplay);

        const button = event.target;
        const iconToRotate = button.querySelector(".icon-sort");
        iconToRotate.classList.toggle("inverted");
    }

    const handleSortEntriesListByExecutionTime = (event: any) => {

        const getSortedEntriesListByExecutionTime = () => {

            return updatedEntriesListToDisplay ?
                entriesListToDisplay.sort(
                    (firstEntry, secondEntry) => {
                        return firstEntry.getExecutiontime() < secondEntry.getExecutiontime() ?
                            -1 : 1;
                    }) :
                entriesListToDisplay.sort(
                    (firstEntry, secondEntry) => {
                        return firstEntry.getExecutiontime() > secondEntry.getExecutiontime() ?
                            -1 : 1;
                    });
        }
        const sortedEntriesListByExecutionTime = getSortedEntriesListByExecutionTime();
        setUpdatedEntriesListToDisplay(!updatedEntriesListToDisplay);
        updateTableWithSortedEntriesList(sortedEntriesListByExecutionTime, event);
    }

    return (
        <thead>
        <tr className={"table-header"}>
            <th className={"table-header-cell th-dimension"}>Id</th>
            <th className={"table-header-cell th-dimension"}>Algorithm</th>
            <th className={"table-header-cell th-dimension"}>Function</th>
            <th className={"table-header-cell th-dimension"}>
                <Button
                    id="sort-by-execution-time"
                    className="Table-header-cell btn-sort"
                    style={{textAlign: "left"}}
                    variant="link"
                    onClick={handleSortEntriesListByExecutionTime}>
                    Execution time
                    <SortIcon/>
                </Button>
            </th>
            <th className={"table-header-cell th-dimension"}></th>
        </tr>
        </thead>
    );
}

export default EntriesTableHeader;