import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

const { createContext, useEffect, useReducer } = require("react");

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

const USER_ACTION_TYPES = {
	SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload,
			};

		default:
			throw new Error(`Unhandled action on userReducer ${type}`);
	}
};

const INITIAL_STATE = {
	currentUser: null,
};

export const UserProvider = ({ children }) => {
	const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const setCurrentUser = (user) =>
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

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
