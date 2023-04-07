import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<>
			<div className="flex justify-center items-center h-screen w-screen font-body bg-primary-100">
				<div className="border-2 rounded-md shadow-sm px-12 pt-12 bg-white flex flex-col">
					<h1 className="mb-10 text-3xl font-semibold self-center text-primary-300">
						Register
					</h1>
					<form className="flex flex-col ">
						<label className="text-md" htmlFor="username">
							Username:
						</label>
						<input
							className="mb-4 mt-2 border rounded-sm h-8 w-64 px-1"
							type="text"
							name="username"
							id="username"
							required
						/>
						<label className="text-md" htmlFor="email">
							Email:
						</label>
						<input
							className="mb-4 mt-2 border rounded-sm h-8 w-64 px-1"
							type="email"
							name="email"
							id="email"
							required
						/>
						<label className="text-md" htmlFor="password">
							Password:
						</label>
						<input
							className="mb-4 mt-2 border rounded-sm h-8 w-64 px-1"
							type="password"
							name="password"
							id="password"
							required
						/>
						<button className="mt-4 py-1 w-24 text-white bg-primary-300 text-xl border border-primary-300 rounded-md self-center">
							Register
						</button>
						<p className="self-center mt-7 mb-7">
							Have an account already?{" "}
							<Link to="/login" className="cursor-pointer text-primary-300">
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
}
