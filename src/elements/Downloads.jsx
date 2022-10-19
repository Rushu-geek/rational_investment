import React from "react";
import PageHelmet from "../component/common/Helmet";
import ContactTwo from "../elements/contact/ContactThree";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import BrandTwo from "./BrandTwo";


const Downloads = () => {


    return (
        <React.Fragment>
            <PageHelmet pageTitle='Contact' />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a href='/somefile.txt' download>Click to download</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-5 pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="title" style={{textAlign: 'center'}}>Mutual Funds</h3>
                            <ul className="brand-style-2">
                                <li data-toggle="modal" data-target="#exampleModal">
                                    <img src="/assets/images/brand/axis_logo.jpg" alt="Logo Images" />
                                </li>
                                <li>
                                    <img src="/assets/images/brand/edel.jpg" alt="Logo Images" />
                                </li>
                                <li>
                                    <img src="/assets/images/brand/fti.svg" alt="Logo Images" />
                                </li>
                                <li>
                                    <img src="/assets/images/brand/HDFC-AMC.jpg" alt="Logo Images" />
                                </li>
                                <br />
                                <li>
                                    <img src="/assets/images/brand/icici.png" alt="Logo Images" />
                                </li>
                                <li>
                                    <img src="/assets/images/brand/nippon.png" alt="Logo Images" />
                                </li>
                                <li>
                                    <img src="/assets/images/brand/sbi.png" alt="Logo Images" />
                                </li>
                                <li>
                                    <img src="/assets/images/brand/tata.png" alt="Logo Images" />
                                </li>
                            </ul>
                            <h3 className="title" style={{textAlign: 'center'}}>Fixed Deposit</h3>
                            <ul className="brand-style-2">
                                <li>
                                    <img src="/assets/images/brand/bajaj_hi.png" alt="Logo Images" />
                                </li>
                            </ul>
                        </div>
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
export default Downloads;