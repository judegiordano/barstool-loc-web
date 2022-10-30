import Image from "next/image";
import React from "react";

export function Divider() {
	return (
		<div className="max-w-[600px] py-10 m-auto text-center divider">
			<Image
				src={"/barstool.svg"}
				quality={100}
				width={70}
				height={70}
				alt="barstool"
				priority
				loading="eager"
				draggable={false}
			/>
		</div>
	);
}
