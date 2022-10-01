import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/Investment.rational' },
    { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/rational-investment/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
    { Social: <FaTwitter />, link: 'https://twitter.com/' },
    { Social: <FaYoutube />, link: 'https://youtube.com/channel/UCQ8M6uzgAZa2FqoAlCwW-Ng' },
    { Social: <FaWhatsapp />, link: 'https://api.whatsapp.com/send?phone=+919925853065&text=Hello%2C%20I%20am%20Intrested%20in%20some%20Goal%20Planning%20and%20Wealth%20Creation%2C%20Guide%20me%20for%20the%20same.' },
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/home-one">
                                    <img style={{ height: '70px' }} src="/assets/images/logo/rational-investment-2.png" alt="Logo images" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val, i) => (
                                    <li key={i}><a href={`${val.link}`} target="_blank">{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2022 All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="inner text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p style={{fontWeight: 'bold', fontSize: '16px'}}>Disclaimer: www.rationalinvestments.in is an online website of rational Investments who is registered vide ARN- 94466 as a AMFI Registered Mutual Fund Distributor. The said website is intends to provide educative and informative details related to investments and also provide online transaction facility in Mutual Funds.  The website does not guarantee any returns or financial goal success by any means.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;