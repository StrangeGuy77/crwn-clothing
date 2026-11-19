import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => null,

	items: [],
	cartTotal: 0,
	addItem: () => {},
	removeItem: () => {},
	clearItem: () => {},
});

const CART_ACTION_TYPES = {
	TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
	SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
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
				...payload,
			};

		default:
			throw new Error(`Unhandled action type in cartReducer ${type}`);
	}
};

const INITIAL_STATE = {
	isCartOpen: false,
	items: [],
	itemsCount: 0,
	cartTotal: 0,
};

const addCartItem = (items, product) => {
	const itemExists = items.find(({ id }) => product.id === id);

	if (itemExists) {
		return items.map((item) => {
			if (item.id === product.id) {
				return {
					...item,
					quantity: item.quantity + 1,
				};
			}

			return item;
		});
	}

	return [...items, { ...product, quantity: 1 }];
};

const removeCartItem = (items, product) => {
	const item = items.find(({ id }) => product.id === id);

	if (item.quantity > 1) {
		return items.map((item) => {
			if (item.id === product.id) {
				return {
					...item,
					quantity: item.quantity - 1,
				};
			}

			return item;
		});
	}

	return items.filter((item) => item.id !== product.id);
};

const clearCartItem = (items, product) => {
	return items.filter((item) => item.id !== product.id);
};

export const CartProvider = ({ children }) => {
	const [{ items, isCartOpen, itemsCount, cartTotal }, dispatch] = useReducer(
		cartReducer,
		INITIAL_STATE,
	);

	const addItem = (product) => {
		const newItems = addCartItem(items, product);
		updateCartItemsReducer(newItems);
	};

	const removeItem = (product) => {
		const newItems = removeCartItem(items, product);
		updateCartItemsReducer(newItems);
	};

	const clearItem = (product) => {
		const newItems = clearCartItem(items, product);
		updateCartItemsReducer(newItems);
	};

	const updateCartItemsReducer = (newCartItems) => {
		const newCartItemsCount = newCartItems.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		const newCartTotal = newCartItems.reduce((total, item) => {
			return total + item.quantity * item.price;
		}, 0);

		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
				items: newCartItems,
				itemsCount: newCartItemsCount,
				cartTotal: newCartTotal,
			}),
		);
	};

	const setIsCartOpenReducer = () =>
		dispatch(createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN));

	const value = {
		isCartOpen: isCartOpen,
		items: items,
		itemsCount: itemsCount,
		cartTotal: cartTotal,
		setIsCartOpen: setIsCartOpenReducer,
		addItem,
		removeItem,
		clearItem,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
