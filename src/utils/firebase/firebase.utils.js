import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	const userDoc = await getDoc(userDocRef);

	if (userDoc.exists()) {
		return userDoc.data;
	}

	const { displayName, email } = userAuth;
	const createdAt = new Date();

	await new Promise((resolve) => {
		resolve(
			setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			}),
		);
	}).catch((err) => console.error(err));
};

export const createAuthUserWithUserAndPassword = async (
	displayName,
	email,
	password,
) => {
	if (!email || !password || !displayName) return;

	const response = await createUserWithEmailAndPassword(
		auth,
		email,
		password,
	).catch((error) => {
		if (error.code === "auth/email-already-in-use") {
			alert("Email already in use");
		}
	});

	if (response) {
		createUserDocumentFromAuth({ ...response.user, displayName });
	}
};

export const signInAuthWithUserAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
