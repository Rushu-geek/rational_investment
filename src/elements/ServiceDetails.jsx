import React, { useEffect, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import { useLocation } from "react-router-dom";


const ServiceDetails = () => {

    const location = useLocation();

    const ServiceList = [
        {
            key: 'fs',
            bgImage: 'bg_image--34',
            img1: '/assets/images/service/fs1.jpg',
            img2: '/assets/images/service/fs2.jpg',
            title: 'Financial service',
            title2: "How Financial Planning Works",
            title3: "Does Financial Planning Really Matter That Much?",
            descriptionP1: "A financial plan is a comprehensive picture of your current finances, your financial goals and any strategies you have set to achieve those goals. Good financial planning should include details about your cash flow, savings, debt, investments, insurance and any other elements of your financial life. Every individual needs to understand the need to manage his or her finances.",
            descriptionP2: "Financial planning has numerous facts that are difficult for one person to handle alone. As a result, our team of specialists is always there to support, guide, and help you in the best way possible. Keep in mind that financial planning is not about gaining more money, but rather about maximising what you already have to have a better life.",
            descriptionP3: "It's time to learn how financial planning can help you secure your future whether you're still debating whether it's important or not. Making a financial plan helps you develop financial discipline. You don't spend money unnecessarily. You maintain eyes on your spending and savings. Without Disturbing Your Goals & Lifestyle.",
            descriptionP4: "Planning helps you control inflation. You are aware of what are the price of various options and activities. You make greater use of your budget planning.",
            descriptionShort: "A financial plan is a comprehensive picture of your current finances, your financial goals and any strategies you have set to achieve those goals.",
            li1: "Analyzing and evaluating your financial situation will help you understand where your money is coming from and where it is being spent.",
            li2: "deciding where you want to go and creating a plan that meets your objectives and expectations.",
            li3: "MONITORING your short- and long-term goals will help you reach your desired goal.",
            li4: "We provide unbiased insurance protection for you and your loved ones.",
            li5: "We consider one's retirement goals in order for the preparation and ideas we recommend to help you retain the same standard of life after retirement as well.",
            li6: "To achieve your predetermined goals and gain the most benefit and return from your investments and savings, you can use our savings and investment plans.",
            li7: "And whatever may be the inflation rate, you can be rest assured that our planning will take care of it as well.",
        },
        {
            key: 'rp',
            bgImage: 'bg_image--36',
            img1: '/assets/images/service/rp1.jpg',
            img2: '/assets/images/service/rp2.jpg',
            title: 'Retirements Plannings',
            title2: "Stages of Retirement Planning:",
            title3: "Young Adulthood (Age 21-35):",
            title4: "Early Midlife (Age 36-50):",
            title5: "Later Midlife (Age 50-65):",
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "Retirement planning establishes desired levels of retirement income as well as the steps and choices required to get there. Identification of income sources, estimation of expenses, implementation of a savings plan, and management of assets and risk are all components of retirement planning. To determine whether the retirement income objective will be achieved, future cash flows are predicted.",
            li1: "Young adults may not have much money available for investing, but they do have time to wait for investments to mature, which is a crucial and priceless component of retirement savings. The idea of compound interest is to responsible for this. The longer you have, the more interest you will be able to earn thanks to compound interest. Because of the wonders of compounding, even if you can only set away 2000₹ per month, starting to invest at age 25 will increase your money's value by three times compared to starting later in life, at age 45. There is no way to make up for lost time, even if you were to invest more money in the future.",
            li2: "Financial burdens including mortgages, student loans, insurance premiums, and credit card debt frequently appear in the early middle age. At this point of retirement preparation, saving must yet continue. These are some of the best years for aggressive saving because of the increased income and the amount of time you still have to invest and earn interest.",
            li3: "Your investment portfolio should grow more conservative as you become older. There are a few benefits even though there isn't much time left to save for individuals who are in this stage of retirement planning. You may have more money available to invest if you earn more money and some of the aforementioned costs (mortgages, school loans, credit card debt, etc.) have already been paid off by this point.",
            videoId: "N3OB9QXcjIE"
        },
        {
            key: 'gp',
            bgImage: 'bg_image--35',
            img1: '/assets/images/service/gp1.jpg',
            img2: '/assets/images/service/gp2.jpg',
            title: 'Goal planning',
            title2: "What would your goals be?",
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "The practise of helping clients prioritise their financial goals and choose the best strategy to support them is known as goals-based planning. Goals-based planning minimizes the retirement-only focus and expands our attention to include every element of our client's financial life.",
            descriptionP2: "Many wealth management companies position themselves as financial planners by identifying a few broad objectives, like retirement savings or leaving a legacy, then suggesting investing methods to help you meet those goal.",
            descriptionP3: "Simply said, money is an enabler. Being the richest man in the world and having a lot of money are pointless. You should use money to further your life goal.",
            descriptionP4: "Having a goal makes it easier to understand why you are doing in a specific way.",
            li1: "building an emergency fund",
            li2: "international holiday (one time or recurring)",
            li3: "establish a business",
            li4: "purchasing a Property",
            li5: "children’s education",
            li6: "getting a car",
            li7: "children’s Marriage",
            li8: "Retirement planning",
            li9: "Upgrading your home",
            videoId: "2yJ-5LpkO7Q"
        },
        {
            key: 'wm',
            bgImage: 'bg_image--37',
            img1: '/assets/images/service/wm1.jpg',
            img2: '/assets/images/service/wm2.jpg',
            title: 'Wealth Management',
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "Clients can choose from a variety of financial services provided by wealth management companies. These include handling concerns related to personal finance, building wealth for their clients, and offering a way for clients to leave fortune to their children.",
            li1: "We will lead and support you so that you are aware of when, where, and how much to contribute each month.",
            li2: "For you, we will create a complete investment strategy that takes into account all market segments.",
            li3: "The three keys to long-term wealth security are when to buy, how much to invest, and where to invest.",
            li4: "We'll also make recommendations for ways to get out from under your current debts.",
            li5: "We prioritise your whole development over emphasising just one area of it.",
        }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [bgImage, setBgImage] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [title, setTitle] = useState("");
    const [title2, setTitle2] = useState("");
    const [title3, setTitle3] = useState("");
    const [title4, setTitle4] = useState("");
    const [title5, setTitle5] = useState("");
    const [descriptionP1, setDescriptionP1] = useState("");
    const [descriptionP2, setDescriptionP2] = useState("");
    const [descriptionP3, setDescriptionP3] = useState("");
    const [descriptionP4, setDescriptionP4] = useState("");
    const [li1, setLi1] = useState("");
    const [li2, setLi2] = useState("");
    const [li3, setLi3] = useState("");
    const [li4, setLi4] = useState("");
    const [li5, setLi5] = useState("");
    const [li6, setLi6] = useState("");
    const [li7, setLi7] = useState("");
    const [li8, setLi8] = useState("");
    const [li9, setLi9] = useState("");
    const [videoId, setVideoId] = useState("");

    const openModal = () => {
        setIsOpen(true);
    }

    const scroll = () => {
        window.scrollTo(0, 700)
    }

    useEffect(() => {
        console.log(location.state);

        ServiceList.forEach((service, index) => {
            if (service.key === location.search.slice(-2)) {
                console.log(service);
                setBgImage(service.bgImage);
                setImage1(service.img1);
                setImage2(service.img2);
                setTitle(service.title);
                setTitle2(service.title2);
                setTitle3(service.title3);
                setTitle4(service.title4);
                setTitle5(service.title5);
                setDescriptionP1(service.descriptionP1);
                setDescriptionP2(service.descriptionP2);
                setDescriptionP3(service.descriptionP3);
                setDescriptionP4(service.descriptionP4);
                setLi1(service.li1);
                setLi2(service.li2);
                setLi3(service.li3);
                setLi4(service.li4);
                setLi5(service.li5);
                setLi6(service.li6);
                setLi7(service.li7);
                setLi8(service.li8);
                setLi9(service.li9);
                setVideoId(service.videoId);
            }
        })

    }, [location, ServiceList]);

    return (
        <React.Fragment>

            {/* Start Pagehelmet  */}
            <PageHelmet pageTitle='Service Details' />
            {/* End Pagehelmet  */}

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <div className={`rn-page-title-area pt--120 pb--190 bg_image ${bgImage}`} data-black-overlay="4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div style={{cursor: 'pointer'}} onClick={() => scroll()} className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">{title}</h2>
                                {/* <p>Fresh From The Press Discription</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper */}
            <div style={{ textAlign: 'justify' }} className="rn-service-details ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-inner">
                                <div className="inner">
                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb" data-black-overlay="5">
                                                <img data-black-overlay="5" className="w-100" src={image1} alt="Service Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            {title === "Financial service" && <div className="details mt_md--30 mt_sm--30">
                                                <p>{descriptionP1}</p>
                                                <p>{descriptionP2}</p>
                                                <h4 className="title">{title2}</h4>
                                                <ul className="liststyle">
                                                    <li>{li1}</li>
                                                    <li>{li2}</li>
                                                    <li>{li3}</li>
                                                    <li>{li4}</li>
                                                    <li>{li5}</li>
                                                </ul>
                                            </div>}

                                            {title === "Retirements Plannings" && <div className="details mt_md--30 mt_sm--30">
                                                <p>{descriptionP1}</p>
                                            </div>}

                                            {title === "Goal planning" && <div className="details mt_md--30 mt_sm--30">
                                                <p>{descriptionP1}</p>
                                                <p>{descriptionP2}</p>
                                                <p>{descriptionP3}</p>
                                            </div>}

                                            {title === "Wealth Management" && <div className="details mt_md--30 mt_sm--30">
                                                <p>{descriptionP1}</p>
                                            </div>}
                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-6 col-12 order-2 order-lg-1">
                                            {title === "Financial service" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title3}</h4>
                                                <p>{descriptionP3}</p>
                                                <p>{descriptionP4}</p>
                                                {/* <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul> */}
                                            </div>}

                                            {title === "Retirements Plannings" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4>
                                                <ul className="liststyle">
                                                    <li><b>{title3} </b>{li1}</li>
                                                    <li><b>{title4} </b>{li2}</li>
                                                    <li><b>{title5} </b>{li3}</li>
                                                </ul>
                                            </div>}

                                            {title === "Goal planning" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4>
                                                <ul className="liststyle">
                                                    <li>{li1}</li>
                                                    <li>{li2}</li>
                                                    <li>{li3}</li>
                                                    <li>{li4}</li>
                                                    <li>{li5}</li>
                                                    <li>{li6}</li>
                                                    <li>{li7}</li>
                                                    <li>{li8}</li>
                                                    <li>{li9}</li>
                                                </ul>
                                                <p className="pt-4">{descriptionP4}</p>
                                            </div>}

                                            {title === "Wealth Management" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4>
                                                <ul className="liststyle">
                                                    <li>{li1}</li>
                                                    <li>{li2}</li>
                                                    <li>{li3}</li>
                                                    <li>{li4}</li>
                                                    <li>{li5}</li>
                                                </ul>
                                            </div>}
                                        </div>
                                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="thumb position-relative">
                                                <img className="w-100" src={image2} alt="Service Images" />
                                                <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => setIsOpen(false)} />
                                                {(title == "Retirements Plannings" || title == "Goal planning") && <button className="video-popup" onClick={openModal}><span className="play-icon"></span></button>}
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Wrapper */}

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
export default ServiceDetails;