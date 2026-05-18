import Link from "next/link";

import DynamicText from "@/app/components/shared/DynamicText";
import { getMedia } from "@/app/lib/strapi";
import type { HeroSection } from "@/app/types/strapi";

type HeroSectionProps = {
	data: HeroSection;
};

export default function HeroSection({ data }: HeroSectionProps) {
	const backgroundImageUrl = getMedia(data.backgroundImage?.url);
	const { title, subtitle, button } = data;

	return (
		<section className="hero-section" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
			<div className="container hero-container">
				<div className="hero-content">
					<h1 className="title">
						<DynamicText segments={title} />
					</h1>

					<p className="subtitle">
						<DynamicText segments={subtitle} underlineClass="subtitleUnderline" />
					</p>

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
