import React from "react";

import { linesOfCode } from "@lib/http/redis-agent";
import { formatNumber } from "@lib/util";
import { LastUpdated } from "@lib/components/LastUpdated";

export default async function Page() {
	const { count, last_fetched, repo_count } = await linesOfCode();
	return (
		<div className="shadow-xl m-auto max-w-full card w-[600px] hover:cursor-default">
			<div className="card-body">
				<div className="text-[80px] font-bold text-secondary md:text-[100px]">{formatNumber(count, "compact")}</div>
				<div className="opacity-60 font-thin text-[20px] md:text-[25px]">
					<span className="font-medium">{formatNumber(count)}</span> lines of code
					<br />
					across <span className="font-medium">{repo_count}</span> repositories
				</div>
				<LastUpdated last_fetched={last_fetched} />
			</div>
		</div>
	);
}
