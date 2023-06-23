import React, { useEffect, useState } from 'react'
import DataService from '../dbService';
import PageHelmet from '../component/common/Helmet';
import HeaderFive from '../component/header/HeaderFive';
import Breadcrumb from '../elements/common/Breadcrumb';
import Modal from '../component/Modal';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import FooterTwo from '../component/footer/FooterTwo';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

function Admin() {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [imageUpload, setImageUpload] = useState();
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [showCategoryImage, setShowCategoryImage] = useState(false);
    const [activeCategory, setActiveCategory] = useState({});
    const [categoryImageUpload, setCategoryImageUpload] = useState();

    const showImages = async () => {

        const dbService = new DataService();

        const images = await dbService.getAllImages();

        console.log(images);

        let imageArray = [];

        images.forEach((doc) => {
            console.log(doc.data());
            let obj = {
                image: doc.data().url,
                bigImage: doc.data().url,
                imageId: doc.id
            }
            imageArray.push(obj);
        })

        setImages(imageArray);
    }

    useEffect(async () => {
        showImages();
        // showForms();
        showCategories();
    }, []);

    const uploadFile = () => {
        if (!imageUpload) {
            return;
        }

        const imagesArr = Object.values(imageUpload);
        console.log(Object.values(imageUpload));

        imagesArr.map((image) => {
            const imageRef = ref(storage, `/rationalImages/${image.name}`);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (url) => {
                    console.log(url);
                    const dbService = new DataService()
                    let image = { url }
                    const pushImage = await dbService.addImage(image);
                    console.log(pushImage);
                    showImages();
                })
            })
        })
        showImages();
    }

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

    const deleteImg = async (imgId) => {
        const dbService = new DataService();
        const images = await dbService.deleteImage(imgId);
        console.log(images);
        showImages();
        // alert(images)
    }

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

    const addNewCategory = async () => {

        const dbService = new DataService();
        let categoryData = { categoryName: category, images: [] };
        const pushCategory = await dbService.addImage(categoryData);
        showCategories();
    }

    const deleteCategory = async (categoryId) => {
        alert("Hi");
        const dbService = new DataService();
        const cat = await dbService.deleteImage(categoryId);
        console.log(cat);
        showCategories();
    }

    const showCategoryImages = (category) => {

        // alert(category.categoryName);
        setShowCategoryImage(true);
        setActiveCategory(category);
    }


    const addImagesinFirebase = (obj) => {
        console.log(obj)
        const dbService = new DataService();
        dbService.updateImage(obj.categoryId, obj);
        setActiveCategory(obj)
    }

    const addCategoryImage = async () => {
        alert(activeCategory.categoryId);
        if (!categoryImageUpload) {
            return;
        }

        const imagesArr = Object.values(categoryImageUpload);
        console.log(Object.values(categoryImageUpload));

        // let tmpCategoryImages = [];
        // tmpCategoryImages = activeCategory.images;

        let obj = {
            categoryId: activeCategory.categoryId,
            categoryName: activeCategory.categoryName,
            images: activeCategory.images
        }

        imagesArr.map((image) => {
            const imageRef = ref(storage, `/rationalImages/${image.name}`);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async (url) => {
                    console.log(url);
                    // tmpCategoryImages.push(url);
                    // dbService.updateImage()
                    // let image = { url }
                    // const pushImage = await dbService.addImage(image);
                    // console.log(pushImage);
                    // showImages();
                    // activeCategory.images = tmpCategoryImages;
                    obj.images.push(url);
                    // setActiveCategory(curr => ({ ...curr, images: [...curr.images, url] }));
                    setTimeout(addImagesinFirebase(obj), 15000);

                })
            })
        })
    }

    const deleteCategoryImg = async (imageIndex) => {
        let obj = {
            categoryId: activeCategory.categoryId,
            categoryName: activeCategory.categoryName,
            images: activeCategory.images
        }
        obj.images.splice(imageIndex, 1);
        console.log(obj)
        addImagesinFirebase(obj);
    }


    return (
        <div>

            <PageHelmet pageTitle='Image Gallery' />

            {/* Start Header Area  */}
            <HeaderFive headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Portfolio Area  */}
                <div className="rn-portfolio-area ptb--120 bg_color--1 line-separator">

                    {!showCategoryImage && (
                        <>
                            <div className="container">

                                <input placeholder='Add New Category' type='text' multiple onChange={(e) => setCategory(e.target.value)} />
                                <button onClick={addNewCategory}>Add Category</button>
                                <br />
                                <br />

                                <input type='file' multiple onChange={(e) => setImageUpload(e.target.files)} />
                                <button onClick={uploadFile}>Save</button>
                            </div>

                            <div className="container">
                                <div className="row creative-service">

                                    {/* Categories List */}
                                    <div className="row">
                                        <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                            {categories.map((category, index) => (
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
                                                    <button onClick={() => { deleteCategory(category.categoryId) }} className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12" key={index}>Delete Category </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                        {images.map((item, index) => (
                                            <div key={index} className="col-lg-3" style={{ padding: 0, margin: 0, borderRadius: 15 }}>
                                                <img
                                                    src={item.image}
                                                    alt={item.category}
                                                    height={'200px'}
                                                    onClick={() => handleClick(item, index)}
                                                />
                                                <button onClick={() => { deleteImg(item.imageId) }}>Delete</button>
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
                        </>
                    )}

                    {showCategoryImage && (
                        <div className="container">
                            <button className='m-5' onClick={() => { setShowCategoryImage(false) }}>Back</button>

                            {/* <input type='file' multiple onChange={(e) => setImageUpload(e.target.files)} /> */}

                            {/* <label  htmlFor="Add Image">Add Image</label> */}
                            <input type='file' multiple onChange={(e) => setCategoryImageUpload(e.target.files)} />

                            <br />

                            <button className='m-5' onClick={() => { addCategoryImage() }}>Add Image</button>
                            <br />
                            <h4>{activeCategory.categoryName}</h4>

                            <div className="row creative-service">

                                <div className="row">
                                    <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                        {activeCategory.images.map((item, index) => (
                                            <div key={index} className="col-lg-3" style={{ padding: 0, margin: 0, borderRadius: 15 }}>
                                                <img
                                                    src={item}
                                                    alt={activeCategory.categoryName}
                                                    height={'200px'}
                                                    onClick={() => handleClick(item, index)}
                                                />
                                                <button onClick={() => { deleteCategoryImg(index) }}>Delete</button>
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
                    )}
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
            <FooterTwo />
            {/* End Footer Area  */}
        </div>
    )

}

export default Admin;