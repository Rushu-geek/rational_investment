import React, { Component, useEffect } from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFive";
import Footer from "../component/footer/FooterTwo";
import { useState } from 'react';
import Modal from '../component/Modal';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import DataService from '../dbService';


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
    const [imageUpload, setImageUpload] = useState();
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showCategoryImage, setShowCategoryImage] = useState(false);
    const [activeCategory, setActiveCategory] = useState({});

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

    const scroll = () => {
        window.scrollTo(0, 700)
    }

    const uploadFile = () => {
        if (!imageUpload) {
            return;
        }
        const imageRef = ref(storage, `/rationalImages/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                console.log(url);
                // store url in firebase collection

                const dbService = new DataService()
                let image = { url }

                const pushImage = await dbService.addImage(image);

                console.log(pushImage);
            })
        })
    }

    useEffect(async () => {
        const dbService = new DataService();

        const images = await dbService.getAllImages();

        console.log(images);

        let imageArray = [];

        images.forEach((doc) => {
            console.log(doc.data());
            let obj = {
                image: doc.data().url,
                bigImage: doc.data().url
            }
            imageArray.push(obj);
        })

        setImages(imageArray);

        showCategories();

    }, []);

    const showCategories = async () => {

        const dbService = new DataService();

        const categories = await dbService.getAllImages();

        console.log(categories);

        let categoriesArray = [];

        categories.forEach((doc) => {
            console.log(doc.data());
            let obj = {
                categoryName: doc.data().categoryName,
                images: doc.data().images,
                categoryId: doc.id
            }
            categoriesArray.push(obj);
        })
        setCategories(categoriesArray);
    }

    const showCategoryImages = (category) => {

        setShowCategoryImage(true);
        setActiveCategory(category);
    }

    return (
        <div>

            <PageHelmet pageTitle='Image Gallery' />

            {/* Start Header Area  */}
            <Header headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Image Gallery'} onClick={() => scroll()} bgImage="bg_image--47" />
            {/* End Breadcrump Area */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">

                    <div className="container">
                        <div className="row">
                            <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>

                                <div className="row creative-service">

                                    {/* Categories List */}
                                    <div className="row">
                                        <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                            {!showCategoryImage && <>
                                                {categories.map((category, index) => (
                                                    <>

                                                        {category.categoryName && <>
                                                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12" key={index}>

                                                                <div onClick={() => { showCategoryImages(category) }} className="text-center">
                                                                    <div className="service service__style--2">
                                                                        <div className="icon">
                                                                            {category.categoryName}
                                                                        </div>
                                                                        <div className="content">
                                                                            <h3 className="title">{"Category"}</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>}

                                                    </>
                                                ))}
                                            </>}

                                            {showCategoryImage && <>
                                                <div className="container">
                                                    <button className='m-5' onClick={() => { setShowCategoryImage(false) }}>Back</button>

                                                    <div className="row">
                                                        <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                                            {activeCategory.images.map((item, index) => (
                                                                <div key={index} className="col-lg-4" style={{ padding: 0, margin: 0, borderRadius: 15 }}>
                                                                    <img
                                                                        src={item}
                                                                        alt={activeCategory.categoryName}
                                                                        height={'200px'}
                                                                        onClick={() => handleClick(item, index)}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                            </>}
                                        </div>
                                    </div>
                                </div>



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