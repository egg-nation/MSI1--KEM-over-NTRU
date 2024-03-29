import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {useAtom} from "jotai";
import {userAtom} from "../../services/UserAtom";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import Loader from "../../components/loader/Loader";
import TechnicalReportIcon from "../../utils/resources/icons/menu/TechnicalReportIcon";

const TechnicalReport = () => {

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
                                <Navigation currentPage="/report"/>
                            </Col>
                            <Col xl={{span: 10}} lg={{span: 9}} className="no-padding-right no-padding-left">
                                <Row>
                                    <Header icon={<TechnicalReportIcon/>} text={"Technical report"}/>
                                </Row>
                                <Row>
                                    <div className="content-padding content">
                                        <Col xl={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                                            <div className={"mb-3 padding-top-smaller"}>
                                                <h5><span
                                                    className={"skin-color"}>1</span> - Problem presentation</h5>
                                                <p>Currently, with the imminent use of quantum computers and constant
                                                    growth of security threats and, security researchers are trying to
                                                    find ways to encrypt and decrypt data efficiently and insusceptible
                                                    to attacks and a great candidate for that is post-quantum
                                                    cryptography based on lattices.</p>
                                                <p>Several concepts have been introduced or reanalyzed and implemented,
                                                    among which key encapsulation mechanisms.</p>
                                                <p>Given the actuality and prevalence of this issue in today's security,
                                                    we have deemed the implementation of 2 KEM over NTRU algorithms to
                                                    be both a good implementation exercise and a practical base for
                                                    execution time performances.</p>
                                                <p>After careful consideration, we have chosen implement CTRU and Kyber.
                                                    To complement the backend functionality, we have opted to go with a
                                                    friendly UI too to facilitate running the algorithms functions,
                                                    visualize the relevant results for past runs and have all the
                                                    theoretical data organized neatly in one place, all of which led us
                                                    to build KON.</p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>2</span> - State-of-the-Art</h5>
                                                <p>Our Advanced Techniques in Software Engineering project covers a
                                                    topic of
                                                    actuality in today’s post-quantum cryptography (PQC) based on
                                                    lattices:
                                                    the
                                                    NTRU
                                                    algorithm combined with the key encapsulation mechanisms (KEM).</p>
                                                <p>The NTRU lattice is a promising candidate to construct practical
                                                    crypto-systems resistant to quantum computing attacks, and
                                                    particularly
                                                    plays a leading role in the ongoing NIST post-quantum cryptography
                                                    standardization. On one hand, it has benefited from a strong
                                                    security
                                                    guarantee since it has essentially not been broken over 24 years. On
                                                    the
                                                    other hand, all the known patent threats against NTRU have expired,
                                                    which is deemed a critical factor for consideration when deploying
                                                    PQC
                                                    algorithms in reality. Nevertheless, some obstacles still exist to
                                                    the
                                                    computational efficiency and bandwidth complexity of NTRU-based
                                                    constructions of key encapsulation mechanisms (KEM).
                                                </p>
                                                <p> To address these issues, we will be covering several implementations
                                                    of
                                                    NTRU
                                                    with KEM, for which we will analyze the complexity and efficiency of
                                                    each
                                                    one of
                                                    them.</p>
                                                <p> According to the related articles that we have consulted so far,
                                                    there
                                                    are
                                                    two
                                                    main methods to approach the problem:</p>
                                                <p> The first method is CTRU - a compact and efficient KEM based on the
                                                    NTRU
                                                    lattice
                                                    which introduces a scalable ciphertext compression technique as
                                                    documented
                                                    in
                                                    <a href={"https://eprint.iacr.org/2022/579.pdf"} target={"_blank"}
                                                       rel={"noreferrer"}> <em>Compact
                                                        and
                                                        Efficient NTRU-based KEM with Scalable Ciphertext
                                                        Compression</em></a>,
                                                    by
                                                    Zhichuang Liang, Boyue Fang, Jieyu Zheng and Yunlei Zhao.</p>
                                                <p> It demonstrates a new approach to decrypting NTRU ciphertext, where
                                                    the
                                                    plaintext message is recovered with the aid of our decoding
                                                    algorithm in
                                                    the
                                                    scalable E8 lattice (instead of eliminating the extra terms modulo
                                                    𝑝 in
                                                    traditional NTRU-based KEM schemes). The instantiation of CTRU is
                                                    over
                                                    the
                                                    NTT-friendly rings of the form Z𝑞 [𝑥]/(𝑥𝑛 − 𝑥𝑛/2 + 1).</p>
                                                <p> According to the research on CTRU, it is the most
                                                    bandwidth-efficient
                                                    KEM based on the NTRU lattice up to now. In addition, roughly
                                                    speaking,
                                                    compared to other NTRU-based KEM schemes, CTRU has stronger security
                                                    against known attacks, enjoys more robust CCA security reduction
                                                    (starting from IND-CPA rather than OW-CPA), and its encapsulation
                                                    and
                                                    decapsulation processes are also among the most efficient. For
                                                    example,
                                                    compared to the NIST Round 3 finalist NTRU-HRSS, our CTRU-768 has a
                                                    15%
                                                    smaller ciphertext size, and its security is strengthened by (45,
                                                    40)
                                                    bits for classical and quantum security respectively.
                                                </p>
                                                <p> When compared to Kyber, CTRU has both smaller band-width and lower
                                                    error
                                                    probabilities
                                                    at about the same security level.</p>
                                                <p> In the NIST competition the only PKE algorithm chosen was Kyber, an
                                                    IND-CCA2
                                                    secure KEM based on the LWE (learning with errors) problem over
                                                    module
                                                    lattices,
                                                    multiple variations of the paper, as well as the submission packages
                                                    for
                                                    NIST,
                                                    alongside test vectors and implementations and a "brother" signature
                                                    algorithm
                                                    called Dilithium can be found at <a
                                                        href={"https://pq-crystals.org/index.shtml"} target={"_blank"}
                                                        rel={"noreferrer"}><em>CRYSTALS Cryptographic Suite for
                                                        Algebraic
                                                        Lattices
                                                    </em></a>.</p>
                                                <p> The roots of the algorithm are in the first ever scheme PKE proposed
                                                    by Regev, incorporating improvements proposed in this field, such as
                                                    using polynomials instead of integers by integrating Ring-LWE and
                                                    Module-LWE, similar to NTRU.</p>
                                                <p> Three variations of the algorithm have been proposed and are
                                                    undergoing
                                                    the standardization process: Kyber-512, Kyber-768, and Kyber-1024,
                                                    which
                                                    aim to have the same security as AES-126, AES-192, and AES-256
                                                    respectively. The performance of the algorithm is much better than
                                                    other
                                                    NIST competitors.</p>
                                                <p> Kyber has already been integrated into libraries and systems used in
                                                    the
                                                    industry,
                                                    making it one of the few viable PQC algorithms. The adopters of it
                                                    include:
                                                    Cloudflare in their PQC library named CIRCL, Amazon in AWS's Key
                                                    Management Service
                                                    and IBM for storing archival data on tape drives.
                                                </p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>3</span> - Our solution</h5>
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
                                                    filtering which show the differences in performance for each run
                                                    that was performed by a user for the selected functions that are
                                                    relevant to compare.
                                                </p>
                                                <p>The runs are stored in a database for each particular user so that
                                                    the platform users can easily check past runs.
                                                </p>
                                                <p><span
                                                    className={"skin-color mt-3 mb-3"}><strong>What does KON contain?</strong></span>
                                                </p>
                                                <ul>
                                                    <li>Client side (webapp)</li>
                                                    <ul>
                                                        <li>Login page: username / e-mail address field, password field,
                                                            login,
                                                            error messages, and switch to registration
                                                        </li>
                                                        <li>Register page: username field, e-mail address field,
                                                            password field,
                                                            login, error messages and switch to sign in
                                                        </li>
                                                        <li>Dashboard page: 3 sections with CTA buttons for each of them
                                                            run encrypt or decrypt,
                                                            wiki/help,
                                                            entries visualization
                                                        </li>
                                                        <li>Encrypt / Decrypt page: Run algorithm function with given
                                                            input page
                                                        </li>
                                                        <li>Entries visualization page: table with relevant info for
                                                            each entry
                                                            that a respective user did - [OPTIONAL] with filtering over
                                                            it +
                                                            sorting over the relevant columns
                                                        </li>
                                                        <li>Wiki page: theoretical explanations + description of the
                                                            utility of
                                                            the platform and how to use it + related articles / useful
                                                            info
                                                        </li>
                                                    </ul>
                                                    <li>Server side</li>
                                                    <ul>
                                                        <li>Models</li>
                                                        <ul>
                                                            <li>User: id, username, e-mail address, password hash,
                                                                authentication token
                                                            </li>
                                                            <li>Entry: algorithm name, function name - keygen /
                                                                encapsulate /
                                                                decapsulate, execution time, relevant input information
                                                                - input
                                                                length, user id
                                                            </li>
                                                        </ul>
                                                        <li>Services</li>
                                                        <ul>
                                                            <li>User service: create a new user, login into an existent
                                                                user account
                                                                or delete an existent user account
                                                            </li>
                                                            <li>Entry history service: add new entry for a run, search
                                                                entry
                                                                history, get entry history for an existent user account,
                                                                delete an entry or delete
                                                                the history for an existent user account
                                                            </li>
                                                            <li>CTRU service: encapsulate, decapsulate, generate keys
                                                            </li>
                                                            <li>Kyber service: encapsulate, decapsulate, generate keys
                                                            </li>
                                                        </ul>
                                                        <li>Repositories</li>
                                                        <ul>
                                                            <li>User repository</li>
                                                            <li>Entry history repository</li>
                                                            <li>CTRU repository: generated keys</li>
                                                            <li>Kyber repository: generated keys</li>
                                                        </ul>
                                                        <li>Library</li>
                                                        <ul>
                                                            <li>Algorithms</li>
                                                            <ul>
                                                                <li>CTRU: encapsulate, decapsulate, generate keys
                                                                    utils
                                                                </li>
                                                                <li>Kyber: encapsulate, decapsulate, generate keys
                                                                    utils
                                                                </li>
                                                            </ul>
                                                            <li>Timer: times the execution of a given function and
                                                                gathers relevant
                                                                information regarding the entry run (AOP)
                                                            </li>
                                                            <li>Task scheduler: used for running tasks on the available
                                                                slots and
                                                                for keeping a waiting queue with the tasks remaining
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                    <li>Unit testing (both frontend and backend)</li>
                                                    <li>Integration testing</li>
                                                </ul>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>4</span> - Results, Evaluation</h5>
                                                <p>With the help of the platform we have implemented to compare the 2
                                                    KEM over NTRU algorithms' execution time in certain conditions -
                                                    CTRU and Kyber - and during the implementation and analysis of the
                                                    previously mentioned algorithms, we have come up with the following
                                                    results and conclusions.</p>
                                                <p>First of all, after searching for implementation details and the
                                                    current
                                                    research status on CTRU, we found out that for a different CTRU
                                                    implementation there have been some successful attacks performed,
                                                    which leads us to believe that this particular implementation might
                                                    not
                                                    be bulletproof either as it is based on a similar logic. On the
                                                    other
                                                    hand, so far, Kyber has proven to be unsusceptible to attacks and
                                                    was selected by NIST to be standardized.</p>
                                                <p>Kyber is a considerably more mature protocol with a more solid
                                                    documentation and it has a theoretical explanation which is easier
                                                    to
                                                    implement.</p>
                                                <p>CTRU's execution time for key generation, encapsulation and
                                                    decapsulation
                                                    is worse than Kyber's, which has impressively fast execution time
                                                    for all of them. Despite the execution time differences, the
                                                    parameters
                                                    provided for both the algorithms offer the same level of
                                                    security.</p>
                                                <p>The key used for Kyber is longer and it uses a tradeoff for its
                                                    length: some values that could be cached are instead generated every
                                                    time the encapsulation function is called, therefore sacrificing
                                                    some
                                                    performance to greatly improve the memory cost. On the other hand,
                                                    CTRU uses adjustable ciphertext compression, which helps reduce the
                                                    length of the output.
                                                </p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>5</span> - Comparison with other
                                                    solutions</h5>
                                                <p>Given that KEM over lattices are relatively newly proposed, there
                                                    aren't any other platforms which compare the 2 implementations' (CTRU
                                                    and Kyber)
                                                    performance wise available, at least for the general public, but
                                                    security researchers are working constantly to find new
                                                    implementations and possible vulnerabilities for the already
                                                    implemented ones.</p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>6</span> - Future work</h5>
                                                <p>As future plans for expanding the KON platform, we have the following
                                                    points in mind:</p>
                                                <ul>
                                                    <li>
                                                        Adding other data visualization views, such as charts, to better
                                                        underline
                                                        the performance differences better and to get a clearer view on
                                                        how th algorithm functions perform execution time wise given
                                                        increasing input lengths.
                                                    </li>
                                                    <li>
                                                        Adding other KEM over NTRU algorithms' implementations to get an
                                                        even broader view on which is the faster given certain input
                                                        values which differ in length.<br/>
                                                        A good candidate for the new KEM
                                                        over NTRU algorithm to implement would be BAT – an IND-CCA
                                                        secure key encapsulation mechanism (KEM) that is based on NTRU
                                                        but follows an encryption/decryption paradigm distinct from
                                                        classical NTRU KEMs and is covered extensively in <a
                                                        href={"https://eprint.iacr.org/2022/031.pdf"} target={"_blank"}
                                                        rel={"noreferrer"}><em>BAT: Small and
                                                        Fast KEM over NTRU Lattices
                                                    </em></a>, by Pierre-Alain Fouque, Paul
                                                        Kirchner, Thomas Pornin and Yang Yu.<br/>
                                                        It demonstrates a new approach of decrypting NTRU ciphertext
                                                        since its introduction 25 years ago. Instead of introducing an
                                                        artificial masking parameter p to decrypt the ciphertext, the
                                                        algorithm use 2 linear equations in 2 unknowns to recover the
                                                        message and the error. The encryption process is therefore close
                                                        to the GGH scheme.
                                                    </li>
                                                </ul>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>7</span> - Conclusions</h5>
                                                <p>
                                                    At this particular moment, Kyber performs better time complexity
                                                    wise on longer input and is safer to use (no attacks on it have been
                                                    successful so far) and it shows more maturity in its implementation.
                                                    Given that is in the process of being
                                                    standardized by NIST it will also be largely used for several
                                                    practical applications.
                                                </p>
                                                <p>
                                                    On the other hand, CTRU is also showing promising experimental
                                                    results given the output length (asymmetrical algorithms generally
                                                    have significantly bigger output length compared to the input data),
                                                    but, for now, it is not mature enough to be eligible for wide
                                                    practical use.
                                                </p>
                                                <p>Generally speaking, it is important to compare solutions performance
                                                    wise and to have tools available which do just that as they
                                                    significantly decrease the amount of work and time needed to test
                                                    how they perform for different types on input. Also, data
                                                    visualization methods are a helpful tool in giving a clear image of
                                                    which is better in which case and should be used to get reliable and
                                                    easy to understand data statistics.</p>
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>8</span> - Bibliography</h5>
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
                                                <hr/>
                                            </div>
                                            <div className={"mb-3"}>
                                                <h5><span className={"skin-color"}>9</span> - Related links</h5>
                                                <ul>
                                                    <li><a
                                                        href={"https://docs.google.com/document/d/1PKsRWdyA2D_aqT4fmi97-jJQXelGbJVsdKpiNaViMVI/edit"}
                                                        target={"_blank"}
                                                        rel={"noreferrer"}>
                                                        Project info
                                                    </a>

                                                    </li>
                                                    <li><a
                                                        href={"https://docs.google.com/document/d/1xa9aEqoqUmGMMKB_9bloGQ960UH8casLB2_SzP3rA2c/view"}
                                                        target={"_blank"}
                                                        rel={"noreferrer"}>State-of-the-Art
                                                    </a>
                                                    </li>
                                                    <li><a
                                                        href={"https://docs.google.com/document/d/1V1wuCvOJMH0QstO3czVeRV3mzuT4592JBYSAYeduXOk/view"}
                                                        target={"_blank"}
                                                        rel={"noreferrer"}>Requirements Analysis</a>
                                                    </li>
                                                    <li><a
                                                        href={"https://drive.google.com/drive/folders/1HQObx9Z_dvlgeTlq4w1G0dz1jaRnkWXG"}
                                                        target={"_blank"}
                                                        rel={"noreferrer"}>Diagrams</a> - Use Case, UML, BPMN
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
            ;
    }
}

export default TechnicalReport;