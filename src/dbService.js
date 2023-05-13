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
}

export default DataService;