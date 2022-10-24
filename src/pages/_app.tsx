import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Barstool Lines of Code</title>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/barstool.svg" />
				<meta name="author" content="Jude Giordano" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Current Approximate Lines of Code in Barstool Sports Github Org" />
				{/* open graph */}
				<meta name="twitter:card" content="summary" />
				<meta property="og:title" content="Barstool Sports Lines of Code" />
				<meta property="og:url" content="https://stool-loc.vercel.app" />
				<meta property="og:description" content="Current Approximate Lines of Code in Barstool Sports Github Org" />
				<meta property="og:image" content="https://stool-loc.vercel.app/barstool.png" />
				<meta property="og:type" content="website" />
			</Head>
			<div>
				<ThemeProvider attribute="data-theme" defaultTheme={"dracula"}>
					<Component {...pageProps} />
				</ThemeProvider>
			</div>
		</>
	);
}

export default MyApp;
