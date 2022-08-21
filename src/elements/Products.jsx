import React from "react";
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
        descriptionShort: "Health Insurance or medical insurance is a contract between the insurer and policyholder, where the insurance company offers medical coverage to the insured up to the sum insured limit.",
    },
    {
        key: 'li',
        icon: <GiLifeSupport />,
        bgImage: 'bg_image--36',
        title: 'Life Insurance',
        descriptionShort: 'A life insurance policy is something that provides a dedicated sum of money on the demise of the policyholder or after a certain period of time.',
    },
    {
        key: 'bo',
        icon: <GrMoney />,
        bgImage: 'bg_image--35',
        title: 'Bonds',
        descriptionShort: 'A bond is a debt instrument in which an investor loans money to an entity (typically corporate or government) which borrows the funds for a defined period of time at a variable or fixed interest rate.',
    },
    {
        key: 'mf',
        icon: <FcMoneyTransfer />,
        bgImage: 'bg_image--37',
        title: 'Mutual Funds',
        descriptionShort: 'As investment goals vary from person to person post-retirement expenses, money for children’s education or marriage, house purchase, etc.',
    },
    {
        key: 'cf',
        icon: <GiTakeMyMoney />,
        bgImage: 'bg_image--37',
        title: 'Corporate Fixed Deposit',
        descriptionShort: 'Company Fixed Deposit (corporate FD) is a term deposit which is held over fixed period at fixed rates of interest.',
    },
    {
        key: 'sb',
        icon: <GiChart />,
        bgImage: 'bg_image--37',
        title: 'Stock Broking',
        descriptionShort: "An investor who buys a particular company's stock essentially means getting an ownership stake in that specific company.",
    },
    {
        key: 'pm',
        icon: <GrUserManager />,
        bgImage: 'bg_image--37',
        title: 'PMS',
        descriptionShort: 'PMS or Portfolio Management Service is a professional service where qualified and experienced portfolio managers backed by a research team manage equity portfolios on behalf of clients instead of clients managing themselves.',
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