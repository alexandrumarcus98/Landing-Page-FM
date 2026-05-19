import qs from "qs";

export const dynamic = "force-dynamic";
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export async function getLandingPageData() {
	const query = qs.stringify(
		{
			populate: {
				Header: {
					populate: {
						logo: { populate: "*" },
						leftLinks: { populate: "*" },
						rightLinks: { populate: "*" },
					},
				},
				Footer: {
					populate: {
						socials: { populate: "*" },
					},
				},
				Hero: { populate: "*" },
				Intro: { populate: "*" },
				Contact: { populate: "*" },
				CTA: {
					populate: {
						features: { populate: "*" },
						backgroundImage: { populate: "*" },
					},
				},
			},
		},
		{
			encodeValuesOnly: true,
		},
	);

	const url = `${STRAPI_URL}/api/landing-page?${query}`;

	try {
		const response = await fetch(url, {
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			return null;
		}

		const json = await response.json();
		return json.data;
	} catch (error) {
		console.error("Failed to connect to Strapi:", error);
		return null;
	}
}

export function getMedia(url: string | null | undefined) {
	if (url == null) return null;

	if (url.startsWith("http") || url.startsWith("//")) {
		return url;
	}

	return `${STRAPI_URL}${url}`;
}
