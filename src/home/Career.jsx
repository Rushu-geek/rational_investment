import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp, FiPhoneCall } from "react-icons/fi";
import { GiStairsGoal, GiReceiveMoney, GiChart, GiPieChart } from "react-icons/gi";

import {FaHandshake} from "react-icons/fa";

import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import { useHistory } from 'react-router-dom';

const ServiceList = [
    {
        key: 'rm',
        icon: <FaHandshake />,
        title: 'Relationship Manager',
        descriptionShort: "Smart communication, Smart personality and selling attitude with good knowledge of Financial Product.",
    },
    {
        key: 'tc',
        icon: <FiPhoneCall />,
        title: 'Tele Caller',
        descriptionShort: 'We are searching for an engaged telecaller to boost sales by reaching out to current and possible clients.',
    }
]


const Career = () => {
    
        const history = useHistory();

        const scroll = () => {
            window.scrollTo(0, 700)
        }

        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                {/* <Breadcrumb title={'Open Positions'} onClick={() => scroll()} bgImage="bg_image--50" /> */}
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area text-center creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <h1>Open Positions</h1>
                    <div className="container">
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" onClick={() => history.push('/careers-details?name='+val.key)}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.descriptionShort}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Start Back To Top */}
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

export default Career;