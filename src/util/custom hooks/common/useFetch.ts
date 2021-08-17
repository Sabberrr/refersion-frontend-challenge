import { useState, FC } from "react";

export function useFetch() {
	const [loading, setLoading] = useState<Boolean>(true);
	const [error, setError] = useState<Boolean>(false);
	const [data, setData] = useState<any>({});
	const sendQuery = async (url: string) => {
		try {
			await setLoading(true);
			await setError(false);
			const response = await fetch(url);
			const result = await response.json();
			await setData(result);
			setLoading(false);
		} catch (err) {
			setError(err);
		}
	};

	return { data, loading, error, sendQuery };
}
