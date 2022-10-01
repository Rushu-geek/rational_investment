import React, { Component } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/Investment.rational' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/rational-investment/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
    { Social: <FaYoutube />, link: 'https://youtube.com/channel/UCQ8M6uzgAZa2FqoAlCwW-Ng' },
    { Social: <FaWhatsapp />, link: 'https://api.whatsapp.com/send?phone=+919925853065&text=Hello%2C%20I%20am%20Intrested%20in%20some%20Goal%20Planning%20and%20Wealth%20Creation%2C%20Guide%20me%20for%20the%20same.' },
]

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <span>Ready To Do This</span>
                                        <h2>Let's get <br /> to work</h2>
                                        <a className="rn-button-style--2" href="/contact">
                                            <span>Contact Us</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Quick Link</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/about">About</a></li>
                                                    <li><a href="/contact">Let's Talk</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Say Hello</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:admin@example.com">nimit@rationalinvestments.in</a></li>
                                                    <li><a href="mailto:hr@example.com">rinvestorservice@gmail.com</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val, i) => (
                                                            <li key={i}><a href={`${val.link}`} target="_blank">{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2022. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2022. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;