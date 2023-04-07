import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
	const [currCategory, setCurrCategory] = React.useState("All");
	const handleCatClick = (category) => {
		setCurrCategory(category);
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
		<div className=" w-screen px-10 md:px-24 relative">
			<div className="bg-white rounded-md shadow-md mt-4 h-96 mb-8 pt-5">
				<div className="h-96 flex flex-col sm:flex-row items-center justify-start">
					<img
						className="bg-gray-300 w-5/6 h-2/5 sm:w-2/5 sm:ml-14 sm:h-2/3 lg:w-96 mb-9 self-center rounded-md shadow-md"
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
						<div className="self-left text-gray-600 font-bold mt-5">
							Posted by:{" "}
							<span className="cursor-pointer text-primary-300">Karthik</span>
						</div>
					</div>
				</div>
				<div className="lg:block hidden">
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
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 ">
					{/*For single box*/}
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center cursor-pointer hover:text-primary-300">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					{/* -------------------------------------------------------------- */}
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdvb2dsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1628320281190-89b24da58b0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdvb2dsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it then you will realize
								the think you will know.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>
					<div className="h-96 rounded-md shadow-md bg-white w-full flex flex-col justify-center items-center sm:pt-4 sm:h-96 mt-4">
						{/* Image card */}

						<img
							src="https://images.unsplash.com/photo-1680849488349-21138e052432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
							className="bg-gray-300 w-5/6 h-1/2 rounded-md shadow-md object-cover max-h-fit"
						/>

						{/* For all text content */}
						<div className="my-6 mx-2 flex flex-col px-3 md:mx-9">
							<h1 className="font-bold text-base sm:text-lg sm:items-center">
								Svelte kit is awesome, you have to try it.
							</h1>
							<p className="hidden sm:block">
								Svelte team has recently released svelte kit for server side
								rendering, the performance...
							</p>
							<span className="self-left text-gray-600 font-bold mt-5">
								Posted by:{" "}
								<span className="cursor-pointer text-primary-300">Karthik</span>
							</span>
						</div>
					</div>

					{/* -------------------------------------------------------------- */}
				</div>
			</div>
		</div>
	);
}
