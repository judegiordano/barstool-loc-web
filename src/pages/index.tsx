import React from "react";
import { DateTime } from "luxon";

import { redis } from "@http/redis-agent";
import { Footer } from "@components/elements/Footer";

interface HomeProps {
	count: number
	repo_count: number
	last_fetched: string
}

const formatNumber = (number: number, notation: "standard" | "scientific" | "engineering" | "compact" = "standard") => {
	const formatter = Intl.NumberFormat("en", { notation });
	return formatter.format(number);
};

const Home = ({
	count,
	repo_count,
	last_fetched
}: HomeProps) => {
	const when = DateTime.fromISO(last_fetched);
	return (
		<div className="h-screen px-5 pt-5 m-auto text-center">
			<div className="shadow-xl m-auto max-w-full card w-[600px] hover:cursor-default">
				<div className="card-body">
					<div className="text-[80px] font-bold text-secondary md:text-[100px]">{formatNumber(count, "compact")}</div>
					<div className="opacity-60 font-thin text-[20px] md:text-[25px]"><span className="font-medium">{formatNumber(count)}</span> lines of code<br />across <span className="font-medium">{repo_count}</span> repositories</div>
					<div className="opacity-60 font-thin text-[15px] pt-3">last updated {when.toRelativeCalendar()} at {when.toLocaleString({ hour: "numeric", minute: "numeric" })}</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

type RedisResult = { result: string }

export async function getServerSideProps() {
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
		props: {
			count: parseInt(count),
			repo_count: parseFloat(repo_count),
			last_fetched
		}
	};
}

export default Home;
