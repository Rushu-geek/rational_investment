import React, { useEffect, useState } from 'react'
import DataService from '../dbService';
import PageHelmet from '../component/common/Helmet';
import HeaderFive from '../component/header/HeaderFive';
import Breadcrumb from '../elements/common/Breadcrumb';
import Modal from '../component/Modal';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import FooterTwo from '../component/footer/FooterTwo';

function Admin() {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [imageUpload, setImageUpload] = useState();
    const [images, setImages] = useState([]);


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

        setImages(imageArray)
    }, []);

    const uploadFile = () => {
        if (!imageUpload) {
            return;
        }
        const imageRef = ref(storage, `/rationalImages/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async(url) => {
                console.log(url);
                // store url in firebase collection

                const dbService = new DataService()
                let image = { url }

                const pushImage = await dbService.addImage(image);

                console.log(pushImage);
            })
        })
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

    return(
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
                    <input type='file' onChange={(e) => setImageUpload(e.target.files[0])} />
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