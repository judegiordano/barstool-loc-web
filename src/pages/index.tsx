import React from "react";
import Link from "next/link";

import { Divider } from "@components/elements/divider";
import { redis } from "@http/redis-agent";
import { DateTime } from "luxon";

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
		<div className="h-screen px-5 pt-5 text-center">
			<div className="m-auto text-center shadow-xl max-w-full card w-[700px] hover:cursor-default">
				<div className="card-body">
					<div className="stat">
						<div className="text-6xl font-bold stat-value text-secondary md:text-8xl">{formatNumber(count, "compact")}</div>
						<div className="stat-desc font-thin text-[19px] pt-3"><span className="font-medium">{formatNumber(count)}</span> lines of code across <span className="font-medium">{repo_count}</span> repositories</div>
						<div className="stat-desc font-thin text-[15px] pt-3">last updated {when.toRelativeCalendar()} at {when.toLocaleString({ hour: "numeric", minute: "numeric" })}</div>
					</div>
				</div>
			</div>
			<Divider />
			<div className='font-normal text-[15px]'>
				powered by <Link href="https://upstash.com"><a className='text-theme-upstash-green' target='_blank'>Upstash</a></Link>
			</div>
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
