import React from "react";

import { Divider } from "@ui/elements/Divider";
import { AppLink } from "@ui/elements/AppLink";

export default function NotFound() {
	return (
		<div className="h-screen px-5 pt-10 text-center">
			<div className='text-4xl font-bold md:text-6xl'>
				Not Found :(
			</div>
			<Divider />
			<h3 className="pb-2 font-thin">the requested page does not exist</h3>
			<h3 className="font-thin">maybe try going <AppLink className="text-theme-blue" link="/">home</AppLink></h3>
		</div>
	);
}
