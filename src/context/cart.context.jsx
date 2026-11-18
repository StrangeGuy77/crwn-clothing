import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
	isOpen: false,
	setIsOpen: () => null,

	items: [],
	addItem: () => {},
});

const addCartItem = (items, product) => {
	console.log(product);
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

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [itemsCount, setItemsCount] = useState(0);
	const [items, setItems] = useState([]);

	const addItem = (product) => setItems(addCartItem(items, product));

	useEffect(() => {
		const newCartItemsCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setItemsCount(newCartItemsCount);
	}, [items]);

	const value = { isCartOpen, items, itemsCount, setIsCartOpen, addItem };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
