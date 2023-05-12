import {db} from "./firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';


const imagesCollectionRef = collection(db, 'images');

class DataService {
    addImage = (image) => {
        return addDoc(imagesCollectionRef, image);
    }

    getAllImages = () => {
        return getDocs(imagesCollectionRef);
    }
}

export default DataService;