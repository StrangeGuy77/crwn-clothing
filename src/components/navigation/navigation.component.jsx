import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { signoutUser } from "../../utils/firebase/firebase.utils";

export const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const onLogout = async () => {
		await signoutUser();
		setCurrentUser(null);
	};

	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrwnLogo />
				</Link>
				<div className="nav-links-container">
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
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};
