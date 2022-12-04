import React, { Component } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";
import { useState } from 'react';
import Modal from '../component/Modal';


const TabOne = [
    {
        image: 'https://rationalinvestments.in/assets/images/portfolio/dp-portfolio-01.jpg',
        bigImage: 'https://rationalinvestments.in/assets/images/portfolio/dp-portfolio-01.jpg',
        category: 'Web Design',
        title: 'Design is a creative part'
    },
    {
        image: 'https://rationalinvestments.in/assets/images/portfolio/dp-portfolio-02.jpg',
        bigImage: 'https://rationalinvestments.in/assets/images/portfolio/dp-portfolio-02.jpg',
        category: 'Mobile App',
        title: 'The service provide for designer'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-03.jpg',
        category: 'Web Design',
        title: 'Mobile App landing Design'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-04.jpg',
        category: 'Mobile App',
        title: 'Logo Design creativity'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-05.jpg',
        category: 'Web Design',
        title: 'T-shirt design is the part of design'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-07.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-08.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-09.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-10.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-10.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-11.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-11.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-12.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-12.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-13.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-13.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
    {
        image: '/assets/images/portfolio/big/dp-big--portfolio-14.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-14.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },

    {
        image: '/assets/images/portfolio/big/dp-small--portfolio-15.jpg',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-15.jpg',
        category: 'Logo Design',
        title: 'Getting tickets to the big show'
    },
]

function Gallery() {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.bigImage);
    };

    const handelRotationRight = () => {
        const totalLength = TabOne.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = TabOne[0].bigImage;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = TabOne.filter((item) => {
            return TabOne.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].bigImage;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = TabOne.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = TabOne[totalLength - 1].bigImage;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = TabOne.filter((item) => {
            return TabOne.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].bigImage;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <div>

            <PageHelmet pageTitle='Gallery' />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Gallery'} />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">
                    <div className="container">
                        <div className="row">
                            <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                {TabOne.map((item, index) => (
                                    <div key={index} className="col-lg-3" style={{ padding: 0, margin: 0, borderRadius: 15 }}>
                                        <img
                                            src={item.image}
                                            alt={item.category}
                                            height={'200px'}
                                            onClick={() => handleClick(item, index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            {clickedImg && (
                                <Modal
                                    clickedImg={clickedImg}
                                    handelRotationRight={handelRotationRight}
                                    setClickedImg={setClickedImg}
                                    handelRotationLeft={handelRotationLeft}
                                />
                            )}
                        </div>
                    </div>
                </div>

            </main>
            {/* End Page Wrapper  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            {/* Start Footer Area  */}
            <Footer />
            {/* End Footer Area  */}
        </div>
    )
}


export default Gallery;