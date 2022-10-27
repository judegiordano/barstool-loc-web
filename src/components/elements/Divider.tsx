import Image from "next/image";
import React from "react";

export const Divider = () => {
	return (
		<div className="max-w-[600px] py-10 m-auto text-center divider">
			<Image
				src={"/barstool.svg"}
				quality={100}
				width={90}
				placeholder="blur"
				height={90}
				alt="barstool"
				priority
				loading="eager"
				draggable={false}
			/>
		</div>
	);
};
