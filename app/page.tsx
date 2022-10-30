import React from "react";
import { DateTime } from "luxon";

import { Footer } from "@ui/elements/Footer";
import { linesOfCode } from "@lib/http/redis-agent";
import { formatNumber } from "@lib/util";

export default async function Page() {
	const { count, last_fetched, repo_count } = await linesOfCode();
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
}
