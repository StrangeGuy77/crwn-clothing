import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, clearCartItem, removeCartItem } from "./cart.utils";

export const addItem = (items, product) => {
	const newItems = addCartItem(items, product);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newItems);
};

export const removeItem = (items, product) => {
	const newItems = removeCartItem(items, product);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newItems);
};

export const clearItem = (items, product) => {
	const newItems = clearCartItem(items, product);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newItems);
};

export const toggleIsCartOpen = () =>
	createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN);
