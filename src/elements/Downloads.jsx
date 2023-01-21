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
            <PageHelmet pageTitle='Download' />

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
                            <a style={{color: 'blue'}} href='/assets/images/product/bajaj-fd-form.pdf' target="_blank">Click to open application form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="edelweissModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/edel-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/edel-sip-form.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/edel-stp-swp-form.pdf' target="_blank">Click to open SWP/STP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/edel-CTF.pdf' target="_blank">Click to open transaction form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="frankModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/frank-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/frank-sip.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/frank-CTF.pdf' target="_blank">Click to open transaction form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="hdfcModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/hdfc-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/hdfc-sip.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/hdfc-SWP.pdf' target="_blank">Click to open SWP form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="iciciModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/icici-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/icici-sip.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/icici-SWP.pdf' target="_blank">Click to open SWP form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="nipponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/nippon-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/nippon-sip.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/nippon-SWP.pdf' target="_blank">Click to open SWP form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="sbiModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/sbi-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/sbi-sip.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/sbi-SWP.pdf' target="_blank">Click to open SWP form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="tataModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/tata-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/tata-sip.pdf' target="_blank">Click to open SIP form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/tata-SWP.pdf' target="_blank">Click to open SWP form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="hdfcFdModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/hdfc-individual-deposit.pdf' target="_blank">Click to open individual deposit form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/hdfc-kyc.pdf' target="_blank">Click to open KYC form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/hdfc-recurring-deposit.pdf' target="_blank">Click to open recurring form</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="axisModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Download</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/AXIS-CAF.pdf' target="_blank">Click to open common application form</a>
                        </div>
                        <div class="modal-body">
                            <a style={{color: 'blue'}} href='/assets/images/product/AXIS-SIP.pdf' target="_blank">Click to open SIP form</a>
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
                                <li data-toggle="modal" data-target="#axisModal">
                                    <img src="/assets/images/brand/axis_logo.jpg" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#edelweissModal">
                                    <img src="/assets/images/brand/edel.jpg" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#frankModal">
                                    <img src="/assets/images/brand/fti.svg" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#hdfcModal">
                                    <img src="/assets/images/brand/HDFC-AMC.jpg" alt="Logo Images" />
                                </li>
                                <br />
                                <li data-toggle="modal" data-target="#iciciModal">
                                    <img src="/assets/images/brand/icici.png" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#nipponModal">
                                    <img src="/assets/images/brand/nippon.png" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#sbiModal">
                                    <img src="/assets/images/brand/sbi.png" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#tataModal">
                                    <img src="/assets/images/brand/tata.png" alt="Logo Images" />
                                </li>
                            </ul>
                            <h3 className="title" style={{textAlign: 'center'}}>Fixed Deposit</h3>
                            <ul className="brand-style-2">
                                <li data-toggle="modal" data-target="#exampleModal">
                                    <img src="/assets/images/brand/bajaj_hi.png" alt="Logo Images" />
                                </li>
                                <li data-toggle="modal" data-target="#hdfcFdModal">
                                    <img src="/assets/images/brand/hdfc_cf.jpg" alt="Logo Images" />
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