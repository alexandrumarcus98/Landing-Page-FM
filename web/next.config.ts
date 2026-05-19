import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		silenceDeprecations: ["import"],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: process.env.STRAPI_IMAGE_HOSTNAME || "",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
