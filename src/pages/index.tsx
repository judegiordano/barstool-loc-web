import React from "react";
import Link from "next/link";

import { Divider } from "@components/elements/divider";
import { redis } from "@http/redis-agent";

interface HomeProps {
	count: number
	last_fetched: string
}

const formatNumber = (number: number, notation: "standard" | "scientific" | "engineering" | "compact" = "standard") => {
	const formatter = Intl.NumberFormat("en", { notation });
	return formatter.format(number);
};

const Home = ({ count, last_fetched }: HomeProps) => {
	return (
		<div className="h-screen px-5 pt-5 text-center">
			<div className="m-auto text-center shadow-xl card w-96 hover:cursor-default">
				<div className="card-body">
					<div className="stat">
						<div className="tooltip" data-tip={`last updated: ${last_fetched}`}>
							<div className="text-6xl font-bold stat-value text-secondary md:text-8xl">{formatNumber(count, "compact")}</div>
						</div>
						<div className="stat-desc font-thin text-[20px] pt-3"><span className="font-medium">{formatNumber(count)}</span> lines of code</div>
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

export async function getStaticProps() {
	const { result: count } = await redis.get<{ result: string }>("GET/lines_of_code");
	return {
		props: {
			count,
			last_fetched: new Date().toLocaleString()
		},
		// 1 hour in seconds
		revalidate: 3_600
	};
}

export default Home;
