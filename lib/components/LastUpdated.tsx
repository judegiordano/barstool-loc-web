"use client";
import { DateTime } from "luxon";
import React from "react";

interface LastUpdatedProps {
	last_fetched: string
}

export function LastUpdated({ last_fetched }: LastUpdatedProps) {
	const when = DateTime.fromISO(last_fetched);
	const calender = when.toRelativeCalendar();
	const time = when.toLocaleString({ hour: "numeric", minute: "numeric" });
	return (
		<div className="opacity-60 font-thin text-[15px] pt-3">
			last updated {calender} at {time}
		</div>
	);
}
