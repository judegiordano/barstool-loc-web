import Image from "next/image";
import React from "react";

export const Divider = () => {
	return (
		<div className="max-w-lg py-10 m-auto text-center divider">
			<Image
				src={"/barstool.svg"}
				quality={100}
				width={90}
				height={90}
				alt="barstool"
				priority
				draggable={false}
			/>
		</div>
	);
};
