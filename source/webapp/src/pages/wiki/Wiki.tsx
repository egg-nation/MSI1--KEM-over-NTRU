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
                                            <h4 className={"padding-top-smaller"}>Summary</h4>
                                            <p>Our Advanced Techniques in Software Engineering project covers a topic of
                                                actuality in today’s post-quantum cryptography (PQC) based on lattices:
                                                the
                                                NTRU
                                                algorithm combined with the key encapsulation mechanisms (KEM).</p>
                                            <p>The NTRU lattice is a promising candidate to construct practical
                                                cryptosystems
                                                resistant to quantum computing attacks, and particularly plays a leading
                                                role in
                                                the ongoing NIST post-quantum cryptography standardization. On one hand,
                                                it
                                                has
                                                benefited from a strong security guarantee since it has essentially not
                                                been
                                                broken over 24 years and, on the other hand, all the known patent
                                                threats
                                                against NTRU have expired, which is deemed a critical factor for
                                                consideration
                                                when deploying PQC algorithms in reality. Nevertheless, there are still
                                                some
                                                obstacles to the computational efficiency and bandwidth complexity of
                                                NTRU-based
                                                constructions of key encapsulation mechanisms (KEM).</p>
                                            <p> To address these issues, we will be covering several implementations of
                                                NTRU
                                                with KEM, for which we will analyze the complexity and efficiency of
                                                each
                                                one of
                                                them.</p>
                                            <p> According to the related articles that we have consulted so far, there
                                                are
                                                two
                                                main methods to approach the problem:</p>
                                            <p> The first method is CTRU - a compact and efficient KEM based on the NTRU
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
                                            <p> It demonstrates a new approach to decrypting NTRU ciphertext, where the
                                                plaintext message is recovered with the aid of our decoding algorithm in
                                                the
                                                scalable E8 lattice (instead of eliminating the extra terms modulo 𝑝 in
                                                traditional NTRU-based KEM schemes). The instantiation of CTRU is over
                                                the
                                                NTT-friendly rings of the form Z𝑞 [𝑥]/(𝑥𝑛 − 𝑥𝑛/2 + 1).</p>
                                            <p> According to the research on CTRU, it is the most bandwidth efficient
                                                KEM
                                                based
                                                on the NTRU lattice up to now. In addition, roughly speaking, compared
                                                to
                                                other
                                                NTRU-based KEM schemes, CTRU has
                                                stronger security against known attacks, enjoys more robust CCA security
                                                reduction (starting from IND-CPA rather than OW-CPA), and its
                                                encapsulation
                                                and
                                                decapsulation processes are also among
                                                the most efficient. For example, when compared to the NIST Round 3
                                                finalist
                                                NTRU-HRSS, our CTRU-768 has 15% smaller ciphertext size and its security
                                                is
                                                strengthened by (45, 40) bits for classical and quantum security
                                                respectively.</p>
                                            <p> When compared to Kyber, CTRU has both smaller bandwidth and lower error
                                                probabilities
                                                at about the same security level.</p>
                                            <p> In the NIST competition the only PKE algorithm chosen was Kyber, an IND-CCA2
                                                secure KEM based on the LWE (learning with errors) problem over module lattices,
                                                multiple variations of the paper, as well as the submission packages for NIST,
                                                alongside test vectors and implementations and a "brother" signature algorithm
                                                called Dilithium can be found at <a
                                                    href={"https://pq-crystals.org/index.shtml"} target={"_blank"}
                                                    rel={"noreferrer"}><em>CRYSTALS Cryptographic Suite for Algebraic Lattices
                                                </em></a>.</p>
                                            <p> The roots of the algorithm are in the first ever scheme PKE proposed
                                                by Regev, incorporating improvements proposed in this field, such as
                                                using polynomials instead of integers by integrating Ring-LWE and 
                                                Module-LWE, simmilar to NTRU.</p>
                                            <p> Three variations of the algorithm have been proposed and are undergoing
                                                the standardization process: Kyber-512, Kyber-768 and Kyber-1024, which aim to
                                                have the same security as AES-126, AES-192 and AES-256 respectively. The performance
                                                of the algorithm is much better than other NIST competitors.</p>
                                            <p> Kyber has already been integrated into libraries and systems used in the industry,
                                                making it one of the few viable PQC algorithms. The adopters of it include: 
                                                Cloudflare in their PQC library named CIRCL, Amazon in AWS's Key Management Service 
                                                and IBM for storing archival data on tape drives.
                                            </p>
                                            <br/>
                                            <h5>Concepts and technologies</h5>
                                            <ul>
                                                <li>Cryptosystems</li>
                                                <li>Key encapsulation mechanism (KEM)</li>
                                                <li>NTRU lattice-based cryptography</li>
                                            </ul>
                                            <br/>
                                            <h5>Related articles</h5>
                                            <ul>
                                                <li><em>CRYSTALS-Kyber</em>, by Roberto Avanzi, 
                                                    Joppe Bos, Léo Ducas, Eike Kiltz, Tancrède Lepoint,
                                                    Vadim Lyubashevsky, John M. Schanck, Peter Schwabe, 
                                                    Gregor Seiler, Damien Stehlé
                                                </li>
                                                <li><em>Compact and Efficient NTRU-based KEM with Scalable Ciphertext
                                                    Compression</em>,
                                                    by Zhichuang Liang, Boyue Fang, Jieyu Zheng, Yunlei Zhao
                                                </li>
                                                <li><em>Implementation and Analysis of the NTRU Algorithm in Java</em>,
                                                    by
                                                    Tatiana
                                                    Linardopoulou, Supervised by Dr. Paulo S. L. M. Barreto
                                                </li>
                                            </ul>
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