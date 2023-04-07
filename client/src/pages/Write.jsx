import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Write() {
	const [value, setValue] = useState("");
	console.log(value);
	return (
		<>
			<div className="flex flex-col">
				<div className="mt-8 w-screen flex flex-col items-center">
					<div className="w-4/5">
						<label htmlFor="title" className="text-xl self-start">
							Title:
						</label>
						<input
							className="rounded-md h-10 shadow-sm border mt-2 w-full"
							type="text"
							id="title"
						/>
					</div>
				</div>
				<div></div>
				<div className="flex mt-8 w-screen items-center h-screen flex-col">
					<div className="w-4/5">
						<p className="text-xl self-start mb-2">Body:</p>
						<ReactQuill theme="snow" value={value} onChange={setValue} />
					</div>
					<div>
						<button className="mt-8 py-1 w-24 text-white bg-primary-300 text-xl border border-primary-300 rounded-md self-center">
							Post
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
