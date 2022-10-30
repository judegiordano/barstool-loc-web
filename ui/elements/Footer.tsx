import React from "react";

import { AppLink } from "@ui/elements/AppLink";
import { Divider } from "@ui/elements/Divider";

export function Footer() {
	return (
		<>
			<Divider />
			<div className='font-normal text-[15px]'>
				powered by <AppLink link="https://upstash.com" className="text-theme-upstash-green" blank>Upstash</AppLink>
			</div>
		</>
	);
}
