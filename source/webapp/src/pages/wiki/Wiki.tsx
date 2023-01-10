import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import WikiIcon from "../../utils/resources/icons/menu/WikiIcon";
import Navigation from "../../components/navigation/Navigation";
import Loader from "../../components/loader/Loader";

const Wiki = () => {

    const [currentUser,] = useAtom(userAtom);
    currentUser === undefined && window.open("/login", "_self");

    if (currentUser === undefined) {

        return (<Loader/>);

    } else {

        return (
            <>
                <section>
                    <Container fluid>
                        <Row>
                            <Col xl={{span: 2}} lg={{span: 3}} className="no-padding-left no-padding-right">
                                <Navigation currentPage="/wiki"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<WikiIcon/>} text={"Wiki"}/>
                                </Row>
                                <Row>
                                    <div className="content-padding content">
                                        <Col xl={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                                            <div className={"mb-3 padding-top-smaller"}>
                                                <h5><span
                                                    className={"skin-color"}>1</span> - What does KON do?</h5>
                                                <p><strong className={"skin-color"}>KEM over NTRU (KON)</strong> is an
                                                    educative platform for time complexity
                                                    comparison between 2 implementations of KEM over NTRU which allows
                                                    its users to run the keygen, encapsulate and decapsulate functions
                                                    of the implemented algorithms (BAT and CTRU) with their input of
                                                    choice, and allows them to better understand why are they useful in
                                                    cryptography and which one is more efficient in a certain case.</p>
                                                <p>To better visualize how the algorithms are performing data
                                                    visualization is added through tables with sorting and
                                                    filtering which show the differences in performance for each run
                                                    that was performed by a user for the selected functions that are
                                                    relevant to compare.
                                                </p>
                                                <p>The runs are stored in a database for each particular user so that
                                                    the platform users can easily check past runs.
                                                </p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>2</span> - Related articles</h5>
                                                <ul>
                                                    <li><a
                                                        href={"https://pq-crystals.org/index.shtml"} target={"_blank"}
                                                        rel={"noreferrer"}><em>CRYSTALS Cryptographic Suite for
                                                        Algebraic
                                                        Lattices
                                                    </em></a>, by Roberto Avanzi,
                                                        Joppe Bos, Léo Ducas, Eike Kiltz, Tancrède Lepoint,
                                                        Vadim Lyubashevsky, John M. Schanck, Peter Schwabe,
                                                        Gregor Seiler, Damien Stehlé
                                                    </li>
                                                    <li><a href={"https://eprint.iacr.org/2022/579.pdf"}
                                                           target={"_blank"}
                                                           rel={"noreferrer"}> <em>Compact
                                                        and
                                                        Efficient NTRU-based KEM with Scalable Ciphertext
                                                        Compression</em></a>,
                                                        by Zhichuang Liang, Boyue Fang, Jieyu Zheng, Yunlei Zhao
                                                    </li>
                                                </ul>
                                                <p className={"half-opacity"}><strong>NOTE:</strong> Please read to
                                                    better understand how the
                                                    CTRU and Kyber
                                                    algorithms work.</p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>3</span> - Run Guide</h5>
                                                <p
                                                    className={"half-opacity mb-3"}>The first 3 steps
                                                    are <strong>OPTIONAL</strong> as they cover the authentication
                                                    process.</p>
                                                <ol>
                                                    <li>Open KON locally</li>
                                                    <li><a href={"https://eprint.iacr.org/2022/579.pdf"}
                                                           target={"_blank"}
                                                           rel={"noreferrer"}> <em>Compact
                                                        and
                                                        Efficient NTRU-based KEM with Scalable Ciphertext
                                                        Compression</em></a>,
                                                        by Zhichuang Liang, Boyue Fang, Jieyu Zheng, Yunlei Zhao
                                                    </li>
                                                </ol>
                                                <hr/>
                                            </div>
                                        </Col>
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

export default Wiki;