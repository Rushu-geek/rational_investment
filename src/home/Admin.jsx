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
        showForms();
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

                    <div className="container">
                        <input type='file' multiple onChange={(e) => setImageUpload(e.target.files)} />
                        <button onClick={uploadFile}>Save</button>
                    </div>

                    <div className="container">
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

export default Admin