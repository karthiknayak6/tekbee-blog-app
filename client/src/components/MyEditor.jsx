import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyEditor({ register, setValue, watch }) {
	const toolbarOptions = [
		["bold", "italic"],
		["link", "image"],
	];
	useEffect(() => {
		register("body", { required: true, minLength: 15 });
	}, [register]);
	const onEditorStateChange = (editorState) => {
		setValue("body", editorState);
	};
	const editorContent = watch("body");
	return (
		<>
			<p
				className="mb-2 mt-3 text-xl font-medium
				"
			>
				{" "}
				Start writing and make an impact:)
			</p>
			<ReactQuill
				theme="snow"
				value={editorContent}
				onChange={onEditorStateChange}
				modules={{
					toolbar: toolbarOptions,
				}}
			/>
		</>
	);
}

export default MyEditor;
