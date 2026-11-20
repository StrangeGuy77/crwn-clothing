import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signoutUser } from "../../utils/firebase/firebase.utils";
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component";
import { CartIcon } from "../cart-icon/cart-icon.component";
import {
	LogoContainer,
	NavigationContainer,
	NavLink,
	NavLinks,
} from "./navigation.styles";

export const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const onLogout = async () => await signoutUser();

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer className="logo-container" to="/">
					<CrwnLogo />
				</LogoContainer>
				<NavLinks>
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>

					{currentUser ? (
						<button
							type="button"
							onClick={onLogout}
							style={{
								all: "unset",
								cursor: "pointer",
								padding: "10px 15px",
							}}
						>
							SIGN OUT
						</button>
					) : (
						<NavLink className="nav-link" to="/auth">
							SIGN IN
						</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};
