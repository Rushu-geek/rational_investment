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
        alert(item)
        setCurrentIndex(index);
        setClickedImg(item);
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

        if (!category) {
            return;
        }

        const dbService = new DataService();
        let categoryData = { categoryName: category, images: [] };
        const pushCategory = await dbService.addImage(categoryData);
        setCategory('')
        showCategories();
    }

    const deleteCategory = async (categoryId) => {
        const dbService = new DataService();
        const cat = await dbService.deleteImage(categoryId);
        console.log(cat);
        showCategories();
    }

    const showCategoryImages = (category) => {
        setShowCategoryImage(true);
        setActiveCategory(category);
    }


    const addImagesinFirebase = (obj) => {
        console.log(obj)
        const dbService = new DataService();
        dbService.updateImage(obj.categoryId, obj);
        setActiveCategory(obj);
        showCategories();
    }

    const addCategoryImage = async () => {
        if (!categoryImageUpload) {
            return;
        }

        const imagesArr = Object.values(categoryImageUpload);
        console.log(Object.values(categoryImageUpload));

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
                    obj.images.push(url);
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
                                <h2>Add Image Category</h2>
                                <input placeholder='Add New Category' value={category} type='text' multiple onChange={(e) => setCategory(e.target.value)} />
                                <button className='btn btn-primary mt-3' onClick={addNewCategory}>Add Category</button>
                                <br />
                                <br />
                            </div>
                            <div className="container">
                                <div className="row creative-service">

                                    {/* Categories List */}
                                    <div className="row">
                                        <h2 className='mt-3'>Categories</h2>
                                        <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                            {categories.map((category, index) => (

                                                category.categoryName && <>

                                                    <div className="" key={index}>

                                                        <div style={{ backgroundColor: 'ButtonShadow', borderRadius: 10, cursor: 'pointer' }} onClick={() => { showCategoryImages(category) }} className="text-center">
                                                            <div className="service service__style--2">
                                                                <div className="icon">
                                                                    {category.categoryName}
                                                                </div>
                                                                <div className="content">
                                                                    <h3 className="title">{"Category"}</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button onClick={() => { deleteCategory(category.categoryId) }} className="btn btn-primary mt-3" key={index}>Delete Category </button>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {showCategoryImage && (
                        <div className="container">
                            <button className='mb-3 btn btn-secondary' style={{ backgroundColor: 'black' }} onClick={() => { setShowCategoryImage(false) }}>{'<'}</button>
                            <input type='file' accept="image/png, image/jpg, image/jpeg" multiple onChange={(e) => setCategoryImageUpload(e.target.files)} />
                            <br />
                            <button className='mt-3 mb-3 btn btn-primary' onClick={() => { addCategoryImage() }}>Add Image</button>
                            <br />
                            <h2>{activeCategory.categoryName}</h2>
                            <div className="row creative-service">
                                <div className="row">
                                    <div className="wrapper" style={{ padding: 0, margin: 0, justifyContent: 'center', }}>
                                        {activeCategory.images.map((item, index) => (
                                            <div className="" key={index}>

                                                <div key={index} className="" style={{ padding: 0, margin: 0, borderRadius: 15, justifyContent: 'center' }}>
                                                    <img
                                                        src={item}
                                                        alt={activeCategory.categoryName}
                                                        height={'200px'}
                                                    />
                                                </div>
                                                <button className='btn btn-secondary mt-3' onClick={() => { deleteCategoryImg(index) }}>Delete</button>

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