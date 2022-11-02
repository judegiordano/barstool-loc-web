"use client";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function Error({ error, reset }: any) {
	return (
		<div>
			<div className="text-[50px] text-red-500">Woops</div>
			<br />
			<div className="text-[20px]">an unhandled exception ocurred</div>
		</div>
	);
}
