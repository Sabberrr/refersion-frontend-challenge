export const weatherQueryBuilder = (zipCode: number = 90006) => {
	let weatherUrl: string = "";
	weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=00ab9760d6984c9b493982a245485892`;
	return weatherUrl;
};
