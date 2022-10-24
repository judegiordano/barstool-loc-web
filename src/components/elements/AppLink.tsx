import React from "react";
import Link from "next/link";

interface AppLinkProps {
	children: React.ReactNode
	link: string
	blank?: boolean
	color?: string
}

export const AppLink = ({
	children,
	link,
	blank = false,
	color = "theme-blue"
}: AppLinkProps) => {
	return (
		<Link href={link}><a className={`text-${color}`} target={`${blank ? "_blank" : "_top"}`}>{children}</a></Link>
	);
};
