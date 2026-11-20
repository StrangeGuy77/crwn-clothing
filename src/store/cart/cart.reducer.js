import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
	isCartOpen: false,
	items: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: !state.isCartOpen,
			};

		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				items: payload,
			};

		default:
			return state;
	}
};
