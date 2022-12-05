import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import EntriesVisualizationIcon from "../../utils/resources/icons/menu/EntriesVisualizationIcon";
import DeleteIcon from "../../utils/resources/icons/utils/DeleteIcon";
import Loader from "../../components/loader/Loader";
import "../../utils/css/table.css";
import "./entriesVisualization.css";

const EntriesVisualization = () => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    const deleteEntryById = (entryId: string) => {

        return (
            <div className={"delete-entry-button"}>
                <DeleteIcon/>
            </div>
        );
    }

    const displayTable = () => {

        return (
            <table className={"table"}>
                <thead>
                <tr className={"table-header"}>
                    <th className={"table-header-cell th-dimension"}>Id</th>
                    <th className={"table-header-cell th-dimension"}>Algorithm</th>
                    <th className={"table-header-cell th-dimension"}>Function</th>
                    <th className={"table-header-cell th-dimension"}>Input length</th>
                    <th className={"table-header-cell th-dimension"}>Iterations</th>
                    <th className={"table-header-cell th-dimension"}>Avg. execution time</th>
                    <th className={"table-header-cell th-dimension"}></th>
                </tr>
                </thead>
                <tbody>
                <tr className={"table-row"}>
                    <td className={"table-body-cell"}>1</td>
                    <td className={"table-body-cell"}>CTRU</td>
                    <td className={"table-body-cell"}>Decapsulate</td>
                    <td className={"table-body-cell"}>450087</td>
                    <td className={"table-body-cell"}>1000</td>
                    <td className={"table-body-cell"}>1400s</td>
                    <td className={"table-body-cell"}>{deleteEntryById("1")}</td>
                </tr>
                <tr className={"table-row"}>
                    <td className={"table-body-cell"}>2</td>
                    <td className={"table-body-cell"}>CTRU</td>
                    <td className={"table-body-cell"}>Encapsulate</td>
                    <td className={"table-body-cell"}>450087</td>
                    <td className={"table-body-cell"}>1</td>
                    <td className={"table-body-cell"}>1400s</td>
                    <td className={"table-body-cell"}>{deleteEntryById("1")}</td>
                </tr>
                <tr className={"table-row"}>
                    <td className={"table-body-cell"}>3</td>
                    <td className={"table-body-cell"}>CTRU</td>
                    <td className={"table-body-cell"}>Decapsulate</td>
                    <td className={"table-body-cell"}>450087</td>
                    <td className={"table-body-cell"}>100</td>
                    <td className={"table-body-cell"}>1400s</td>
                    <td className={"table-body-cell"}>{deleteEntryById("1")}</td>
                </tr>
                </tbody>
            </table>
        );
    }

    if (currentUser === undefined) {

        return (<Loader/>);

    } else {

        return (
            <>
                <section>
                    <Container fluid>
                        <Row>
                            <Col xl={{span: 2}} lg={{span: 3}} className="no-padding-left no-padding-right">
                                <Navigation currentPage="/entries-visualization"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<EntriesVisualizationIcon/>} text={"Entries visualization"}/>
                                </Row>
                                <Row>
                                    <div className="content-padding content">
                                        {
                                            displayTable()
                                        }
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default EntriesVisualization;