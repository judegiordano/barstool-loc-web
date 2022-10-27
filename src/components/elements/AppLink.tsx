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
		<Link className={className} target={`${blank ? "_blank" : "_top"}`} href={link}>{children}</Link>
	);
};
