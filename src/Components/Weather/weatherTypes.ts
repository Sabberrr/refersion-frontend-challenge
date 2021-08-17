import { weatherDataType } from "../../api/queryTypes";
export interface weatherPropTypes {
	weatherData: weatherDataType;
	onLocationSubmit: () => void;
	zipCode: number;
	onZipCodeHandleChange: (event: any) => void;
}
export interface updatePropTypes {
	onLocationSubmit: () => void;
	zipCode: number;
	onZipCodeHandleChange: (event: any) => void;
}
