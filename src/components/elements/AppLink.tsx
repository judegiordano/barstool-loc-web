import React from "react";
import Link from "next/link";

interface AppLinkProps {
	link: string
	children: React.ReactNode
	blank?: boolean
	className?: string
}

export const AppLink = ({
	link,
	children,
	blank = false,
	className
}: AppLinkProps) => {
	return (
		<Link href={link}><a className={className} target={`${blank ? "_blank" : "_top"}`}>{children}</a></Link>
	);
};
