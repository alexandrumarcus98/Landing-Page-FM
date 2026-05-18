// /server/generate-schema.js
const fs = require("fs");
const path = require("path");

const components = {
	"shared/text-segment.json": {
		collectionName: "components_shared_text_segments",
		info: { displayName: "TextSegment", icon: "bold" },
		options: {},
		attributes: {
			text: { type: "string" },
			type: {
				type: "enumeration",
				enum: ["normal", "accent", "underline", "break"],
				default: "normal",
			},
		},
	},
	"shared/strapi-button.json": {
		collectionName: "components_shared_strapi_buttons",
		info: { displayName: "Button", icon: "cursor" },
		options: {},
		attributes: {
			label: { type: "string" },
			url: { type: "string" },
			variant: {
				type: "enumeration",
				enum: ["primary", "secondary", "outline"],
				default: "primary",
			},
		},
	},
	"shared/cta-feature.json": {
		collectionName: "components_shared_cta_features",
		info: { displayName: "CtaFeature", icon: "bulletList" },
		options: {},
		attributes: {
			title: { type: "string" },
			date: { type: "string" },
			description: { type: "text" },
			imageLeft: { type: "boolean", default: false },
			href: { type: "string" },
			buttonLabel: { type: "string" },
			image: { type: "media", multiple: false, required: false, allowedTypes: ["images"] },
		},
	},
	"sections/hero-section.json": {
		collectionName: "components_sections_hero_sections",
		info: { displayName: "HeroSection", icon: "landscape" },
		options: {},
		attributes: {
			title: { type: "component", repeatable: true, component: "shared.text-segment" },
			subtitle: { type: "component", repeatable: true, component: "shared.text-segment" },
			button: { type: "component", repeatable: false, component: "shared.strapi-button" },
			backgroundImage: {
				type: "media",
				multiple: false,
				required: false,
				allowedTypes: ["images"],
			},
		},
	},
	"sections/intro-section.json": {
		collectionName: "components_sections_intro_sections",
		info: { displayName: "IntroSection", icon: "file" },
		options: {},
		attributes: {
			title: { type: "string" },
			lead: { type: "text" },
			copyHtml: { type: "richtext" },
			statement: { type: "component", repeatable: true, component: "shared.text-segment" },
		},
	},
	"sections/cta-section.json": {
		collectionName: "components_sections_cta_sections",
		info: { displayName: "CtaSection", icon: "layout" },
		options: {},
		attributes: {
			title: { type: "component", repeatable: true, component: "shared.text-segment" },
			features: { type: "component", repeatable: true, component: "shared.cta-feature" },
		},
	},
	"sections/contact-section.json": {
		collectionName: "components_sections_contact_sections",
		info: { displayName: "ContactSection", icon: "envelop" },
		options: {},
		attributes: {
			title: { type: "component", repeatable: true, component: "shared.text-segment" },
		},
	},
};

const landingPageSchema = {
	kind: "singleType",
	collectionName: "landing_pages",
	info: { singularName: "landing-page", pluralName: "landing-pages", displayName: "Landing Page" },
	options: { draftAndPublish: true },
	pluginOptions: {},
	attributes: {
		heroSection: { type: "component", repeatable: false, component: "sections.hero-section" },
		introSection: { type: "component", repeatable: false, component: "sections.intro-section" },
		ctaSection: { type: "component", repeatable: false, component: "sections.cta-section" },
		contactSection: { type: "component", repeatable: false, component: "sections.contact-section" },
	},
};

function writeFile(filePath, data) {
	const fullPath = path.join(__dirname, "src", filePath);
	fs.mkdirSync(path.dirname(fullPath), { recursive: true });
	fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
	console.log(`Created: ${filePath}`);
}

// Write components
Object.entries(components).forEach(([filepath, data]) => {
	writeFile(`components/${filepath}`, data);
});

// Write Landing Page API
writeFile("api/landing-page/content-types/landing-page/schema.json", landingPageSchema);
// Create the basic routing/controller/service files needed for a Strapi API
writeFile("api/landing-page/routes/landing-page.js", {
	routes: [
		{ method: "GET", path: "/landing-page", handler: "landing-page.find", config: { auth: false } },
	],
});
writeFile("api/landing-page/controllers/landing-page.js", {
	"use strict": true,
	"module.exports":
		"const { createCoreController } = require('@strapi/strapi').factories; module.exports = createCoreController('api::landing-page.landing-page');",
});
writeFile("api/landing-page/services/landing-page.js", {
	"use strict": true,
	"module.exports":
		"const { createCoreService } = require('@strapi/strapi').factories; module.exports = createCoreService('api::landing-page.landing-page');",
});

// Because writing pure JS files via JSON stringify is messy, let's fix the API JS files:
const apiPath = path.join(__dirname, "src/api/landing-page");
fs.writeFileSync(
	path.join(apiPath, "routes/landing-page.js"),
	`module.exports = { routes: [{ method: 'GET', path: '/landing-page', handler: 'landing-page.find', config: { auth: false } }] };`,
);
fs.writeFileSync(
	path.join(apiPath, "controllers/landing-page.js"),
	`const { createCoreController } = require('@strapi/strapi').factories; module.exports = createCoreController('api::landing-page.landing-page');`,
);
fs.writeFileSync(
	path.join(apiPath, "services/landing-page.js"),
	`const { createCoreService } = require('@strapi/strapi').factories; module.exports = createCoreService('api::landing-page.landing-page');`,
);

console.log("✅ All Strapi schemas successfully generated!");
