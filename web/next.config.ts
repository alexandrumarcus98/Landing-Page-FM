import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

	sassOptions: {
		silenceDeprecations: ["import"],
	},
	images: {
		remotePatterns:
			process.env.STRAPI_IMAGE_HOSTNAME === undefined
				? [
						{
							protocol: "http",
							hostname: "localhost",
							port: "1337",
						},
						{
							hostname: "127.0.0.1",
							port: "1337",
							protocol: "http",
						},
					]
				: [
						{
							protocol: "https",
							hostname: process.env.STRAPI_IMAGE_HOSTNAME,
						},
					],
		dangerouslyAllowLocalIP: process.env.STRAPI_IMAGE_HOSTNAME === undefined,
	},
};

export default nextConfig;
