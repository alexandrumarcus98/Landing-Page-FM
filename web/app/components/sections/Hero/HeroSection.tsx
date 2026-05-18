import Link from "next/link";

import RichText from "@/app/components/shared/RichText";
import { getMedia } from "@/app/lib/strapi";

import type { HeroSection } from "@/app/types/strapi";

type HeroSectionProps = {
	data: HeroSection;
};

export default function HeroSection({ data }: HeroSectionProps) {
	const { heading, subHeading, button, backgroundImage } = data;
	const backgroundImageUrl = getMedia(backgroundImage.url) || "";

	return (
		<section className="hero-section" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
			<div className="container hero-container">
				<div className="hero-content">
					<h1 className="title">
						<RichText content={heading} underlineClass="" isHeading />
					</h1>

					<div className="subtitle">
						<RichText content={subHeading} underlineClass="subtitle-underline" />
					</div>

					{button && (
						<Link href={button.url} className={`button-primary button ${button.variant}`}>
							{button.label}
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
