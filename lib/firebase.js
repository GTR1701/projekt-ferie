import { initializeApp, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBw5b9RMK9lfrHVkvmqBDWFp6X2g99UopM",
    authDomain: "projekt-ferie-7a09e.firebaseapp.com",
    projectId: "projekt-ferie-7a09e",
    storageBucket: "projekt-ferie-7a09e.appspot.com",
    messagingSenderId: "47284814345",
    appId: "1:47284814345:web:4f2db52095c394bcda6ed8",
    measurementId: "G-QN8GWZJ52M"
};

function createFirebaseApp(config) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore(firebaseApp);
export async function getUserWithUsername(username) {

    const q = query(
        collection(firestore, 'users'),
        where('username', '==', username),
        limit(1)
    )
    const userDoc = (await getDocs(q)).docs[0];
    return userDoc;
}

export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        dataPrzyjazdu: data?.dataPrzyjazdu.toMillis() || 0,
        dataWyjazdu: data?.dataWyjazdu.toMillis() || 0,
    };
}