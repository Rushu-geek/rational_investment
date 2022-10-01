import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";

class BlogDetails extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Blog Details' />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--1" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-single-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Why you shouldn't avoid doing SIP investments in a Volatile market?</h2>
                                    <ul className="blog-meta d-flex justify-content-center align-items-center">
                                        <li><FiClock />October 1st, 2022</li>
                                        <li><FiUser />Admin</li>
                                        {/* <li><FiMessageCircle />15 Comments</li>
                                        <li><FiHeart />Like</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-wrapper">
                                    <div className="inner">
                                        <p>When cautious investors anticipate that the stock market will become stagnant, they may
                                            give up on their equity mutual funds. They choose to invest the money in debt because they
                                            think it is a safer option.</p>
                                        <p>When cautious investors anticipate that the stock market will become stagnant, they may
                                            give up on their equity mutual funds. They choose to invest the money in debt because they
                                            think it is a safer option. Financial planners and consultants to mutual funds, however,
                                            recommend the opposite. During difficult times, intelligent investors are more likely to stick
                                            to equities investing.</p>
                                        {/* <div className="thumbnail">
                                            <img src="/assets/images/blog/bl-big-01.jpg" alt="Blog Images" />
                                        </div> */}


                                        <div className="col-lg-12 d-flex flex-wrap mt-5">

                                            <div className="content">
                                                <h3 className="title">Volatility and the Investor</h3>
                                                <p>Investors are alarmed by volatility and the economic downturn. The stock market is known
                                                    for its unpredictable nature. For example, the Sensex dropped nearly 1,000 points in a single
                                                    day during the most recent financial year. Mutual fund participants frequently think about
                                                    stopping their SIP investments during such circumstances. This is not wise nor advisable.
                                                    Investors must keep up SIPs and make plans for long-term gains.</p>
                                                <p>Investors are presented with this issue each time there is a market correction (of
                                                    discontinuing of sip and maybe redeeming investments). They discontinue their SIPs and
                                                    either invest the funds in fixed income (debt funds) or stop them entirely.</p>
                                                <p>So, in such a market environment, what is the best option? Here are some pointers:</p>
                                                <ul className="list-style">
                                                    <li>Market declines that cause SIPs to underperform are not an excuse to quit investing.</li>
                                                    <li>After a market decline, investors must increase their SIPs. Increase SIP investments if
                                                        at all possible.</li>
                                                    <li>SIP investments should be made over the recommended time period of 5 to 10
                                                        years, during which the equity markets may experience ups and downs, but investors
                                                        would stand to gain.</li>
                                                </ul>
                                                <p className="mt-5">Usually, it is too soon to evaluate a SIP investment after one or two years. The minimal time
                                                    frame for evaluating the performance of an equity fund is five to seven years.</p>
                                            </div>
                                        </div>

                                        {/* <p className="mt--25 mt_sm--5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedeed eedhumour, or randomised words which don't look even slightly believable.</p>
                                        <div className="video-wrapper position-relative mb--40">
                                            <div className="thumbnail">
                                                <img src="/assets/images/blog/bl-big-01.jpg" alt="Blog Images" />
                                            </div>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({ isOpen: false })} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        <p className="mb--0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet. It re are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedeed eedhumour, or randomised words which don't look even slightly believable.</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Start BLog Comment Form  */}
                {/* <div className="blog-comment-form pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="rnform-group">
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="rnform-group">
                                                    <input type="text" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-12">
                                                <div className="rnform-group">
                                                    <textarea type="text" placeholder="Comment"></textarea>
                                                </div>

                                            </div>
                                            <div className="col-lg-12">
                                                <div className="blog-btn">
                                                    <Link className="rn-button-style--2 btn-solid" to="/blog-details"><span>SEND MESSAGE</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End BLog Comment Form  */}

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
}
export default BlogDetails;