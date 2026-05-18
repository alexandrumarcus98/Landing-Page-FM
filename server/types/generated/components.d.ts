import type { Schema, Struct } from "@strapi/strapi";

export interface LayoutFooter extends Struct.ComponentSchema {
	collectionName: "components_layout_footers";
	info: {
		displayName: "Footer";
	};
	attributes: {
		copyright: Schema.Attribute.Blocks;
		socials: Schema.Attribute.Component<"layout.social-link", true>;
	};
}

export interface LayoutHeader extends Struct.ComponentSchema {
	collectionName: "components_layout_headers";
	info: {
		displayName: "Header";
	};
	attributes: {
		leftLinks: Schema.Attribute.Component<"layout.nav-link", true>;
		logo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		rightLinks: Schema.Attribute.Component<"layout.nav-link", true>;
	};
}

export interface LayoutNavLink extends Struct.ComponentSchema {
	collectionName: "components_layout_nav_links";
	info: {
		displayName: "Nav Link";
	};
	attributes: {
		label: Schema.Attribute.String;
		url: Schema.Attribute.String;
	};
}

export interface LayoutSocialLink extends Struct.ComponentSchema {
	collectionName: "components_layout_social_links";
	info: {
		displayName: "Social Link";
	};
	attributes: {
		icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		url: Schema.Attribute.String;
	};
}

export interface SectionsContactSection extends Struct.ComponentSchema {
	collectionName: "components_sections_contact_sections";
	info: {
		displayName: "Contact Section";
	};
	attributes: {
		backgroundImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		title: Schema.Attribute.Blocks;
	};
}

export interface SectionsCtaSection extends Struct.ComponentSchema {
	collectionName: "components_sections_cta_sections";
	info: {
		displayName: "CTA Section";
	};
	attributes: {
		backgroundImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		features: Schema.Attribute.Component<"shared.cta-feature", true>;
		title: Schema.Attribute.Blocks;
	};
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
	collectionName: "components_sections_hero_sections";
	info: {
		displayName: "Hero Section";
	};
	attributes: {
		backgroundImage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		button: Schema.Attribute.Component<"shared.button", false>;
		heading: Schema.Attribute.Blocks;
		subHeading: Schema.Attribute.Blocks;
	};
}

export interface SectionsIntroSection extends Struct.ComponentSchema {
	collectionName: "components_sections_intro_sections";
	info: {
		displayName: "Intro Section";
	};
	attributes: {
		description: Schema.Attribute.Blocks;
		statement: Schema.Attribute.Blocks;
		title: Schema.Attribute.Blocks;
	};
}

export interface SharedButton extends Struct.ComponentSchema {
	collectionName: "components_shared_buttons";
	info: {
		displayName: "Button";
	};
	attributes: {
		label: Schema.Attribute.String;
		url: Schema.Attribute.String;
		variant: Schema.Attribute.Enumeration<["primary", "secondary", "outline"]>;
	};
}

export interface SharedCtaFeature extends Struct.ComponentSchema {
	collectionName: "components_shared_cta_features";
	info: {
		displayName: "CTA Feature";
	};
	attributes: {
		buttonLabel: Schema.Attribute.String;
		date: Schema.Attribute.String;
		description: Schema.Attribute.Blocks;
		href: Schema.Attribute.String;
		image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
		imageLeft: Schema.Attribute.Boolean;
		title: Schema.Attribute.String;
	};
}

declare module "@strapi/strapi" {
	export module Public {
		export interface ComponentSchemas {
			"layout.footer": LayoutFooter;
			"layout.header": LayoutHeader;
			"layout.nav-link": LayoutNavLink;
			"layout.social-link": LayoutSocialLink;
			"sections.contact-section": SectionsContactSection;
			"sections.cta-section": SectionsCtaSection;
			"sections.hero-section": SectionsHeroSection;
			"sections.intro-section": SectionsIntroSection;
			"shared.button": SharedButton;
			"shared.cta-feature": SharedCtaFeature;
		}
	}
}
