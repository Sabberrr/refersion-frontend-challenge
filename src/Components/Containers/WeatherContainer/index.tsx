import React, { FC, useState, useEffect } from "react";
import Weather from "../../Weather";
import { weatherQueryBuilder } from "../../../api/query";
import { useFetch } from "../../../util/custom hooks";
import { getGoogleMapLocation } from "../../../util/userFunctions";
import "./weatherContainer.css";
const WeatherContainer: FC = () => {
	const { data: weatherData, loading, error, sendQuery } = useFetch();
	const [getZipCode, setZipCode] = useState<number>(0);
	const onLocationSubmit = () => {
		const url: string = weatherQueryBuilder(getZipCode);
		sendQuery(url);
	};
	const onZipCodeHandleChange = (event: any) => {
		const checkNumberReg = /^[0-9\b]+$/;
		if (event.target.value === "" || checkNumberReg.test(event.target.value)) {
			setZipCode(event.target.value);
		}
	};
	useEffect(() => {
		if (navigator.geolocation) {
			//find Location through google maps geocoder api
			navigator.geolocation.getCurrentPosition(async (position) => {
				let latitude = position.coords.latitude;
				let longitude = position.coords.longitude;
				try {
					const location = await getGoogleMapLocation(latitude, longitude);
					const localZipCode =
						location.results[0].address_components[7].long_name;

					const url = weatherQueryBuilder(localZipCode);
					sendQuery(url);
				} catch {
					console.log("error");
				}
			});
		} else {
			setZipCode(90006);
			alert("location not supported");
		}
	}, []);

	useEffect(() => {
		if (weatherData.cod === "404") {
			alert("city not found");
			const url: string = weatherQueryBuilder();
			sendQuery(url);
		}
	}, [weatherData]);

	return !loading ? (
		<div className="weatherContainer">
			<Weather
				weatherData={weatherData}
				onLocationSubmit={onLocationSubmit}
				zipCode={getZipCode}
				onZipCodeHandleChange={onZipCodeHandleChange}
			></Weather>
		</div>
	) : (
		<div>loading</div>
	);
};

export default WeatherContainer;
