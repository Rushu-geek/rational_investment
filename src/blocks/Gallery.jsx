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

function Gallery() {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [imageUpload, setImageUpload] = useState();
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showCategoryImage, setShowCategoryImage] = useState(false);
    const [activeCategory, setActiveCategory] = useState({});
    // const [TabOne, setTabOne] = useState([]);

    let TabOne = [];


    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item);
    };

    const handelRotationRight = () => {

        TabOne = activeCategory.images;
        const totalLength = TabOne.length;

        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = TabOne[0];
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        // alert("new Index"+ newIndex)
        const newUrl = TabOne.filter((item) => {
            return TabOne.indexOf(item) === newIndex;
        });
        // alert("new Url"+newUrl)
        const newItem = newUrl;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        TabOne = activeCategory.images;
        const totalLength = TabOne.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = TabOne[totalLength - 1];
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = TabOne.filter((item) => {
            return TabOne.indexOf(item) === newIndex;
        });
        const newItem = newUrl;
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
        TabOne = category.images;
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
                                        {!showCategoryImage ? <h1>Categories</h1> : <h1>Images</h1>}
                                        <div className="wrapper">
                                            {!showCategoryImage && <>
                                                <div className="row">
                                                    <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                                        {categories.map((category, index) => (
                                                            <>
                                                                {category.categoryName && <>
                                                                    <div className="" key={index}>
                                                                        <div style={{ width: '', cursor: 'pointer', backgroundColor: 'ButtonShadow', borderRadius: 20 }} onClick={() => { showCategoryImages(category) }} className="text-center">
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
                                                    </div>
                                                </div>
                                            </>}
                                            {showCategoryImage && <>
                                                <div className="">
                                                    <button className='btn btn-secondary' style={{ backgroundColor: 'black', borderRadius: 10 }} onClick={() => { setShowCategoryImage(false) }}> {'<'} </button>
                                                    <div className="row">
                                                        <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                                            {activeCategory.images.map((item, index) => (

                                                                <div key={index} className="" style={{ padding: 0, margin: 0, borderRadius: 15 }}>
                                                                    <h2>{activeCategory.categoryName}</h2>

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