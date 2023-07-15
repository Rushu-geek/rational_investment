import { db } from "./firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';


const imagesCollectionRef = collection(db, 'images');
const formsCollectionRef = collection(db, 'forms');

class DataService {
    addImage = (image) => {
        return addDoc(imagesCollectionRef, image);
    }

    getAllImages = () => {
        return getDocs(imagesCollectionRef);
    }

    updateImage = (imgId, updatedImage) => {
        const image = doc(db, 'images', imgId);
        return updateDoc(image, updatedImage);
    }

    deleteImage = (imageId) => {
        const image = doc(db, 'images', imageId);
        return deleteDoc(image);
    }
    
    getAllForms = () => {
        return getDocs(formsCollectionRef);
    }

    addForm = (formObj) => {
        return addDoc(formsCollectionRef, formObj);
    }

    updateForm = (formId, updatedForm) => {
        const form = doc(db, 'forms', formId);
        return updateDoc(form, updatedForm);
    }
}

export default DataService;