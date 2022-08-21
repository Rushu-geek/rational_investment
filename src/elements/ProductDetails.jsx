import React, { useEffect, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/Footer";
import { useLocation } from "react-router-dom";


const ProductDetails = () => {

    const location = useLocation();

    console.log("location >>> ", location.search);

    const productList = [
        {
            key: 'hi',
            bgImage: 'bg_image--39',
            img1: '/assets/images/product/hi1.jpg',
            img2: '/assets/images/product/hi2.jpg',
            title: 'Health Insurance',
            title2: "Top Reasons to Buy a Health Insurance Plan",
            title3: "Beat Medical Inflation",
            title4: "Afford Quality Medical Treatment",
            title5: "Fight Lifestyle Diseases",
            title6: "Protect Your Savings",
            title7: "Avail Cashless Hospitalization Facility",
            title8: "Get Tax Benefits",
            title9: "Ensure Peace of Mind",
            descriptionP1: "Health Insurance or medical insurance is a contract between the insurer and policyholder, where the insurance company offers medical coverage to the insured up to the sum insured limit. Multiple benefits on health plans are available, like coverage for hospitalization, pre &amp; post hospitalization, medical check-ups, room rent coverage, cashless facility, etc.",
            descriptionP2: "Medical inflation is increasing every day making treatments expensive. If you get hospitalized for a critical illness or lifestyle disease, you may end up losing all your savings. The only way to afford quality medical treatment during a health emergency is by buying a health insurance policy. Take a look at some of the top reasons to buy a health insurance plan below:",
            descriptionShort: "A financial plan is a comprehensive picture of your current finances, your financial goals and any strategies you have set to achieve those goals.",
            li1: "- A health insurance policy can help you pay your medical bills, including pre and post-hospitalization expenses, today as well as in future despite the rising medical costs.",
            li2: "- It helps you to afford the best quality medical treatment and care so that you can focus only on getting cured.",
            li3: "- It allows you to pay for the long-term treatment of lifestyle diseases like cancer, heart attack, etc. that have been on the rise with the changing lifestyles.",
            li4: "- It helps you to protect your hard-earned savings by covering your medical expenses so that you can avail the required treatment without any financial worries.",
            li5: "- It allows you to obtain a cashless hospitalization facility at any of the network hospitals of your insurance provider by raising a cashless claim.",
            li6: "- It enables you to save tax on the health insurance premium that you’ve paid under section 80D of the Income Tax Act for better financial planning.",
            li7: "- It allows you to obtain medical treatment with peace of mind as you do not have to worry about paying the hefty hospital bills.",
        },
        {
            key: 'li',
            bgImage: 'bg_image--40',
            img1: '/assets/images/product/li1.png',
            img2: '/assets/images/product/li2.png',
            title: 'Life Insurance',
            title2: "What is Life Insurance?",
            title3: "Types of Life Insurance",
            title4: "Term Life Insurance:",
            title5: "Whole Life Insurance:",
            title6: "Endowment Policy:",
            title7: "Savings &amp; Investment Plans:",
            title8: "Pension Plans:",
            title9: "Unit Linked Insurance Plans - ULIPs",
            title10: "Benefits of Life Insurance",
            title11: "Risk Cover:",
            title12: "Comprehensive Plan for Different Stages of Life:",
            title13: "FACILITY OF LOANS WITHOUT AFFECTING THE POLICY BENEFITS:",
            title14: "Guaranteed Income via Annuities:",
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "A life insurance policy is something that provides a dedicated sum of money on the demise of the policyholder or after a certain period of time.",
            descriptionP2: "Life insurance is a contract wherein an individual is offered financial coverage by an insurance company in exchange for a payment over a period. The payment made to the insurer is referred to as the premium. In case the policyholder passes away during the policy tenure, the insurance company will offer a lump sum amount to his/her nominee. This lump sum amount is called the sum assured on death or the death benefit. Upon completion of the policy term, the policyholder receives a sum assured on maturity or the maturity benefit from the insurer along with some bonuses.",
            descriptionP3: "Premiums paid and benefits received under life insurance are liable to tax benefits under Section 80C and Section 10(10D) respectively of the Income Tax Act, 1961.",
            li1: "Term life insurance is a type of life insurance that provides a death benefit to the beneficiary only if the insured dies during a specified period. If the policyholder survives until the end of the period, or term, the insurance coverage ceases without value and a payout or death claim cannot be made.",
            li2: "Whole life insurance is an insurance plan that provides you coverage throughout your lifetime provided the policy is in force. Whole life insurance policies also contain a cash value component that increases over time.",
            li3: "An endowment policy is defined as a types of life insurance policies that is payable to the insured if he/she is still living on the policy's maturity date, or to a beneficiary otherwise. Endowment life insurance plans provide you with a dual combination of protection and savings.",
            li4: "Savings &amp; Investment Plans are the types of insurance plans that provide you the assurance of lump sum funds for you and your family&#39;s future expenses. While providing an excellent savings tool for your short term and long term financial goals, these plans also assure your family a certain sum by way of an insurance cover. This is a broad categorization that covers both the traditional and unit linked plans.",
            li5: "These plans provide you with income during retirement is called the Retirement Plan. These plans are offered by life insurance companies in India and help you to build a retirement corpus.",
            li6: "LIPs are a type of life insurance plan that provide you with a dual advantage of protection and flexibility in investment. It is a type of life insurance where the cash value of a policy varies according to the current net asset value of the underlying investment assets. The premium paid by ULIPs is used to purchase units in investment assets chosen by the policyholder.",
            li7: "Since uncertainties are unpredictable and may cause problems to an individual and his/her family at any time, availing a life insurance policy will ensure that your family and dependents continue their lifestyle in case of your unforeseen and accidental death.",
            li8: "Not only does life insurance offer financial support in case of the policyholders unforeseen and accidental death, but also serves as a long-term investment in the sense that it encourages you to lay down your objectives, such as traditional endowment plans, provide specific maturity benefits and built-in guarantees via a number of product options like Guaranteed Maturity Values, Guaranteed Cash Values, Money Back, etc.",
            li9: "One can opt for loans against their policy. This can be done without affecting the policy and its terms and conditions at all. This ensures that you can easily meet the sudden and unexpected events in your life.",
            li10: "When it comes to planning for retirement, there are few instruments as effective as life insurance policies. Since you will be saving money over a period of time, life insurance policies will help in providing a steady source of income after you have retired from professional life."
        },
        {
            key: 'bo',
            bgImage: 'bg_image--41',
            img1: '/assets/images/product/bo1.png',
            img2: '/assets/images/product/bo2.png',
            title: 'Bonds',
            title2: "Capital Gains Bonds",
            title3: "Corporate Bonds",
            title4: "RBI Bond",
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "A bond is a debt instrument in which an investor loans money to an entity (typically corporate or government) which borrows the funds for a defined period of time at a variable or fixed interest rate. Bonds are used by companies, municipalities, states and sovereign governments to raise money to finance a variety of projects and activities. Owners of bonds are debt holders, or creditors, of the issuer.",
            descriptionP2: "Capital Gains Bonds are those instruments that allow you to transfer your gains from long term assets such as land and house property into specific bonds.",
            descriptionP3: "The most significant advantage of investing in such a bond is that it offers you tax exemption from Capital Gains Tax under Section 54EC of the Income Tax Act, 1961, for up to 6 months from the sale of the asset sold.",
            descriptionP4: "It means that an individual need to invest in capital gains bonds within 6 months from the transfer of capital assets",
            descriptionP5: "These are bonds issued by various corporates for their financing needs and hence carry credit risk. The holder of the bonds earns regular interest income. and principal amount at maturity. Corporate bonds pay higher interest than Bank FD’s and Government bonds.",
            descriptionP6: "The Bonds are open to investment by individuals (including Joint Holdings) and Hindu Undivided Families/charitable institutions/universities.",
            descriptionP7: "The Bonds will have a maturity of 7 years carrying interest at 7.15% Floating per annum payable half-yearly.",
            descriptionP8: "The Bonds will be issued in non-cumulative form only.",
            descriptionP9: "There will be no maximum limit for investment in the Bonds.",
            li1: "building an emergency fund",
            li2: "international holiday (one time or recurring)",
            li3: "establish a business",
            li4: "purchasing a Property",
            li5: "children’s education",
            li6: "getting a car",
            li7: "children’s Marriage",
            li8: "Retirement planning",
            li9: "Upgrading your home",
        },
        {
            key: 'mf',
            bgImage: 'bg_image--42',
            img1: '/assets/images/product/mf1.png',
            img2: '/assets/images/product/mf2.png',
            title: 'Mutual Funds',
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "Clients can choose from a variety of financial products provided by wealth management companies. These include handling concerns related to personal finance, building wealth for their clients, and offering a way for clients to leave fortune to their children.",
            li1: "We will lead and support you so that you are aware of when, where, and how much to contribute each month.",
            li2: "For you, we will create a complete investment strategy that takes into account all market segments.",
            li3: "The three keys to long-term wealth security are when to buy, how much to invest, and where to invest.",
            li4: "We&#39;ll also make recommendations for ways to get out from under your current debts.",
            li5: "We prioritise your whole development over emphasising just one area of it.",
        },
        {
            key: 'cf',
            bgImage: 'bg_image--43',
            img1: '/assets/images/product/cf1.png',
            img2: '/assets/images/product/cf2.png',
            title: 'Corporate Fixed Deposit',
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "Clients can choose from a variety of financial products provided by wealth management companies. These include handling concerns related to personal finance, building wealth for their clients, and offering a way for clients to leave fortune to their children.",
            li1: "We will lead and support you so that you are aware of when, where, and how much to contribute each month.",
            li2: "For you, we will create a complete investment strategy that takes into account all market segments.",
            li3: "The three keys to long-term wealth security are when to buy, how much to invest, and where to invest.",
            li4: "We&#39;ll also make recommendations for ways to get out from under your current debts.",
            li5: "We prioritise your whole development over emphasising just one area of it.",
        },
        {
            key: 'sb',
            bgImage: 'bg_image--44',
            img1: '/assets/images/product/sb2.png',
            img2: '/assets/images/product/sb1.png',
            title: 'Stock Broking',
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "Clients can choose from a variety of financial products provided by wealth management companies. These include handling concerns related to personal finance, building wealth for their clients, and offering a way for clients to leave fortune to their children.",
            li1: "We will lead and support you so that you are aware of when, where, and how much to contribute each month.",
            li2: "For you, we will create a complete investment strategy that takes into account all market segments.",
            li3: "The three keys to long-term wealth security are when to buy, how much to invest, and where to invest.",
            li4: "We&#39;ll also make recommendations for ways to get out from under your current debts.",
            li5: "We prioritise your whole development over emphasising just one area of it.",
        },
        {
            key: 'pm',
            bgImage: 'bg_image--45',
            img1: '/assets/images/product/pm1.png',
            img2: '/assets/images/product/pm2.png',
            title: 'Portfolio Management Service',
            descriptionShort: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
            descriptionP1: "Clients can choose from a variety of financial products provided by wealth management companies. These include handling concerns related to personal finance, building wealth for their clients, and offering a way for clients to leave fortune to their children.",
            li1: "We will lead and support you so that you are aware of when, where, and how much to contribute each month.",
            li2: "For you, we will create a complete investment strategy that takes into account all market segments.",
            li3: "The three keys to long-term wealth security are when to buy, how much to invest, and where to invest.",
            li4: "We&#39;ll also make recommendations for ways to get out from under your current debts.",
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
    const [title6, setTitle6] = useState("");
    const [title7, setTitle7] = useState("");
    const [title8, setTitle8] = useState("");
    const [title9, setTitle9] = useState("");
    const [title10, setTitle10] = useState("");
    const [title11, setTitle11] = useState("");
    const [title12, setTitle12] = useState("");
    const [title13, setTitle13] = useState("");
    const [title14, setTitle14] = useState("");
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

    const openModal = () => {
        setIsOpen(true);
    }

    useEffect(() => {
        productList.forEach((product, index) => {
            if (product.key === location.search.slice(-2)) {
                console.log(product);
                setBgImage(product.bgImage);
                setImage1(product.img1);
                setImage2(product.img2);
                setTitle(product.title);
                setTitle2(product.title2);
                setTitle3(product.title3);
                setTitle4(product.title4);
                setTitle5(product.title5);
                setTitle6(product.title6);
                setTitle7(product.title7);
                setTitle8(product.title8);
                setTitle9(product.title9);
                setTitle10(product.title10);
                setTitle11(product.title11);
                setTitle12(product.title12);
                setTitle13(product.title13);
                setTitle14(product.title14);
                setDescriptionP1(product.descriptionP1);
                setDescriptionP2(product.descriptionP2);
                setDescriptionP3(product.descriptionP3);
                setDescriptionP4(product.descriptionP4);
                setLi1(product.li1);
                setLi2(product.li2);
                setLi3(product.li3);
                setLi4(product.li4);
                setLi5(product.li5);
                setLi6(product.li6);
                setLi7(product.li7);
                setLi8(product.li8);
                setLi9(product.li9);
            }
        })
    }, [location, productList]);

    return (
        <React.Fragment>

            {/* Start Pagehelmet  */}
            <PageHelmet pageTitle='product Details' />
            {/* End Pagehelmet  */}

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <div className={`rn-page-title-area pt--120 pb--190 bg_image ${bgImage}`} data-black-overlay="4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">{title}</h2>
                                {/* <p>Fresh From The Press Discription</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper */}
            <div className="rn-product-details ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service-details-inner">
                                <div className="inner">
                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content pb--80 align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="thumb">
                                                <img className="w-100" src={image1} alt="product Images" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            {title === "Health Insurance" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">What is Health Insurance?</h4>
                                                <p>{descriptionP1}</p>
                                                <p>{descriptionP2}</p>
                                            </div>}

                                            {title === "Life Insurance" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4>
                                                <p>{descriptionP1}</p>
                                                <p>{descriptionP2}</p>
                                                <p>{descriptionP3}</p>
                                            </div>}

                                            {title === "Bonds" && <div className="details mt_md--30 mt_sm--30">
                                                <p>{descriptionP1}</p>
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4>
                                                <p>{descriptionP2}</p>
                                                <p>{descriptionP3}</p>
                                                <p>{descriptionP4}</p>
                                            </div>}

                                            {title === "Mutual Funds" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">WHY INVEST IN MUTUAL FUNDS?</h4>
                                                <p style={{ textAlign: 'justify' }}>As investment goals vary from person to person – post-retirement expenses,
                                                    money for children’s education or marriage, house purchase, etc. – the
                                                    investment products required to achieve these goals too vary. Mutual funds
                                                    provide certain distinct advantages over investing in individual securities.
                                                    Mutual funds offer multiple choices for investment across equity shares,
                                                    corporate bonds, government securities, Commodities and Real Estates,
                                                    providing an excellent avenue for retail investors to participate and benefit
                                                    from the uptrends in capital markets. The main advantages are that you can
                                                    invest in a variety of securities for a relatively low cost and leave the
                                                    investment decisions to a professional manager.</p>
                                            </div>}

                                            {title === "Corporate Fixed Deposit" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">Corporate Fixed Deposit</h4>
                                                <p>Company Fixed Deposit (corporate FD) is a term deposit which is held over
                                                    fixed period at fixed rates of interest. Company Fixed Deposits are offered by
                                                    Financial and Non-Banking financial companies (NBFCs). The maturities of
                                                    various company fixed deposits can range from a few months to a few years.</p>
                                                <h4 style={{ lineHeight: 1.2 }} className="title">What is the difference between FD and corporate FD?</h4>
                                                <p>The most important difference between the Corporate FD and Bank FD is
                                                    that corporate FDs offer high rates of interest whereas Bank FDs offer low
                                                    rates of interest to their customers. The penalty period for early withdrawal is
                                                    lower as compared to Bank FDs.</p>
                                            </div>}

                                            {title === "Stock Broking" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">Features of Investing in equity</h4>
                                                <p>An investor who buys a particular company&#39;s stock essentially means getting
                                                    an ownership stake in that specific company. Thus, it will give the investors a
                                                    feeling of ownership after purchasing stocks.
                                                    Having ownership means that they will become shareholders and play a vital
                                                    role in a company&#39;s decision. Investors will also have the power to vote in
                                                    decisions taken by the company.</p>
                                                <p><b>Diversification:</b>Investors who put their hard-earned money into multiple types of
                                                    investment, a stock market investment delivers a major advantage by
                                                    providing diversification.</p>
                                                <p><b>Dividend Benefits:</b>A dividend refers to a reward which the company gives to its investors. In
                                                    simple words, it is an additional income of the company for investors that is
                                                    paid yearly by every company.</p>
                                                <p><b>Investment Gains:</b>One of the major benefits of investing in the stock market is that investors get
                                                    the chance to earn more returns. Over time, if the stock market rises in value,
                                                    the prices of a particular stock can rise or fall.</p>
                                                <p><b>Liquidity:</b>Stocks are generally known as liquid assets because they can be easily
                                                    converted to cash that consists of several buyers at any given point in time.
                                                    However, when compared to other assets, it’s more difficult to look for a buyer
                                                    for some assets like property.</p>

                                            </div>}

                                            {title === "Portfolio Management Service" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">What are Portfolio Management Services in India?</h4>
                                                <p>PMS or Portfolio Management Service is a professional service where qualified
                                                    and experienced portfolio managers backed by a research team manage equity
                                                    portfolios on behalf of clients instead of clients managing themselves.</p>
                                                <p>Portfolio Management Services account is an investment portfolio in Stocks,
                                                    Debt, and fixed income products managed by a professional money manager,
                                                    that can potentially be tailored to meet specific investment objectives.</p>
                                            </div>}
                                        </div>
                                    </div>
                                    {/* End Single Area */}

                                    {/* Start Single Area */}
                                    <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-6 col-12 order-2 order-lg-1">
                                            {title === "Health Insurance" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4>
                                                <ul style={{ fontSize: '18px', lineHeight: '' }} className="liststyle">
                                                    <li><b>{title3} </b>{li1}</li>
                                                    <li><b>{title4} </b>{li2}</li>
                                                    <li><b>{title5} </b>{li3}</li>
                                                    <li><b>{title6} </b>{li4}</li>
                                                    <li><b>{title7} </b>{li5}</li>
                                                    <li><b>{title8} </b>{li6}</li>
                                                    <li><b>{title9} </b>{li7}</li>
                                                </ul>
                                            </div>}

                                            {title === "Life Insurance" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title3}</h4>
                                                <ol className="liststyle">
                                                    <li><b>{title4} </b>{li1}</li>
                                                    <li><b>{title5} </b>{li2}</li>
                                                    <li><b>{title6} </b>{li3}</li>
                                                    <li><b>{title7} </b>{li4}</li>
                                                    <li><b>{title8} </b>{li5}</li>
                                                    <li><b>{title9} </b>{li6}</li>
                                                </ol>
                                            </div>}

                                            {title === "Bonds" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title3}</h4>
                                                <p>These are bonds issued by various corporates for their financing needs and
                                                    hence carry credit risk. The holder of the bonds earns regular interest income.
                                                    and principal amount at maturity. Corporate bonds pay higher interest than
                                                    Bank FD’s and Government bonds.</p>
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title4}</h4>
                                                <p>The Bonds are open to investment by individuals (including Joint Holdings) and
                                                    Hindu Undivided Families/charitable institutions/universities.</p>
                                                <p>The Bonds will have a maturity of 7 years carrying interest at 7.15% Floating
                                                    per annum payable half-yearly.</p>
                                                <p>The Bonds will be issued in non-cumulative form only.</p>
                                                <p>There will be no maximum limit for investment in the Bonds.</p>
                                            </div>}

                                            {title === "Mutual Funds" && <div style={{ textAlign: 'justify' }} className="details mt_md--30 mt_sm--30">
                                                {/* <h4 style={{ lineHeight: 1.2 }} className="title">{title2}</h4> */}
                                                <ul className="liststyle">
                                                    <li><b>A Diversified Portfolio: </b>Mutual funds invest in two main asset classes -- debt and equity. Some funds
                                                        are pure debt, and some invest in just equity; others are balanced or hybrid.The primary benefit of investing in a mutual fund is that you get exposure to a
                                                        variety of shares or fixed income instruments.</li>
                                                    <li ><b>There’s a Fund for Everyone: </b>This could be one of the significant benefits of mutual funds. There are over
                                                        2,000+ currently active schemes -- a lot to choose from. You can find funds that
                                                        match your risk appetite, investment horizons, and personal financial goals.</li>
                                                    <li><b>Benefit from High Liquidity: </b>If you invest in open-ended mutual funds (which most funds are), you can buy
                                                        and sell your units at any time. Your total redeemable or buyable value is
                                                        based on the fund’s net asset value (NAV) for that day.</li>
                                                    <li><b>You can Invest in Small Amounts: </b>Anybody can start their SIP according to their financial connivance or Goal
                                                        Base. You can begin a SIP with as little as ₹1000 a month. The advantage here is that
                                                        you don’t have to wait for a while until you accumulate enough cash to make
                                                        investments.</li>
                                                    <li><b>Well-Regulated: </b>Mutual Funds are regulated by the capital markets regulator, Securities and
                                                        Exchange Board of India (SEBI) under SEBI (Mutual Funds) Regulations, 1996.
                                                        SEBI has laid down stringent rules and regulations keeping investor protection,
                                                        transparency with appropriate risk mitigation framework and fair valuation
                                                        principles.</li>
                                                </ul>
                                            </div>}

                                            {title === "Corporate Fixed Deposit" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">Benefits and features of company fixed deposits</h4>
                                                <ol className="liststyle">
                                                    <li>Company FDs are fixed deposits that are offered by companies and financial
                                                        institutions.</li>
                                                    <li>These deposits function as regular fixed deposits, but feature higher interest
                                                        rates.</li>
                                                    <li>They are low-risk investments and do not face the influence of market
                                                        forces.</li>
                                                    <li>They may be flexible in some cases. This means that you get to choose your
                                                        tenor or maturity terms.</li>
                                                    <li>Company FDs can be liquidated easily depending on the terms of the
                                                        institution.</li>
                                                    <li>These accounts may offer premature withdrawals without restrictions.</li>
                                                    <li>The money from company FDs can be used for any purpose like financing a
                                                        holiday or even purchasing an asset.</li>
                                                    <li>They offer non-cumulative and cumulative interest pay-outs.</li>
                                                    <li>They feature safety ratings by credit agencies like ICRA and CRISIL. You can
                                                        choose one based on how high the ratings are.</li>
                                                </ol>
                                            </div>}

                                            {title === "Stock Broking" && <div className="details mt_md--30 mt_sm--30">
                                                <p><b>They are well protected by SEBI:</b>The stock market of India is regulated by the Security Exchange Board of India
                                                    (SEBI). Security Exchange Board of India (SEBI) is majorly responsible for
                                                    regulating the stock exchanges, their developments and mainly protecting the
                                                    rights of all the investors.</p>
                                                <p><b>Flexibility to Invest in Smaller Amounts:</b>An investor is looking to enter the stock market can start their small
                                                    investments in the stock market by purchasing stocks of small-cap or mid-cap
                                                    companies but in smaller units.</p>
                                                <p><b>It Allows You to Take Advantage of the Growing Economy:</b>Corporate earnings usually tend to increase as there is growth in an economy.
                                                    This is usually due to several factors like increased job creation, leading to an
                                                    increase in income and sales.</p>
                                                <p><b>Easy Process of Buying and Selling:</b>The process of buying and selling in the stock market is simple and easy for all
                                                    investors. Buying of stocks is done with the help of a broker, financial planner,
                                                    or online mode.</p>

                                            </div>}

                                            {title === "Portfolio Management Service" && <div className="details mt_md--30 mt_sm--30">
                                                <p>When
                                                    you invest in PMS, you own individual securities unlike a mutual fund investor,
                                                    who owns units of the entire fund. You have the freedom and flexibility to
                                                    tailor your portfolio to address personal preferences and financial goals.
                                                    Although portfolio managers may oversee hundreds of portfolios, your account
                                                    may be unique.</p>
                                                <p>As per SEBI guidelines, only those entities who are registered
                                                    with SEBI for providing PMS services can offer PMS to clients. As per the SEBI
                                                    guidelines, the minimum investment required to open a PMS account is Rs. 50
                                                    Lakhs. However, different providers have different minimum balance
                                                    requirements for different products. In India, Portfolio Management Services
                                                    are also provided by equity broking firms &amp; Asset management Companies.</p>
                                            </div>}
                                        </div>
                                        <div className="col-lg-6 col-12 order-1 order-lg-2">
                                            <div className="thumb position-relative">
                                                <img className="w-100" src={image2} alt="product Images" />
                                                <ModalVideo channel='youtube' isOpen={isOpen} videoId='ZOoVOfieAF8' onClose={() => setIsOpen(false)} />
                                                <button className="video-popup" onClick={openModal}><span className="play-icon"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row sercice-details-content align-items-center">
                                        <div className="col-lg-12 col-12 order-2 order-lg-1">

                                            {title === "Health Insurance" && <div style={{ textAlign: 'center' }} className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">Our Partners</h4>
                                                <ul className="brand-style-2">
                                                    <li>
                                                        <img src="/assets/images/brand/bajaj_hi.png" alt="Logo Images" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/brand/hdfc_hi.png" alt="Logo Images" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/brand/mani_hi.png" alt="Logo Images" />
                                                    </li>
                                                </ul>
                                            </div>}

                                            {title === "Life Insurance" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">{title10}</h4>
                                                <ol className="liststyle">
                                                    <li><b>{title11} </b>{li7}</li>
                                                    <li><b>{title12} </b>{li8}</li>
                                                    <li><b>{title13} </b>{li9}</li>
                                                    <li><b>{title14} </b>{li4}</li>
                                                </ol>
                                                <h4 style={{ lineHeight: 1.2, textAlign: 'center' }} className="title">Our Partners</h4>
                                                <div style={{ textAlign: 'center' }}>
                                                    <ul className="brand-style-2">
                                                        <li>
                                                            <img src="/assets/images/brand/HDFC_Life_Logo.png.png" alt="Logo Images" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/brand/ICICI_Prudential.png.png" alt="Logo Images" />
                                                        </li>
                                                        <li>
                                                            <img src="/assets/images/brand/lic-logo.png" alt="Logo Images" />
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>}

                                            {title === "Corporate Fixed Deposit" && <div style={{ textAlign: 'center' }} className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">Our Partners</h4>
                                                <ul className="brand-style-2">
                                                    <li>
                                                        <img src="/assets/images/brand/bajaj_cf.jpg" alt="Logo Images" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/brand/hdfc_cf.jpg" alt="Logo Images" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/brand/sri_cf.jpg" alt="Logo Images" />
                                                    </li>
                                                    <li>
                                                        <img src="/assets/images/brand/mah_cf.jpg" alt="Logo Images" />
                                                    </li>
                                                </ul>
                                            </div>}

                                            {title === "Stock Broking" && <div className="details mt_md--30 mt_sm--30">
                                                <h4 style={{ lineHeight: 1.2 }} className="title">The following guidelines offered by us, ensures to take care of the risk factor
                                                    involved:</h4>
                                                <ol className="liststyle">
                                                    <li>It is always good to diversify across 10 to 20 major economic/industry sectors</li>
                                                    <li>Allocate equal amounts to each sector</li>
                                                    <li>Review portfolio at least once in three months, consult professionals for the
                                                        same</li>
                                                    <li>Identify your objectives in congruence to needs, life stages and resources</li>
                                                    <li>Stay abreast with company&#39;s performance by evaluating ROE (Return on
                                                        equity)</li>
                                                </ol>
                                                <div style={{textAlign: 'center', marginTop: '60px'}}>
                                                    <a href="https://angel-one.onelink.me/Wjgr/31yv7utm" target={"_blank"} className="btn btn-primary">
                                                        <span style={{color: 'white'}}>Open Demat Account In Just 5 minutes</span>
                                                    </a>
                                                </div>
                                            </div>}
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
export default ProductDetails;