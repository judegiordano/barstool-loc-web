import { RestAgent } from "@lib/http/agent";
import { REDIS_ENDPOINT, REDIS_READONLY_TOKEN } from "@lib/config";
import { HOUR_IN_SECONDS } from "@lib/constants";

export const redis = new RestAgent({
	baseUrl: REDIS_ENDPOINT,
	baseHeaders: {
		"Authorization": `Bearer ${REDIS_READONLY_TOKEN}`
	}
});

type RedisResult = { result: string }

export async function linesOfCode() {
	const [{
		result: count
	}, {
		result: repo_count
	}, {
		result: last_fetched
	}] = await Promise.all([
		redis.get<RedisResult>("GET/lines_of_code", { next: { revalidate: HOUR_IN_SECONDS } }),
		redis.get<RedisResult>("GET/repo_count", { next: { revalidate: HOUR_IN_SECONDS } }),
		redis.get<RedisResult>("GET/last_fetched", { next: { revalidate: HOUR_IN_SECONDS } }),
	]);
	return {
		count: parseInt(count),
		repo_count: parseFloat(repo_count),
		last_fetched
	};
}
