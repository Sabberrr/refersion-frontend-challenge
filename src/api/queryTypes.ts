export interface weatherDataType {
	base: string;
	clouds: number;
	cod: number;
	coord: coord;
	dt: number;
	id: number;
	main: main;
	name: string;
	sys: sys;
	timezone: number;
	visibility: number;
	weather: weather[];
	wind: wind;
}

export type clouds = {
	all: number;
};
export type coord = {
	lon: number;
	lat: number;
};
export type main = {
	feels_like: number;
	humidity: number;
	pressure: number;
	temp: number;
	temp_max: number;
	temp_min: number;
};
export type sys = {
	type: number;
	id: number;
	country: string;
	sunrise: number;
	sunset: number;
};
export type weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
};
export type wind = {
	speed: number;
	deg: number;
};
