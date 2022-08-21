import React from "react";
import PageHelmet from "../component/common/Helmet";
import ContactTwo from "../elements/contact/ContactThree";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";


const Calculators = () => {


    return (
        <React.Fragment>
            <PageHelmet pageTitle='Contact' />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--38" data-black-overlay="6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Calculators</h2>
                                {/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Contact Page Area  */}
            <div className="rn-contact-page ptb--120 bg_color--1">
                <ContactTwo />
            </div>
            {/* End Contact Page Area  */}

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
export default Calculators;