import { RestAgent } from "@lib/http/agent";
import { REDIS_ENDPOINT, REDIS_READONLY_TOKEN } from "@lib/config";

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
		redis.get<RedisResult>("GET/lines_of_code"),
		redis.get<RedisResult>("GET/repo_count"),
		redis.get<RedisResult>("GET/last_fetched"),
	]);
	return {
		count: parseInt(count),
		repo_count: parseFloat(repo_count),
		last_fetched
	};
}
