import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
	const navigate = useNavigate();
	const handleLogOut = () => {
		fetch("http://localhost:5000/logout", {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				console.log(resp);
				navigate("/login");
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<nav className="bg-white flex items-center justify-between w-screen px-10 md:px-24 h-16 fixed top-0">
			<div>
				<span className="text-base font-bold text-primary-300 ml-3 cursor-pointer md:text-2xl">
					<Link to="/">TEKBEE</Link>
				</span>
			</div>
			<ul className="flex text-sm font-bold md:text-base">
				<li>
					<button className="hover:text-primary-300 ">
						<Link to="/write">Write</Link>
					</button>
				</li>
				<li className="ml-5">
					<button className="hover:text-primary-300 " onClick={handleLogOut}>
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
}
