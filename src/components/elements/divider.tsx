import Image from "next/image";
import React from "react";

export const Divider = () => {
	return (
		<div className="relative flex items-center max-w-lg py-5 m-auto">
			<div className="flex-grow border-t border-gray-400"></div>
			<span className="flex-shrink mx-4 text-gray-400">
				<Image
					src={"/barstool-no-blur.png"}
					quality={100}
					width={45}
					height={45}
					alt="barstool"
					draggable={false}
					priority
				/>
			</span>
			<div className="flex-grow border-t border-gray-400"></div>
		</div>
	);
};
