type HttpOptions = {
	headers?: HeadersInit
	cache?: RequestCache
}

type RestAgentOptions = {
	baseUrl: string
	baseHeaders?: HeadersInit
}

export class RestAgent {

	baseUrl: string;
	baseHeaders?: HeadersInit;

	constructor(options: RestAgentOptions) {
		this.baseUrl = options.baseUrl;
		this.baseHeaders = options.baseHeaders;
	}

	private formatRequest(path?: string, options?: HttpOptions) {
		const url = `${this.baseUrl}${path ? `/${path}` : ""}`;
		const headers = { ...this.baseHeaders, ...options?.headers };
		return {
			url,
			headers
		};
	}

	public async get<T>(url?: string, options?: HttpOptions) {
		const request = this.formatRequest(url, options);
		const response = await fetch(request.url, {
			method: "GET",
			headers: request.headers,
			cache: options?.cache
		});
		return response.json() as T;
	}
}
