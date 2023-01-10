import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import WikiIcon from "../../utils/resources/icons/menu/WikiIcon";
import Navigation from "../../components/navigation/Navigation";
import Loader from "../../components/loader/Loader";
import "./../../utils/css/table.css";

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
                                                    comparison between 2 implementations of (key encapsulation
                                                    mechanisms) KEM over NTRU which allows
                                                    its users to run the keygen, encapsulate and decapsulate functions
                                                    of the implemented algorithms (BAT and CTRU) with their input of
                                                    choice, and allows them to better understand why are they useful in
                                                    cryptography and which one is more efficient in a certain case by
                                                    comparing their execution time.</p>
                                                <p>To better visualize how the algorithms are performing data
                                                    visualization is added through tables with sorting and
                                                    filtering which show the differences in execution time performance
                                                    for each run
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
                                                    <li>You will be redirected to the login page.</li>
                                                    <img src="/assets/images/loginempty.png" alt={"login empty"}/>
                                                    <ol>
                                                        <li>Enter the correct username and password.</li>
                                                        <img src="/assets/images/logincompleted.png"
                                                             alt={"login completed"}/>
                                                    </ol>
                                                    <li>If you do not have a user on KON yet, please register.</li>
                                                    <img src="/assets/images/registerempty.png" alt={"register empty"}/>
                                                    <ol>
                                                        <li>Enter a valid username, e-mail address and password.</li>
                                                        <img src="/assets/images/registererror.png"
                                                             alt={"register error"}/>
                                                    </ol>
                                                    <li>After successfully authenticating, you will be redirected to the
                                                        dashboard, where you have 4 main CTA buttons for all the main
                                                        pages in the platform.
                                                    </li>
                                                    <img src="/assets/images/dashboard.png"
                                                         alt={"dashboard"}/>
                                                    <ol>
                                                        <li>To navigate to a certain page, use the buttons on the
                                                            dashboard
                                                            while on the Dashboard page or just use the main menu on the
                                                            side.
                                                        </li>
                                                        <img src="/assets/images/dashboardnavigation.png"
                                                             alt={"dashboard navigation"}/>
                                                        <li>To logout, please use the Logout button at the bottom of the
                                                            side menu.
                                                        </li>
                                                        <img src="/assets/images/dashboardlogout.png"
                                                             alt={"dashboard logout"}/>
                                                    </ol>
                                                    <li>If you have chosen to navigate to the Encrypt / Decrypt page,
                                                        you
                                                        will see the following form with 2 radio button group fields to
                                                        choose the KEM algorithm and the function that you want to run
                                                        for
                                                        it.<br/>
                                                        For CTRU or Kyber you can run a key generation, an
                                                        encapsulation or a decapsulation:
                                                    </li>
                                                    <img src="/assets/images/encryptdecrypt.png"
                                                         alt={"encrypt decrypt"}/>
                                                    <ol>
                                                        <li>Examples of different combinations to run:</li>
                                                        <img src="/assets/images/encryptdecryptctrugeneratekeys.png"
                                                             alt={"encrypt decrypt ctru generate keys"}/>
                                                        <img
                                                            src="/assets/images/encryptdecryptctrugeneratekeysresult.png"
                                                            alt={"encrypt decrypt ctru generate keys result"}/>
                                                        <img src="/assets/images/encryptdecryptctrugetkeys.png"
                                                             alt={"encrypt decrypt ctru get keys"}/>
                                                        <img src="/assets/images/encryptdecryptctrugetkeysresult.png"
                                                             alt={"encrypt decrypt ctru get keys result"}/>
                                                        <img src="/assets/images/encryptdecryptkybergetkeysresult.png"
                                                             alt={"encrypt decrypt kyber get keys result"}/>
                                                        <img
                                                            src="/assets/images/encryptdecryptctruencapsulateresult.png"
                                                            alt={"encrypt decrypt ctru encapsulate result"}/>
                                                        <img
                                                            src="/assets/images/encryptdecryptctrudecapsulateresult.png"
                                                            alt={"encrypt decrypt ctru decapsulate result"}/>
                                                        <li>Input values to test the functionality:</li>
                                                        <table className="table mt-3 mb-3">
                                                            <thead>
                                                            <tr className="table-header">
                                                                <th className="table-header-cell th-dimension">Algorithm</th>
                                                                <th className="table-header-cell th-dimension">Function</th>
                                                                <th className="table-header-cell th-dimension">Input
                                                                    values
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">CTRU</td>
                                                                <td className="table-body-cell">Keygen</td>
                                                                <td className="table-body-cell">CTRU parameters: n: 32;
                                                                    q: 3457; q2: 512; eta: 2
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">Kyber</td>
                                                                <td className="table-body-cell">Keygen</td>
                                                                <td className="table-body-cell">Kyber parameters: n:
                                                                    256; q: 3329; k: 2; eta: 2; du: 10; dv: 4
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">CTRU</td>
                                                                <td className="table-body-cell">Get keys</td>
                                                                <td className="table-body-cell half-opacity">None, it
                                                                    returns the previously generated keys
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">Kyber</td>
                                                                <td className="table-body-cell">Get keys</td>
                                                                <td className="table-body-cell half-opacity">None, it
                                                                    returns the previously generated keys
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">CTRU</td>
                                                                <td className="table-body-cell">Encapsulate</td>
                                                                <td className="table-body-cell">CTRU parameters: n: 32;
                                                                    q: 3457; q2: 512; eta: 2;<br/>
                                                                    Key id <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Public key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Secret key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Iterations: number of iterations to run
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">Kyber</td>
                                                                <td className="table-body-cell">Encapsulate</td>
                                                                <td className="table-body-cell">Kyber parameters: n:
                                                                    256; q: 3329; k: 2; eta: 2; du: 10; dv: 4;<br/>
                                                                    Key id <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Public key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Secret key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Iterations: number of iterations to run
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">CTRU</td>
                                                                <td className="table-body-cell">Decapsulate</td>
                                                                <td className="table-body-cell">CTRU parameters: n: 32;
                                                                    q: 3457; q2: 512; eta: 2;<br/>
                                                                    Key id <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Public key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Secret key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Data <span
                                                                        className={"half-opacity"}>(output generated
                                                                        from an encapsulation done with the same generated key)</span>;<br/>
                                                                    Iterations: number of iterations to run
                                                                </td>
                                                            </tr>
                                                            <tr className="table-row">
                                                                <td className="table-body-cell">Kyber</td>
                                                                <td className="table-body-cell">Encapsulate</td>
                                                                <td className="table-body-cell">Kyber parameters: n:
                                                                    256; q: 3329; k: 2; eta: 2; du: 10; dv: 4;<br/>
                                                                    Key id <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Public key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Secret key <span
                                                                        className={"half-opacity"}>(from previously
                                                                    generated key)</span>;<br/>
                                                                    Data <span
                                                                        className={"half-opacity"}>(output generated
                                                                        from an encapsulation done with the same generated key)</span>;<br/>
                                                                    Iterations: number of iterations to run
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </ol>
                                                    <li>If you have chosen to navigate to the Entries visualization
                                                        page, you
                                                        will see the following table with the statistics from the past
                                                        runs performed on the Encrypt / Decrypt page:
                                                    </li>
                                                    <img src="/assets/images/entriesvisualization.png"
                                                         alt={"entries visualization"}/>
                                                    <ol>
                                                        <li>To get a better understanding of the data, sort by the
                                                            execution time column or check the stats for a specific
                                                            algorithm and function using the filtering bar:
                                                        </li>
                                                        <img src="/assets/images/entriesvisualizationapplyfilters.png"
                                                             alt={"entries visualization apply filters"}/>
                                                        <li>To delete a certain entry, click on the delete button:
                                                        </li>
                                                        <img src="/assets/images/entriesvisualizationdelete.png"
                                                             alt={"entries visualization delete"}/>
                                                    </ol>
                                                    <li>If you have chosen to navigate to the Wiki page, you will get
                                                        details regarding what KON platform does, the theory between the
                                                        algorithms implemented and a run guide with input values
                                                        examples:
                                                    </li>
                                                    <img src="/assets/images/wiki.png"
                                                         alt={"wiki"}/>
                                                    <li>If you have chosen to navigate to the Technical Report page, you
                                                        will get
                                                        details regarding: Problem presentation. SotA. Our solution.
                                                        Results, evaluation. Comparison with other solutions. Future
                                                        work, etc.:
                                                    </li>
                                                    <img src="/assets/images/technicalreport.png"
                                                         alt={"technical report"}/>
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