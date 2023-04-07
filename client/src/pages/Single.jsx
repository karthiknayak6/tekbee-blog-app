import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import data_array from "../assets/data";

export default function Single() {
	let { postId } = useParams();
	const data = data_array[postId - 1];
	console.log(postId);
	return (
		<div className="px-4 py-20 lg:px-56 lg:py-20 font-body flex items-center flex-col w-101">
			<h1 className="text-xl font-bold md:text-6xl mb-6">{data.title}</h1>
			<img
				src={data.image}
				alt="image"
				className="my-7 mb-14 rounded-md shadow-md"
			/>
			<p className="text-md md:text-xl text-slate-800 font-medium leading-10">
				{data.body}
			</p>
		</div>
	);
}
