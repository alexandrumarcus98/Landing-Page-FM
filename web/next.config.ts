import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	sassOptions: {
		silenceDeprecations: ["import"],
	},
	images: {
		domains: ["localhost", "127.0.0.1"],
		dangerouslyAllowLocalIP: true,
	},
};

export default nextConfig;
