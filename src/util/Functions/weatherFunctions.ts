import { convertKelvinToTempsTypes, tempNames } from "./functionTypes";
export const convertKelvinToTemps: convertKelvinToTempsTypes = (
	temp: number,
	unit: string
) => {
	switch (unit) {
		case tempNames.FAHRENHEIT:
			return ((temp - 273.15) * 9) / 5 + 32;
		case tempNames.CELCIUS:
			return temp - 273.15;
	}
	return 0;
};
