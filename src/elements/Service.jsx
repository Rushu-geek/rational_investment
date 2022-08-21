import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import { GiStairsGoal, GiReceiveMoney, GiChart, GiPieChart } from "react-icons/gi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import { useHistory } from 'react-router-dom';

const ServiceList = [
    {
        key: 'fs',
        icon: <GiChart />,
        title: 'Financial service',
        descriptionShort: "A financial plan is a comprehensive picture of your current finances, your financial goals and any strategies you have set to achieve those goals.",
    },
    {
        key: 'rp',
        icon: <GiPieChart />,
        title: 'Retirement Planning',
        descriptionShort: 'Retirement planning establishes desired levels of retirement income as well as the steps and choices required to get there.',
    },
    {
        key: 'gp',
        icon: <GiStairsGoal />,
        title: 'Goal planning',
        descriptionShort: 'The practise of helping clients prioritise their financial goals and choose the best strategy to support them is known as goals-based planning.',
    },
    {
        key: 'wm',
        icon: <GiReceiveMoney />,
        title: 'Wealth Management',
        descriptionShort: 'Clients can choose from a variety of financial services provided by wealth management companies.',
    }
]


const Service = () => {
    
        const history = useHistory();

        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Our Services'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" onClick={() => history.push('/service-details?name='+val.key)}>
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

export default Service;