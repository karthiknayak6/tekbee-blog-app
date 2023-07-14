import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import MyEditor from "./MyEditor";
import { useState } from "react";

export const Form = () => {
	const schema = yup.object().shape({
		title: yup.string().required(),
		tags: yup.array().of(yup.string()).required(),
		body: yup.string().required(),
	});
	const { register, handleSubmit, setValue, watch } = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="font-body items-center ml-10 mt-10"
		>
			<p className="mb-1 mt-3 text-xl font-medium">
				Enter the title of your article.
			</p>
			<input
				className="mb-6 mt-2 border rounded-sm h-8 w-64 "
				type="text"
				placeholder="Enter Title"
				{...register("title")}
			/>
			<br />
			<p className="mb-3 mt-3 text-xl font-medium">Select relevant tags.</p>
			<div className="text-lg">
				<input
					className="mr-2 w-4 h-4"
					type="checkbox"
					id="backend"
					value="backend"
					{...register("tags")}
				/>
				<label htmlFor="backend">Backend</label>
				<br />
				<input
					className="mr-2 w-4 h-4"
					type="checkbox"
					id="frontend"
					value="frontend"
					{...register("tags")}
				/>
				<label htmlFor="frontend">Frontend</label>
				<br />
				<input
					className="mr-2 w-4 h-4"
					type="checkbox"
					id="ai"
					value="ai"
					{...register("tags")}
				/>
				<label htmlFor="ai	">AI</label>
				<br />
				<input
					className="mr-2 w-4 h-4"
					type="checkbox"
					id="web"
					value="web"
					{...register("tags")}
				/>
				<label htmlFor="web">Web Development</label>
				<br />
				<input
					className="mr-2 w-4 h-4"
					type="checkbox"
					id="data science"
					value="data science"
					{...register("tags")}
				/>
				<label htmlFor="data science">Data Science</label>
			</div>
			<br />
			<MyEditor register={register} setValue={setValue} watch={watch} />
			<input type="file" />
			<button
				type="submit"
				className="mt-4 py-1 w-24 text-white bg-primary-300 text-lg border border-primary-300 rounded-md self-center hover:text-primary-300 hover:bg-white hover:shadow-sm font-bold "
			>
				Submit
			</button>
		</form>
	);
};
export default Form;
