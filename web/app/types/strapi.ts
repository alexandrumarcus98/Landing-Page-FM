import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Button {
	id: number;
	label: string;
	url: string;
	variant: "primary" | "secondary" | "outline";
}

export interface NavLink {
	id: number;
	label: string;
	url: string;
}

export type MediaFormat = {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	url: string;
};

export type Media = {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	focalPoint: string | null;
	width: number;
	height: number;
	url: string;
	formats: {
		thumbnail?: MediaFormat;
		small?: MediaFormat;
		medium?: MediaFormat;
		large?: MediaFormat;
	};
};

export interface SocialLink {
	id: number;
	icon: Media;
	url: string;
}

export interface Header {
	id: number;
	logo: Media;
	leftLinks: NavLink[];
	rightLinks: NavLink[];
}

export interface Footer {
	id: number;
	copyright: BlocksContent;
	socials: SocialLink[];
}

export interface HeroSection {
	id: number;
	heading: BlocksContent;
	subHeading: BlocksContent;
	button: Button | null;
	backgroundImage: Media;
}

export interface IntroSection {
	id: number;
	title: BlocksContent;
	description: BlocksContent;
	statement: BlocksContent;
}

export interface CtaItem {
	id: number;
	title: string;
	date?: string | null;
	description: BlocksContent;
	image: Media;
	imageAlt?: string | null;
	imageLeft?: boolean;
	buttonLabel?: string;
	href?: string;
}

export interface CtaSection {
	id: number;
	title: BlocksContent;
	features: CtaItem[];
	backgroundImage: Media;
}

export interface ContactSection {
	id: number;
	title: BlocksContent;
	backgroundImage: Media;
}

export interface LandingPagePayload {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	Header: Header | null;
	Footer: Footer | null;
	Hero: HeroSection | null;
	Intro: IntroSection | null;
	CTA: CtaSection | null;
	Contact: ContactSection | null;
}
