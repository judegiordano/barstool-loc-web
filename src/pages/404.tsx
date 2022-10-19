import React from "react";
import Link from "next/link";

import { Divider } from "@components/elements/divider";

const NotFound = () => {
	return (
		<div className="h-screen px-5 pt-10 text-center bg-theme-dark-black">
			<div className='text-4xl font-bold text-white md:text-6xl'>
				Not Found :(
			</div>
			<Divider />
			<h3 className="pb-2 font-thin text-white">the requested page does not exist</h3>
			<h3 className="font-thin text-white">maybe try going <Link href="/"><a className="text-theme-blue">home</a></Link></h3>
		</div>
	);
};

export default NotFound;
