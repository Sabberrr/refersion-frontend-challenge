export const getGoogleMapLocation = async (
	latitude: number,
	longitude: number
) => {
	const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
	const response = await fetch(googleUrl);
	const locationData = await response.json();
	return locationData;
};
