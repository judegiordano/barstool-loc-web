import React from "react";

import { AppLink } from "@components/elements/AppLink";
import { Divider } from "@components/elements/Divider";

export const Footer = () => {
	return (
		<>
			<Divider />
			<div className='font-normal text-[15px]'>
				powered by <AppLink link="https://upstash.com" blank><span className="text-theme-upstash-green">Upstash</span></AppLink>
			</div>
		</>
	);
};
