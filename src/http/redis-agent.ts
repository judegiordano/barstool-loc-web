import { RestAgent } from "@http/agent";
import { REDIS_ENDPOINT, REDIS_READONLY_TOKEN } from "@config";

export const redis = new RestAgent({
	baseUrl: REDIS_ENDPOINT,
	baseHeaders: {
		"Authorization": `Bearer ${REDIS_READONLY_TOKEN}`
	}
});
