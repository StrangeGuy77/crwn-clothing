export const addCartItem = (items, product) => {
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

export const removeCartItem = (items, product) => {
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

export const clearCartItem = (items, product) => {
	return items.filter((item) => item.id !== product.id);
};
