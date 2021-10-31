import axios, { AxiosRequestConfig, AxiosPromise } from "axios";

export const fetch = <V = unknown>(path: string, options: AxiosRequestConfig): AxiosPromise<V> => {
	options.url = `${process.env.NEXT_PUBLIC_API}${path}`;
	options.withCredentials ??= true;
	options.headers ??= {};

	if (options.method !== "get" && options.method !== "GET")
		options.headers["Content-Type"] ??= "application/json";

	return axios(options);
};
