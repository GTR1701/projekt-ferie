import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
// Firestore exports
export const firestore = getFirestore(firebaseApp);
// export const firestore = firebase.firestore();
// export { firestore };
// export const serverTimestamp = serverTimestamp;
// export const fromMillis = fromMillis;
// export const increment = increment;

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

/// Helper functions


/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
    // const usersRef = collection(firestore, 'users');
    // const query = usersRef.where('username', '==', username).limit(1);

    const q = query(
        collection(firestore, 'users'),
        where('username', '==', username),
        limit(1)
    )
    const userDoc = (await getDocs(q)).docs[0];
    return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        createdAt: data?.createdAt.toMillis() || 0,
        updatedAt: data?.updatedAt.toMillis() || 0,
    };
}