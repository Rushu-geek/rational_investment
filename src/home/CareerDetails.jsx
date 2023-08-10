import React, { Component, useEffect, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import { useLocation } from "react-router-dom";


const CareerDetails = () => {

    const location = useLocation();

    const [career, setCareer] = useState("");

    useEffect(() => {
        console.log(location.search.slice(-2));
        setCareer(location.search.slice(-2))
    }, [])


    return (
        <React.Fragment>
            <PageHelmet pageTitle='Blog Details' />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Blog Details */}
            <div style={{ textAlign: 'justify' }} className="rn-blog-details pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="inner">

                                    <div className="col-lg-12 d-flex flex-wrap mt-5">

                                        {career == "rm" && <h2>Relationship Manager</h2>}
                                        {career == "tc" && <h2>Telecaller</h2>}


                                        {career == "rm" && <div className="content">
                                            <h3 className="title">What are we looking for?</h3>
                                            {/* <p>Investors are alarmed by volatility and the economic downturn. The stock market is known
                                                    for its unpredictable nature. For example, the Sensex dropped nearly 1,000 points in a single
                                                    day during the most recent financial year. Mutual fund participants frequently think about
                                                    stopping their SIP investments during such circumstances. This is not wise nor advisable.
                                                    Investors must keep up SIPs and make plans for long-term gains.</p>
                                                <p>Investors are presented with this issue each time there is a market correction (of
                                                    discontinuing of sip and maybe redeeming investments). They discontinue their SIPs and
                                                    either invest the funds in fixed income (debt funds) or stop them entirely.</p>
                                                <p>So, in such a market environment, what is the best option? Here are some pointers:</p> */}
                                            <ul className="list-style">
                                                <li>Strong communication skills</li>
                                                <li>Smart personality and selling attitude with good knowledge of Financial Product.</li>
                                                <li>Open for Field Sales, Calling &amp; New Client Acquisition.</li>
                                                <li>Need to source clients directly from the open market.</li>
                                                <li>Should be willing to come for physical interview, though we can arrange 1st round virtual.</li>
                                            </ul>
                                            {/* <p className="mt-5">Usually, it is too soon to evaluate a SIP investment after one or two years. The minimal time
                                                    frame for evaluating the performance of an equity fund is five to seven years.</p> */}

                                            <h3 className="title mt-5">Qualification & Experience: </h3>
                                            <ul className="list-style">
                                                <li>Graduate / Post Graduate / MBA</li>
                                            </ul>


                                            <h3 className="title mt-5">What will you do? </h3>
                                            <ul className="list-style">
                                                <li>To promote all the product line of Financial Product.</li>
                                                <li>To up sell Financial Products to Retail/HNI Clients</li>
                                                <li>To generate fresh leads and acquire clients through reference.</li>
                                                <li>To achieve sales and revenue targets spread across product mix.</li>
                                                <li>To achieve the business targets assigned in terms of up selling Mutual Fund Products
                                                    enhancing and upgrading the Client Net worth relationships.</li>
                                                <li>Ensuring the highest levels of service to the client /HNI clients.</li>
                                                <li>One point of contact for the assigned client.</li>
                                                <li>To execute monthly sales plan to acquire HNI clients and ensure regular contact with all
                                                    clients through regular weekly / monthly calls.</li>
                                                <li>Should be capable of thriving in the competitive market.</li>
                                                <li>Should be able to work in team and also perform independently.</li>
                                            </ul>

                                            <div className="row mt-5">
                                                <h3>Industry Type: </h3> <p className="ml-2" style={{ fontSize: 25 }}>Investments</p>
                                            </div>

                                            <div className="row">
                                                <h3>Employment Type: </h3> <p className="ml-2" style={{ fontSize: 25 }}>Full Time</p>
                                            </div>


                                        </div>}

                                        {career == "tc" && <div className="content">
                                            <p>We are searching for an engaged telecaller to boost sales by reaching out to current and
                                                possible clients. To this end, the telecaller will be required to obtain lists of individuals&#39;
                                                information, and to source data for additional members of the target audience. You should
                                                also jot down important notes during conversations to facilitate follow-ups by our staff.</p>
                                            <p>To be successful as a telecaller, you should be able to convince even the toughest of individuals
                                                to purchase our offerings. A remarkable telecaller will suggest ways in which clients&#39; feedback
                                                can be utilized to improve our services.</p>

                                            <h3 className="title">Telecaller Responsibilities:</h3>

                                            <ul className="list-style">
                                                <li>Studying the details of each offering and remaining abreast of updates to these offerings.</li>
                                                <li>Obtaining and updating lists of individual's contact details.</li>
                                                <li>Calling active and budding clients to encourage the purchase of items.</li>
                                                <li>Addressing client's uncertainties, grievances, and suggestions on time.</li>
                                                <li>Noting important details of each conversation.</li>
                                                <li>Communicating verbal acceptances of offers to our sales team for closing.</li>
                                                <li>Recording all successful and unsuccessful attempts to close sales.</li>
                                                <li>Attending regular team meetings to clarify progress and performance-related expectations.</li>
                                                <li>Conducting each of your functions with the utmost respect, regardless of others dispositions.</li>
                                            </ul>
                                            
                                            <h3 className="title mt-5">Telecaller Requirements: </h3>
                                            <ul className="list-style">
                                                <li>Any Graduate.</li>
                                                <li>Prior experience as a telecaller or similar.</li>
                                                <li>Completion of a sales-related training program is preferred.</li>
                                                <li>Computer literate.</li>
                                                <li>Exposure to diverse viewpoints, cultural norms, and experiences.</li>
                                                <li>Good verbal communication.</li>
                                                <li>Ability to switch your communication style on a whim.</li>
                                                <li>Superb interpersonal, research, and record-keeping skills.</li>
                                                <li>Capacity to receive critique without internalizing it.</li>
                                            </ul>

                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />

        </React.Fragment>
    )

}
export default CareerDetails;