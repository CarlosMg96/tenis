import { db } from "../utils/firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

  const pagosCollectionRef = collection(db, "socios");
  
  class PagosDataService {
        addPago = (newPago)=>{
            return addDoc(pagosCollectionRef, newPago);
        }
        
        updatePago = (id, updatedPago)=>{
            const pagoDoc = doc(db, "socios", id);
            return updateDoc(pagoDoc, updatedPago);
        }

        deletePago = (id)=>{
            const pagoDoc = doc(db, "socios", id);
            return deleteDoc(pagoDoc);
        }
        getAllPagos = () =>{
            return getDocs(pagosCollectionRef);
        }

        getPago = id =>{
            const pagoDoc = doc(db, "socios", id);
            return getDoc(pagoDoc);
        }
  }


  export default new PagosDataService();

