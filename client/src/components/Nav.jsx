import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="bg-white flex items-center justify-between w-screen px-10 md:px-24 h-16 sticky">
			<div>
				<span className="text-2xl font-bold text-primary-300 ml-3 cursor-pointer">
					<Link to="/">TEKBEE</Link>
				</span>
			</div>
			<ul className="flex">
				<li>
					<button className="hover:text-primary-300 text-base font-bold">
						<Link to="/write">Write</Link>
					</button>
				</li>
				<li className="ml-5">
					<button className="hover:text-primary-300 text-base font-bold">
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
}
