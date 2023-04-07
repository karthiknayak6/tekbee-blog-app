import React from "react";
import { v4 as uuidv4 } from "uuid";
import data_array from "../assets/data";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	const [currCategory, setCurrCategory] = React.useState("All");
	const handleCatClick = (category) => {
		setCurrCategory(category);
	};
	const handlePostClick = (PostId) => {
		navigate("/post/" + PostId);
	};
	const categories = [
		"All",
		"Web Development",
		"AI",
		"Blockchain",
		"Data Science",
		"Machine Learning",
		"Back-end",
		"Front-end",
		"More",
	];
	return (
		<div className=" w-101 px-3 lg:px-24 mt-20">
			<div className="bg-white rounded-md shadow-md mt-4 h-96 lg:h-96  mb-8 pt-5">
				<div className="h-96 flex flex-col sm:flex-row items-center justify-start">
					<img
						className="bg-gray-300 w-5/6 h-2/6 sm:w-2/5 sm:ml-14 sm:h-2/3 lg:w-96 mb-9 self-center rounded-md shadow-md"
						src="https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
					/>
					<div className="px-6 sm:px-4 sm:w-3/5 lg:pl-20 lg:pr-24">
						<h1 className="text-lg sm:text-3xl font-bold cursor-pointer hover:text-primary-300">
							Google BardAI takes off ChatGPT in Revenue
						</h1>
						<p className="text-sm mt-5">
							AI is the most profound technology we are working on today.
							Whether it’s helping ...
						</p>
						<div className=" relative self-left text-gray-600 font-bold mt-5 top-1">
							Posted by:{" "}
							<span className="cursor-pointer text-primary-300">Karthik</span>
						</div>

						<span className="hidden lg:block border-2 border-primary-300 text-primary-300 font-bold p-1 rounded-full px-3 absolute top-24 left-40 text-sm">
							Trending
						</span>
					</div>
				</div>
				<div className="lg:block hidden mb-6 mt-6">
					<ul className="flex justify-evenly text-lg">
						{categories.map((category) => {
							if (category === currCategory) {
								return (
									<li
										className="cursor-pointer hover:text-primary-300 border-b-4 border-primary-300"
										key={uuidv4()}
										onClick={() => handleCatClick(category)}
									>
										{category}
									</li>
								);
							}
							return (
								<li
									className="cursor-pointer hover:text-primary-300"
									key={uuidv4()}
									onClick={() => handleCatClick(category)}
								>
									{category}
								</li>
							);
						})}
					</ul>
				</div>
				{/* For boxes */}
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
					{data_array.map((data) => {
						return (
							<div className="h-98 lg:h-100 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-2 sm:h-96 mt-4">
								{/* Image card */}

								<img
									src={data.image}
									className="bg-gray-300 w-5/6 h-1/3 lg:h-56 rounded-md shadow-md object-cover max-h-fit"
								/>

								{/* For all text content */}
								<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
									<h1
										className="font-bold text-base sm:text-lg sm:items-center cursor-pointer hover:text-primary-300"
										onClick={() => handlePostClick(data.id)}
									>
										{window.innerWidth < 1000
											? data.title.slice(0, 54) + "..."
											: data.title.slice(0, 90)}
									</h1>
									<p className=" sm:block mt-3">
										{data.body.slice(0, 90) + "....."}
									</p>
									<span className="self-left text-gray-600 font-bold mt-5 relative top-3">
										Posted by:{" "}
										<span className="cursor-pointer text-primary-300">
											{data.author}
										</span>
									</span>
								</div>
							</div>
						);
					})}

					{/* -------------------------------------------------------------- */}

					{/* -------------------------------------------------------------- */}
				</div>
			</div>
		</div>
	);
}
