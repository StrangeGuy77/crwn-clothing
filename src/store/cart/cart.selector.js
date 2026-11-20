import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.items,
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cartSlice) => cartSlice.isCartOpen,
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
	items.reduce((total, item) => {
		return total + item.quantity;
	}, 0),
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
	items.reduce((total, item) => {
		return total + item.quantity * item.price;
	}, 0),
);
