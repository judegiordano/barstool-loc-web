import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Barstool Lines of Code</title>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/barstool.png" />
				<meta name="author" content="Jude Giordano" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Current Approximate Lines of Code In Barstool Sports Github Org" />
			</Head>
			<div>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
