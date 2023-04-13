import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const [thisUser, setThisUser] = useState({});

	const handleInputChange = (e) => {
		console.log(e);
		setThisUser({ ...thisUser, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const username = thisUser.username;
		const password = thisUser.password;

		fetch("http://localhost:5000/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		})
			.then((response) => {
				console.log(response);
				if (response.status == 200) {
					navigate("/");
				} else {
					console.log("User Not Found");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<div className="flex justify-center items-center h-screen w-screen font-body bg-primary-100">
				<div className="border-2 rounded-md shadow-sm px-12 pt-12 bg-white flex flex-col">
					<h1 className="mb-10 text-3xl font-semibold self-center text-primary-300">
						Login
					</h1>
					<form onSubmit={handleSubmit} className="flex flex-col ">
						<label className="text-md" htmlFor="username">
							Username:
						</label>
						<input
							className="mb-4 mt-2 border rounded-sm h-8 w-64"
							type="text"
							name="username"
							id="username"
							onChange={handleInputChange}
							required
						/>
						<label className="text-md" htmlFor="password">
							Password:
						</label>
						<input
							className="mb-4 mt-2 border rounded-sm h-8 w-64"
							type="password"
							name="password"
							id="password"
							onChange={handleInputChange}
							required
						/>
						<button className="mt-4 py-1 w-24 text-white bg-primary-300 text-lg border border-primary-300 rounded-md self-center hover:text-primary-300 hover:bg-white hover:shadow-sm font-bold ">
							Login
						</button>
						<p className="self-center mt-7 mb-7">
							Don't have an account?{" "}
							<Link
								to="/register"
								className="cursor-pointer text-primary-300 font-bold"
							>
								Register
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
}
