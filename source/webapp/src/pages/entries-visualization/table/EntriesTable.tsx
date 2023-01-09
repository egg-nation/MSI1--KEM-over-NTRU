import React, {useState} from "react";
import {AuthToken, Entry, EntryID} from "../../../apidocs/v1_pb";
import DeleteIcon from "../../../utils/resources/icons/utils/DeleteIcon";
import EntriesTableHeader from "./EntriesTableHeader";
import {EntryServiceApiClient} from "../../../services/api/EntryServiceApiClient";
import grpcWeb from "grpc-web";
import {useAtom} from "jotai";
import {userAtom} from "../../../services/UserAtom";
import {Button} from "react-bootstrap";
import FilteringBar from "./filtering/FilteringBar";

type Props = {
    entriesList: Array<Entry>
}

const EntriesTable = ({entriesList}: Props) => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    const [entriesListToDisplay, setEntriesListToDisplay] = useState<Array<Entry>>(entriesList);
    const [updatedEntriesListToDisplay, setUpdatedEntriesListToDisplay] = useState(false);

    const [currentEntry, setCurrentEntry] = useState<string>();

    const handleDeleteEntryById = () => {

        const authToken = currentUser?.authToken;

        let newAuthToken = new AuthToken();
        newAuthToken.setUserid(authToken.userid);
        newAuthToken.setGeneratedat(authToken.generatedat);
        newAuthToken.setExpiresat(authToken.expiresat);
        newAuthToken.setSignature(authToken.signature);

        let entryIdToDelete = new EntryID();
        entryIdToDelete.setToken(newAuthToken);
        entryIdToDelete.setEntryid(currentEntry!);

        EntryServiceApiClient.deleteEntry(entryIdToDelete, {},
            (err: grpcWeb.RpcError, response: EntryID) => {

                if (response != null) {

                    window.location.reload();

                } else {

                    console.log(err.message);
                }
            });
    }

    const deleteEntryById = (entryId: string) => {

        // TODO deletes only after a second click ?!

        return (
            <div className={"delete-entry-button"}>
                <Button
                    id="sort-by-execution-time"
                    className="Table-header-cell btn-sort"
                    style={{textAlign: "left"}}
                    variant="link"
                    onClick={() => {
                        setCurrentEntry(entryId);
                        setUpdatedEntriesListToDisplay(!updatedEntriesListToDisplay);
                        handleDeleteEntryById();
                    }}>
                    <DeleteIcon/>
                </Button>
            </div>
        );
    }

    const displayTable = () => {

        return (
            <div>
                <FilteringBar entriesListToDisplay={entriesList}
                              setEntriesListToDisplay={setEntriesListToDisplay}
                              updatedEntriesListToDisplay={updatedEntriesListToDisplay}
                              setUpdatedEntriesListToDisplay={setUpdatedEntriesListToDisplay}/>
                <table className={"table"}>
                    <EntriesTableHeader entriesListToDisplay={entriesListToDisplay}
                                        setEntriesListToDisplay={setEntriesListToDisplay}
                                        updatedEntriesListToDisplay={updatedEntriesListToDisplay}
                                        setUpdatedEntriesListToDisplay={setUpdatedEntriesListToDisplay}/>
                    <tbody>
                    {
                        entriesListToDisplay?.map((entry) => {

                            return (
                                <tr className={"table-row"}>
                                    <td className={"table-body-cell"}>{entry.getId()}</td>
                                    <td className={"table-body-cell"}>{entry.getAlgorithmname()}</td>
                                    <td className={"table-body-cell"}>{entry.getFunctionname()}</td>
                                    <td className={"table-body-cell"}>{entry.getExecutiontime()} ms</td>
                                    <td className={"table-body-cell"}>{deleteEntryById(entry.getId())}</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <>{displayTable()}</>
    );
}

export default EntriesTable;