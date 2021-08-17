import React, { FC } from "react";
import { updatePropTypes } from "./weatherTypes";
import "./update.css";
const Update: FC<updatePropTypes> = ({
	onLocationSubmit,
	zipCode,
	onZipCodeHandleChange,
}) => {
	return (
		<form className="updateForm" onSubmit={onLocationSubmit}>
			<div id="zipCodeTitle">Zip Code:</div>
			<div>
				<input
					id="zipCodeInput"
					value={zipCode === 0 ? undefined : zipCode}
					onChange={onZipCodeHandleChange}
				></input>
				<button id="updateButton">Update</button>
			</div>
		</form>
	);
};

export default Update;
