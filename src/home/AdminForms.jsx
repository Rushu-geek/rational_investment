import React, { useEffect, useState } from 'react'
import DataService from '../dbService';
import PageHelmet from '../component/common/Helmet';
import HeaderFive from '../component/header/HeaderFive';
import Modal from '../component/Modal';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import FooterTwo from '../component/footer/FooterTwo';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';



const AdminForms = () => {

    const [formData, setFormData] = useState([]);
    const [formLinkArr, setFormLinkArr] = useState([]);
    const [newFormData, setNewFormData] = useState({
        id: "",
        companyName: "",
        formTitle1: "",
        formTitle2: "",
        formTitle3: ""
    })
    useEffect(() => {
        showForms();
    }, [])

    const handleFormChanges = (e) => {
        const { name, value } = e.target
        setNewFormData((curr) => {
            return {
                ...curr,
                [name]: value
            }
        })
    }

    const showForms = async () => {

        const dbService = new DataService();
        const forms = await dbService.getAllForms();

        let formsArray = [];

        forms.forEach((doc) => {
            let obj = {
                id: doc.id,
                companyName: doc.data().companyName,
                forms: doc.data().forms
            }
            formsArray.push(obj);
        })
        console.log(formsArray);
        setFormData(formsArray);
    }

    const getFormLink = (file) => {

        if (!file) {
            return;
        }

        const formRef = ref(storage, `/rationalForms/${file.name}`);
        uploadBytes(formRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                console.log(url);
                setFormLinkArr((curr) => [...curr, url])
            })
        })
    }

    const addNewForm = async (e) => {
        e.preventDefault();

        let tmpFormLinksArr = [];

        formLinkArr.map((link, index) => {
            if (index + 1 == 1) {
                let formObj = {
                    link: link,
                    title: newFormData.formTitle1
                }
                tmpFormLinksArr.push(formObj);
            }
            if (index + 1 == 2) {
                let formObj = {
                    link: link,
                    title: newFormData.formTitle2
                }
                tmpFormLinksArr.push(formObj);
            }
            if (index + 1 == 3) {
                let formObj = {
                    link: link,
                    title: newFormData.formTitle3
                }
                tmpFormLinksArr.push(formObj);
            }
        })

        let formDataObj = {
            companyName: newFormData.companyName,
            forms: tmpFormLinksArr
        }
        console.log(formDataObj)

        const dbService = new DataService();

        if (newFormData.id) {
            console.log(newFormData.id)
            console.log(formDataObj)
            const form = await dbService.updateForm(newFormData.id, formDataObj);
            console.log(form);
        } else {
            const pushfORM = await dbService.addForm(formDataObj);
            console.log(pushfORM);
        }
        showForms();

        setNewFormData({
            id: '',
            companyName: '',
            formTitle1: '',
            formTitle2: '',
            formTitle3: ''
        })
    }

    const updateForm = (form) => {

        setNewFormData({
            id: '',
            companyName: '',
            formTitle1: '',
            formTitle2: '',
            formTitle3: ''
        })

        setNewFormData({
            id: form.id,
            companyName: form.companyName,
            formTitle1: form?.forms[0]?.title,
            formTitle2: form?.forms[1]?.title,
            formTitle3: form?.forms[2]?.title
        })
        let tmpFormLinks = [];
       
        tmpFormLinks.push(form?.forms[0]?.link);
        tmpFormLinks.push(form?.forms[1]?.link);
        tmpFormLinks.push(form?.forms[2]?.link);

        setFormLinkArr(tmpFormLinks);
    }


    return (
        <>
            <PageHelmet pageTitle='Image Gallery' />

            {/* Start Header Area  */}
            <HeaderFive headerPosition="header--static logoresize" logo="all-dark" color="color-black" />
            {/* End Header Area  */}

            {/* Start Page Wrapper  */}
            <main className="page-wrapper">

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row creative-service">
                            {formData.map((val, i) => (
                                <div onClick={() => { updateForm(val) }} className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="text-center">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.companyName}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{"Forms"}</h3>
                                                {val.forms.map((form) => {
                                                    return (
                                                        <a style={{ "color": "#1F1F25", }} href={form.link}>{form.title} </a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="contact-form--1">
                    <div className="container">
                        <div className="row row--35 align-items-start">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="section-title text-left mb--50">
                                    <h3 className="title">Add a new Form</h3>
                                </div>
                                <div className="form-wrapper">
                                    <form>
                                        <label htmlFor="item01">
                                            <input
                                                type="text"
                                                required
                                                name="companyName"
                                                id="item01"
                                                value={newFormData.companyName}
                                                onChange={handleFormChanges}
                                                placeholder="Company Name"
                                            />
                                        </label>

                                        <label htmlFor="item02">
                                            <input
                                                type="text"
                                                required
                                                name="formTitle1"
                                                id="item02"
                                                value={newFormData.formTitle1}
                                                onChange={handleFormChanges}
                                                placeholder="Form 1 Title"
                                            />

                                            <input
                                                type="file"
                                                required
                                                accept='application/pdf'
                                                name="form1"
                                                onChange={(e) => { getFormLink(e.target.files[0]) }}
                                            />
                                        </label>

                                        <label htmlFor="item03">
                                            <input
                                                type="text"
                                                name="formTitle2"
                                                id="item03"
                                                value={newFormData.formTitle2}
                                                onChange={handleFormChanges}
                                                placeholder="Form 2 Title"
                                            />
                                            <input
                                                type="file"
                                                name="form2"
                                                onChange={(e) => { getFormLink(e.target.files[0]) }}
                                            />
                                        </label>

                                        <label htmlFor="item04">
                                            <input
                                                type="text"
                                                name="formTitle3"
                                                id="item04"
                                                value={newFormData.formTitle3}
                                                onChange={handleFormChanges}
                                                placeholder="Form 3 Title"
                                            />
                                            <input
                                                type="file"
                                                name="form3"
                                                onChange={(e) => { getFormLink(e.target.files[0]) }}
                                            />
                                        </label>

                                        <button type='submit' className="rn-button-style--2 btn-solid" onClick={addNewForm}>Add Form</button>
                                    </form>
                                </div>
                            </div>
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

        </>
    )
}

export default AdminForms