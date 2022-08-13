import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiChevronUp } from "react-icons/fi";
import { GiLifeSupport, GiTakeMyMoney, GiChart, GiHealthPotion } from "react-icons/gi";
import { GrMoney, GrUserManager } from "react-icons/gr";
import { FcMoneyTransfer } from "react-icons/fc";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import { useHistory } from 'react-router-dom';

const ServiceList = [
    {
        key: 'hi',
        icon: <GiHealthPotion />,
        bgImage: 'bg_image--34',
        title: 'Health Insurance',
        descriptionShort: "A financial plan is a comprehensive picture of your current finances, your financial goals and any strategies you have set to achieve those goals.",
    },
    {
        key: 'li',
        icon: <GiLifeSupport />,
        bgImage: 'bg_image--36',
        title: 'Life Insurance',
        descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        key: 'bo',
        icon: <GrMoney />,
        bgImage: 'bg_image--35',
        title: 'Bonds',
        descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        key: 'mf',
        icon: <FcMoneyTransfer />,
        bgImage: 'bg_image--37',
        title: 'Mutual Funds',
        descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        key: 'cf',
        icon: <GiTakeMyMoney />,
        bgImage: 'bg_image--37',
        title: 'Corporate Fixed Deposit',
        descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        key: 'sb',
        icon: <GiChart />,
        bgImage: 'bg_image--37',
        title: 'Stock Broking',
        descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    },
    {
        key: 'pm',
        icon: <GrUserManager />,
        bgImage: 'bg_image--37',
        title: 'PMS',
        descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
    }
]


const Product = () => {
    
        const history = useHistory();

        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black"/>
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Our Products'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Investment Strategies</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" onClick={() => history.push('/product-details?name='+val.key)}>
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

export default Product;