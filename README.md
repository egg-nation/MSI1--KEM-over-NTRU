# MSI1 - KON (KEM over NTRU)

# What does KON do?

KEM over NTRU (KON) is an educative platform for time complexity comparison between 2 implementations of (key encapsulation mechanisms) KEM over NTRU which allows its users to run the key generation, encapsulate and decapsulate functions of the implemented algorithms (CTRU and Kyber) with their input of choice, and allows them to better understand why are they useful in cryptography and which one is more efficient in a certain case by comparing their execution time.

To better visualize how the algorithms are performing data visualization is added through tables with sorting and filtering which show the differences in execution time performance for each run that was performed by a user for the selected functions that are relevant to compare.

The runs are stored in a database for each particular user so that the platform users can easily check past runs.

### Collaborators
1. Giurgea Elisa - Scrum Master
2. Ciobanu Alexandra
3. Hutu Tudor
4. Tudorica Radu

### Coordinator
Ferucio-Laurentiu Tiplea

# Run guide

1. Clone the repository locally: ```git clone git@github.com:egg-nation/MS1--KEM-over-NTRU.git```
2. To start the server run: ```docker-compose up```
3. After the server was successfully started, to start the webapp client, go to source/webapp: ```cd source/webapp```
4. Start the webapp client: ```npm start```
5. You should be able to access the webapp at: ```http://localhost:3000/```
6. To stop the server run: ```docker-compose down```

After opening the webapp and successfully authenticating, please go to the wiki page to get a better understanding on how to use the platform.

![login](https://github.com/egg-nation/MS1--KEM-over-NTRU/blob/main/source/webapp/public/assets/images/loginempty.png)
![dashboard](https://github.com/egg-nation/MS1--KEM-over-NTRU/blob/main/source/webapp/public/assets/images/dashboard.png)
![encrypt decrypt ctru encapsulate result](https://github.com/egg-nation/MS1--KEM-over-NTRU/blob/main/source/webapp/public/assets/images/encryptdecryptctruencapsulateresult.png)
![entries visualization](https://github.com/egg-nation/MS1--KEM-over-NTRU/blob/main/source/webapp/public/assets/images/entriesvisualization.png)
![wiki](https://github.com/egg-nation/MS1--KEM-over-NTRU/blob/main/source/webapp/public/assets/images/wiki.png)
![technical report](https://github.com/egg-nation/MS1--KEM-over-NTRU/blob/main/source/webapp/public/assets/images/technicalreport.png)

# Technical report

## 1 - Problem presentation

Currently, with the imminent use of quantum computers and constant growth of security threats and, security researchers are trying to find ways to encrypt and decrypt data efficiently and insusceptible to attacks and a great candidate for that is post-quantum cryptography based on lattices.

Several concepts have been introduced or reanalyzed and implemented, among which key encapsulation mechanisms.

Given the actuality and prevalence of this issue in today's security, we have deemed the implementation of 2 KEM over NTRU algorithms to be both a good implementation exercise and a practical base for execution time performances.

After careful consideration, we have chosen implement CTRU and Kyber. To complement the backend functionality, we have opted to go with a friendly UI too to facilitate running the algorithms functions, visualize the relevant results for past runs and have all the theoretical data organized neatly in one place, all of which led us to build KON.

## 2 - State-of-the-Art

Our Advanced Techniques in Software Engineering project covers a topic of actuality in today’s post-quantum cryptography (PQC) based on lattices: the NTRU algorithm combined with the key encapsulation mechanisms (KEM).

The NTRU lattice is a promising candidate to construct practical crypto-systems resistant to quantum computing attacks, and particularly plays a leading role in the ongoing NIST post-quantum cryptography standardization. On one hand, it has benefited from a strong security guarantee since it has essentially not been broken over 24 years. On the other hand, all the known patent threats against NTRU have expired, which is deemed a critical factor for consideration when deploying PQC algorithms in reality. Nevertheless, some obstacles still exist to the computational efficiency and bandwidth complexity of NTRU-based constructions of key encapsulation mechanisms (KEM).

To address these issues, we will be covering several implementations of NTRU with KEM, for which we will analyze the complexity and efficiency of each one of them.

According to the related articles that we have consulted so far, there are two main methods to approach the problem:

The first method is CTRU - a compact and efficient KEM based on the NTRU lattice which introduces a scalable ciphertext compression technique as documented in *[Compact and Efficient NTRU-based KEM with Scalable Ciphertext Compression](https://eprint.iacr.org/2022/579.pdf), by Zhichuang Liang, Boyue Fang, Jieyu Zheng and Yunlei Zhao*.

It demonstrates a new approach to decrypting NTRU ciphertext, where the plaintext message is recovered with the aid of our decoding algorithm in the scalable E8 lattice (instead of eliminating the extra terms modulo 𝑝 in traditional NTRU-based KEM schemes). The instantiation of CTRU is over the NTT-friendly rings of the form Z𝑞 [𝑥]/(𝑥𝑛 − 𝑥𝑛/2 + 1).

According to the research on CTRU, it is the most bandwidth-efficient KEM based on the NTRU lattice up to now. In addition, roughly speaking, compared to other NTRU-based KEM schemes, CTRU has stronger security against known attacks, enjoys more robust CCA security reduction (starting from IND-CPA rather than OW-CPA), and its encapsulation and decapsulation processes are also among the most efficient. For example, compared to the NIST Round 3 finalist NTRU-HRSS, our CTRU-768 has a 15% smaller ciphertext size, and its security is strengthened by (45, 40) bits for classical and quantum security respectively.

When compared to Kyber, CTRU has both smaller band-width and lower error probabilities at about the same security level.

In the NIST competition the only PKE algorithm chosen was Kyber, an IND-CCA2 secure KEM based on the LWE (learning with errors) problem over module lattices, multiple variations of the paper, as well as the submission packages for NIST, alongside test vectors and implementations and a "brother" signature algorithm called Dilithium can be found at *[CRYSTALS Cryptographic Suite for Algebraic Lattices](https://pq-crystals.org/index.shtml)*.

The roots of the algorithm are in the first ever scheme PKE proposed by Regev, incorporating improvements proposed in this field, such as using polynomials instead of integers by integrating Ring-LWE and Module-LWE, similar to NTRU.

Three variations of the algorithm have been proposed and are undergoing the standardization process: Kyber-512, Kyber-768, and Kyber-1024, which aim to have the same security as AES-126, AES-192, and AES-256 respectively. The performance of the algorithm is much better than other NIST competitors.

Kyber has already been integrated into libraries and systems used in the industry, making it one of the few viable PQC algorithms. The adopters of it include: Cloudflare in their PQC library named CIRCL, Amazon in AWS's Key Management Service and IBM for storing archival data on tape drives.

## 3 - Our solution

KEM over NTRU (KON) is an educative platform for time complexity comparison between 2 implementations of (key encapsulation mechanisms) KEM over NTRU which allows its users to run the keygen, encapsulate and decapsulate functions of the implemented algorithms (CTRU and Kyber) with their input of choice, and allows them to better understand why are they useful in cryptography and which one is more efficient in a certain case by comparing their execution time.

To better visualize how the algorithms are performing data visualization is added through tables with sorting and filtering which show the differences in performance for each run that was performed by a user for the selected functions that are relevant to compare.

The runs are stored in a database for each particular user so that the platform users can easily check past runs.

### What does KON contain?

- Client side (webapp)
  - Login page: username / e-mail address field, password field, login, error messages, and switch to registration
  - Register page: username field, e-mail address field, password field, login, error messages and switch to sign in
  - Dashboard page: 3 sections with CTA buttons for each of them run encrypt or decrypt, wiki/help, entries visualization
  - Encrypt / Decrypt page: Run algorithm function with given input page
  - Entries visualization page: table with relevant info for each entry that a respective user did - [OPTIONAL] with filtering over it + sorting over the relevant columns
  - Wiki page: theoretical explanations + description of the utility of the platform and how to use it + related articles / useful info
- Server side
  - Models
    - User: id, username, e-mail address, password hash, authentication token
    - Entry: algorithm name, function name - keygen / encapsulate / decapsulate, execution time, relevant input information - input length, user id
- Services
  - User service: create a new user, login into an existent user account or delete an existent user account
  - Entry history service: add new entry for a run, search entry history, get entry history for an existent user account, delete an entry or delete the history for an existent user account
  - CTRU service: encapsulate, decapsulate, generate keys
  - Kyber service: encapsulate, decapsulate, generate keys
- Repositories
  - User repository
  - Entry history repository
  - CTRU repository: generated keys
  - Kyber repository: generated keys
- Library
  - Algorithms
    - CTRU: encapsulate, decapsulate, generate keys utils
    - Kyber: encapsulate, decapsulate, generate keys utils
  - Timer: times the execution of a given function and gathers relevant information regarding the entry run (AOP)
  - Task scheduler: used for running tasks on the available slots and for keeping a waiting queue with the tasks remaining
- Unit testing (both frontend and backend)
- Integration testing

## 4 - Results, Evaluation

With the help of the platform we have implemented to compare the 2 KEM over NTRU algorithms' execution time in certain conditions - CTRU and Kyber - and during the implementation and analysis of the previously mentioned algorithms, we have come up with the following results and conclusions.

First of all, after searching for implementation details and the current research status on CTRU, we found out that for a different CTRU implementation there have been some successful attacks performed, which leads us to believe that this particular implementation might not be bulletproof either as it is based on a similar logic. On the other hand, so far, Kyber has proven to be unsusceptible to attacks and was selected by NIST to be standardized.

Kyber is a considerably more mature protocol with a more solid documentation and it has a theoretical explanation which is easier to implement.

CTRU's execution time for key generation, encapsulation and decapsulation is worse than Kyber's, which has impressively fast execution time for all of them. Despite the execution time differences, the parameters provided for both the algorithms offer the same level of security.

The key used for Kyber is longer and it uses a tradeoff for its length: some values that could be cached are instead generated every time the encapsulation function is called, therefore sacrificing some performance to greatly improve the memory cost. On the other hand, CTRU uses adjustable ciphertext compression, which helps reduce the length of the output.

## 5 - Comparison with other solutions

Given that KEM over lattices are relatively newly proposed, there aren't any other platforms which compare the 2 implementations' (CTRU and Kyber) performance wise available, at least for the general public, but security researchers are working constantly to find new implementations and possible vulnerabilities for the already implemented ones.

## 6 - Future work

As future plans for expanding the KON platform, we have the following points in mind:

Adding other data visualization views, such as charts, to better underline the performance differences better and to get a clearer view on how th algorithm functions perform execution time wise given increasing input lengths.
Adding other KEM over NTRU algorithms' implementations to get an even broader view on which is the faster given certain input values which differ in length.

A good candidate for the new KEM over NTRU algorithm to implement would be BAT – an IND-CCA secure key encapsulation mechanism (KEM) that is based on NTRU but follows an encryption/decryption paradigm distinct from classical NTRU KEMs and is covered extensively in *[BAT: Small and Fast KEM over NTRU Lattices](https://eprint.iacr.org/2022/031.pdf), by Pierre-Alain Fouque, Paul Kirchner, Thomas Pornin and Yang Yu*.
It demonstrates a new approach of decrypting NTRU ciphertext since its introduction 25 years ago. Instead of introducing an artificial masking parameter p to decrypt the ciphertext, the algorithm use 2 linear equations in 2 unknowns to recover the message and the error. The encryption process is therefore close to the GGH scheme.

## 7 - Conclusions

At this particular moment, Kyber performs better time complexity wise on longer input and is safer to use (no attacks on it have been successful so far) and it shows more maturity in its implementation. Given that is in the process of being standardized by NIST it will also be largely used for several practical applications.

On the other hand, CTRU is also showing promising experimental results given the output length (asymmetrical algorithms generally have significantly bigger output length compared to the input data), but, for now, it is not mature enough to be eligible for wide practical use.

Generally speaking, it is important to compare solutions performance wise and to have tools available which do just that as they significantly decrease the amount of work and time needed to test how they perform for different types on input. Also, data visualization methods are a helpful tool in giving a clear image of which is better in which case and should be used to get reliable and easy to understand data statistics.

## 8 - Bibliography

1. *[CRYSTALS Cryptographic Suite for Algebraic Lattices](https://pq-crystals.org/index.shtml), by Roberto Avanzi, Joppe Bos, Léo Ducas, Eike Kiltz, Tancrède Lepoint, Vadim Lyubashevsky, John M. Schanck, Peter Schwabe, Gregor Seiler, Damien Stehlé*
2. *[Compact and Efficient NTRU-based KEM with Scalable Ciphertext Compression](https://eprint.iacr.org/2022/579.pdf), by Zhichuang Liang, Boyue Fang, Jieyu Zheng, Yunlei Zhao*

## 9 - Useful links

*[Google Drive folder with all the related resources](https://drive.google.com/drive/folders/1GCVHAQ4SpH9fOx-NIVi3CoGev97Y_5Ul)*
1. Project info
2. State-of-the-Art
3. Requirements Analysis
4. Diagrams - Use Case, UML, BPMN
