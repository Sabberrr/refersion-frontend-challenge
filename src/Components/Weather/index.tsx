import React, { FC } from "react";
import Update from "./Update";
import { weatherPropTypes } from "./weatherTypes";
import "./Weather.css";
import { convertKelvinToTemps } from "../../util/Functions";
import { tempNames } from "../../util/Functions";
const Weather: FC<weatherPropTypes> = ({
	weatherData,
	weatherData: {
		name: cityName,
		weather,
		main: { temp, temp_min, temp_max },
	},

	onLocationSubmit,
	zipCode,
	onZipCodeHandleChange,
}) => {
	//converting kelvin to fahrenheit
	const tempConvertedObj: any = { avgtemp: 0, temp_min: 0, temp_max: 0 };
	[temp, temp_min, temp_max].forEach((val, index) => {
		tempConvertedObj[Object.keys(tempConvertedObj)[index]] = Math.round(
			convertKelvinToTemps(val, tempNames.FAHRENHEIT)
		);
	});
	return (
		<div className="weather">
			<div className="Title">
				<div id="city">{cityName}</div>
				<div id="weatherIcon">
					<img
						src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
					></img>
				</div>
			</div>
			<div id="description">{weather[0].description}</div>
			<div className="temp">{tempConvertedObj.avgtemp + "\u00B0"}</div>
			<div className="min-max-temp">
				<div id="temp-min">{tempConvertedObj.temp_min + "\u00B0"}</div>
				<div id="temp-max">{tempConvertedObj.temp_max + "\u00B0"}</div>
			</div>
			<hr id="divider"></hr>
			<Update
				onLocationSubmit={onLocationSubmit}
				zipCode={zipCode}
				onZipCodeHandleChange={onZipCodeHandleChange}
			></Update>
		</div>
	);
};

export default Weather;
