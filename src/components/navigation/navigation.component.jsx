import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
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
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

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
