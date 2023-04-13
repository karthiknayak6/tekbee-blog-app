import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";
export default function Write() {
	const [value, setValue] = useState("");
	const [title, setTitle] = useState({ title: "" });
	const [tags, setTags] = useState([]);
	console.log(value);
	const categories = [
		"Web Development",
		"AI",
		"Blockchain",
		"Data Science",
		"Machine Learning",
		"Back-end",
		"Front-end",
	];
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleChange = (e) => {
		setTitle({ title: e.target.value });
		console.log("HC title: ", title);
	};

	const handleTags = (e) => {
		const { value, checked } = e.target;

		console.log(`${value} is ${checked}`);

		// Case 1 : The user checks the box
		if (checked) {
			console.log(e.target.checked);
			setTags([...tags, value]);
		}

		// Case 2  : The user unchecks the box
		else {
			setTags(tags.filter((tag) => tag !== value));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("--------------------------------------------------------");
		console.log(tags);
		console.log(title);
		console.log(value);
		console.log("--------------------------------------------------------");
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col mt-20">
				<div className="mt-8 w-screen flex flex-col items-center">
					<div className="w-4/5">
						<label htmlFor="title" className="text-xl self-start">
							Title:
						</label>
						<input
							className="rounded-md h-10 shadow-sm border mt-2 w-full"
							type="text"
							id="title"
							name="title"
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="mt-8 w-screen flex flex-col items-center">
					<div className="w-4/5">
						<p className="mb-3 text-xl self-start">Select appropriate tags:</p>
						<ul className="text-base">
							{categories.map((category) => {
								return (
									<li key={uuidv4()}>
										<input
											type="checkbox"
											id={category}
											name={category}
											value={category}
											checked={tags.find((tag) => tag === category)}
											onChange={handleTags}
										/>
										<label className="ml-2 cursor-pointer" htmlFor={category}>
											{category}
										</label>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="mt-8 w-screen flex flex-col items-center">
					<div className="w-4/5">
						<label htmlFor="file" className="text-xl self-start">
							Select Images:
						</label>
						<input
							className="rounded-md h-8 shadow-sm border mt-2 w-full"
							type="file"
							id="file"
						/>
					</div>
				</div>
				<div
					className="flex mt-8 w-screen items-center h-screen flex-col"
					id="editor"
				>
					<div className="w-4/5">
						<p className="text-xl self-start mb-2">Body:</p>
						<ReactQuill theme="snow" value={value} onChange={setValue} />
					</div>
					<div>
						<button className="hover:bg-white hover:text-primary-300 mt-8 py-1 w-24 text-white bg-primary-300 text-xl border border-primary-300 rounded-md self-center">
							Post
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
