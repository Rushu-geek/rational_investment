import React, { Component, Fragment } from "react";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import { FiChevronUp, FiCheck } from "react-icons/fi";
import CounterOne from "../elements/counters/CounterOne";
import BrandOne from "../elements/BrandTwo";
import Testimonial from "../elements/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SlideList = [
    {
        textPosition: 'text-right',
        bgImage: 'bg_image--32',
        category: '',
        title: '',
        description: '',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--30',
        category: '',
        title: '',
        description: '',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--31',
        category: '',
        title: '',
        description: '',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--33',
        category: '',
        title: '',
        description: '',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    },
]

const starndardService = [
    {
        image: '01',
        title: 'Financial service',
        description: 'Financial service Description',
        name: 'fs'
    },
    {
        image: '02',
        title: 'Retirements Plannings',
        description: 'Retirements Plannings Description',
        name: 'rp'
    },
    {
        image: '03',
        title: 'Goal planning',
        description: 'Goal planning Description',
        name: 'gp'
    },
    {
        image: '04',
        title: 'Wealth Management',
        description: 'Wealth Management Description',
        name: 'wm'
    }
]

// Settings for the service slider
const serviceSliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

class CorporateBusiness extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    componentDidMount() {
        $("#myModal").modal('show');
        // Initialize AOS animation library with delayed trigger
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            disable: window.innerWidth < 768,
            mirror: false,
            offset: 200,  // Triggers when element is 200px from viewport bottom
            delay: 0,     // Default delay for all elements
            anchorPlacement: 'top-bottom' // Animates when top of element hits bottom of viewport
        });

        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        // Clean up the event listener when component unmounts
        window.removeEventListener('resize', this.handleResize);
    }
    
    handleResize = () => {
        AOS.refresh();
    }

    render() {
        var namesItemOne = [
            'To give customers the best value for their money through customized service, innovative products, and the best trading and investment modern techniques.',
            'Helping individuals with achieving financial success Which will help them secure their future goals and lifestyle.',
        ];
        var namesItemTwo = [
            'one stop solution for all your investment needs.',
            'Better hand holding.',
            'Scientific perspective to achieve financial well-being of our customers.',
            'Trusted by 200+ families.',
            'We believe in work with simple & steady strategies.'
        ];

        const PostList = BlogContent.slice(0, 1);

        const scroll = () => {
            window.scrollTo(0, 1000)
        }

        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i;
        let isMobileDevice = regexp.test(details);

        return (
            <Fragment>
                <Helmet pageTitle="Home" />

                {/* Start Header Area  */}
                <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
                {/* End Header Area  */}

                {/* Start Slider Area - No animation needed here */}
                <div className="slider-wrapper">
                    <div className="slider-activation">
                        <Slider {...slideSlick}>
                            {SlideList.map((value, index) => (
                                <div className={`slide slide-style-2 slider-box-content without-overlay align-items-center bg_image ${value.bgImage}`} key={index}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                {/* Slider content */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}

                {/* Start About Area - Delayed animation */}
                <div className="rn-about-area ptb--120 bg_color--5" 
                     data-aos="fade-up"
                     data-aos-offset="200">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div style={{ textAlign: 'justify' }} className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">About Us</h2>
                                        <p>Rational Investment is a rising, evolving firm with its roots in the financial
                                            product distribution services expanding into newer boundaries with great
                                            passion. We are certified Mutual Fund Distributor recognized by AMFI -
                                            Association of Mutual Fund in India. Insurance consultants (Life & Health).</p>
                                        <p>
                                            Established in the year 2014 by Mr Nimit H Shah & now Rational Investment is
                                            one of the leading financial service providers & distributors.
                                        </p>
                                    </div>
                                    <div className="mt--30" 
                                         data-aos="fade-up" 
                                         data-aos-delay="100"
                                         data-aos-offset="150">
                                        <h4>Our Mission</h4>
                                        <ul className="list-style--1">
                                            {namesItemOne.map((name, index) => {
                                                return <li key={index}><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="mt--30" 
                                         data-aos="fade-up" 
                                         data-aos-delay="150"
                                         data-aos-offset="150">
                                        <h4>Why Rational Investments</h4>
                                        <ul className="list-style--1">
                                            {namesItemTwo.map((name, index) => {
                                                return <li key={index}><FiCheck /> {name}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2" 
                                 data-aos="fade-left"
                                 data-aos-offset="200">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="/assets/images/about/about-3.png" alt="About Images" />
                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='N3OB9QXcjIE' onClose={() => this.setState({ isOpen: false })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Start Counterup Area - More delayed trigger */}
                <div className="counterup-area pb--80 pt--40 bg_image bg_image--17 theme-text-white" 
                     data-black-overlay="7" 
                     data-aos="zoom-in"
                     data-aos-offset="250">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div>
                {/* End Counterup Area */}

                {/* Start Featured Service Area - Delayed animation */}
                <div className="rn-featured-service-area pt--90 pb--120 bg_color--1" 
                     data-aos="fade-up"
                     data-aos-offset="200">
                    <div className="container">
                        <div className="row">
                            {/* Start Single Service - Earlier trigger for title */}
                            <div className="col-lg-2 col-md-6 col-12 mt--30" 
                                 data-aos="fade-right"
                                 data-aos-offset="150">
                                <div className="section-title mt-5">
                                    <h3 className="title">Services</h3>
                                    <p>We provide various services related to investment.</p>
                                    <div className="service-btn">
                                        <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">See all Services</span></a>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Service  */}

                            {/* Start Services Slider - Later trigger for content */}
                            <div className="col-lg-10" 
                                 data-aos="fade-left"
                                 data-aos-offset="200">
                                <Slider {...serviceSliderSettings}>
                                    {starndardService.map((value, index) => (
                                        <div key={index}>
                                            <div className="standard-service" style={{ margin: '0 15px' }}>
                                                <div className="thumbnai">
                                                    <img src={`/assets/images/featured/corporate-${value.image}.png`} alt="Corporate Images" />
                                                </div>
                                                <div className="content">
                                                    <h3><a href={`/service-details?name=${value.name}`}>{value.title}</a></h3>
                                                    <p>{value.description}</p>
                                                    <a className="btn-transparent rn-btn-dark" href={`/service-details?name=${value.name}`}><span className="text">Read More</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            {/* End Services Slider  */}
                        </div>
                    </div>
                </div>
                {/* End Featured Service Area  */}

                {/* Start About Area - Delayed animation */}
                <div className="rn-about-area ptb--120 bg_color--5" 
                     data-aos="fade-up"
                     data-aos-offset="200">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            <div className="col-lg-6" 
                                 data-aos="fade-right"
                                 data-aos-offset="200">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/wp.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-6" 
                                 data-aos="fade-left"
                                 data-aos-offset="200">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">Working Process</h2>
                                    </div>
                                    <div className="accordion-wrapper mt--30">
                                        <Accordion01 />
                                    </div>
                                    <div className="about-button mt--50">
                                        <a className="rn-button-style--2 btn-solid" href="/about">See how it works</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Testimonial Area - Delayed animation */}
                <div className="rn-testimonial-area bg_color--1 ptb--90" 
                     data-aos="fade-up"
                     data-aos-offset="200">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center mb--100">
                                    <h2 className="title">Testimonials</h2>
                                </div>
                            </div>
                        </div>
                        <Testimonial />
                    </div>
                </div>

                {/* Start Brand Area - More delayed trigger */}
                <div className="rn-brand-area ptb--120 bg_color--5" 
                     data-aos="zoom-in"
                     data-aos-offset="250">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandOne branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                {/* Start Blog Area - Delayed animation */}
                <div className="rn-blog-area pt--120 pb--80 bg_color--1" 
                     data-aos="fade-up"
                     data-aos-offset="200">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title service-style--3 text-center">
                                    <h2 className="title">Latest Blogs</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60">
                            {PostList.map((value, i) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" 
                                     key={i} 
                                     data-aos="fade-up" 
                                     data-aos-delay={i * 100}
                                     data-aos-offset="150">
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Blog Area */}

                {/* Start call To Action - Delayed animation */}
                <CallAction data-aos="fade-up" data-aos-offset="200" />
                {/* End call To Action  */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default CorporateBusiness;