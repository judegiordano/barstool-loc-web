import React from "react";
import Link from "next/link";

interface HomeProps {
	count: number
}

const formatNumber = (number: number, notation: "standard" | "scientific" | "engineering" | "compact" = "standard") => {
	const formatter = Intl.NumberFormat("en", { notation });
	return formatter.format(number);
};

const Divider = () => {
	return (
		<div className="relative flex py-5 items-center, max-w-lg m-auto">
			<div className="flex-grow border-t border-gray-400"></div>
			<div className="flex-grow border-t border-gray-400"></div>
		</div>
	);
};

const Home = ({ count }: HomeProps) => {
	return (
		<div className="h-screen text-center text-white bg-theme-dark-black">
			<div className='font-bold text-[125px]'>
				{formatNumber(count, "compact")}
			</div>
			<div className='font-thin text-[20px]'>
				{formatNumber(count)} lines of code
			</div>
			<Divider />
			<div className='font-normal text-[15px]'>
				powered by <Link href="https://upstash.com"><a className='text-theme-upstash-green' target='_blank'>Upstash</a></Link>
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	const { REDIS_ENDPOINT, REDIS_READONLY_TOKEN } = process.env;
	const response = await fetch(`${REDIS_ENDPOINT}/GET/lines_of_code`, {
		headers: { "Authorization": `Bearer ${REDIS_READONLY_TOKEN}` }
	});
	const { result: count } = await response.json() as { result: string };
	return {
		props: { count }
	};
}

export default Home;
