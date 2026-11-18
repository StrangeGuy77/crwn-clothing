import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => null,

	items: [],
	cartTotal: 0,
	addItem: () => {},
	removeItem: () => {},
	clearItem: () => {},
});

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
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [itemsCount, setItemsCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);
	const [items, setItems] = useState([]);

	const addItem = (product) => setItems(addCartItem(items, product));
	const removeItem = (product) => setItems(removeCartItem(items, product));
	const clearItem = (product) => setItems(clearCartItem(items, product));

	useEffect(() => {
		const newCartItemsCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setItemsCount(newCartItemsCount);
	}, [items]);

	useEffect(() => {
		const newCartTotal = items.reduce((total, item) => {
			return total + item.quantity * item.price;
		}, 0);

		setCartTotal(newCartTotal);
	}, [items]);

	const value = {
		isCartOpen,
		items,
		itemsCount,
		cartTotal,
		setIsCartOpen,
		addItem,
		removeItem,
		clearItem,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
