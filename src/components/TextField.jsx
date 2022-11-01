import React from "react";
import "../styles/TextField.scss";
const TextField = ({ textFieldType = "input__outline", name, type, id }) => {
	return (
		<>
			<div className={textFieldType}>
				<input type={type} name={name} id={id} required placeholder=" " />
				{textFieldType === "input__outline" && <div className="underline" />}
				<label htmlFor={id}>{name}</label>
			</div>
		</>
	);
};

export default TextField;
