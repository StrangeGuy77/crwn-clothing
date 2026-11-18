import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsusbcribe = onAuthStateChangedListener(async (user) => {
			setCurrentUser(user);

			// Fetch function whenever an user comes through
			if (user) await createUserDocumentFromAuth(user);
		});

		return unsusbcribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
