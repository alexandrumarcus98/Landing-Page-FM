import CtaFeature from "@/app/components/shared/CtaFeature";
import DynamicText from "@/app/components/shared/DynamicText";
import { getMedia } from "@/app/lib/strapi";
import type { CtaSection } from "@/app/types/strapi";

interface CtaSectionProps {
	data: CtaSection | null;
}

const CtaSection = ({ data }: CtaSectionProps) => {
	if (!data) {
		return null;
	}

	const { title, features, backgroundImage } = data;

	const bgUrl = getMedia(backgroundImage?.url);

	const sectionStyle = {
		backgroundImage: `
    linear-gradient(0deg, rgba(234, 232, 220, 0.3), rgba(234, 232, 220, 0.3)),
    linear-gradient(180deg, #EAE8DC 8.5%, rgba(234, 232, 220, 0) 100%),
    linear-gradient(180deg, rgba(234, 232, 220, 0) 0%, #EAE8DC 100%),
    url('${bgUrl}')
  `,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<section className="cta-section" aria-labelledby="cta" style={sectionStyle}>
			<div className="container cta-header">
				<div className="divider" aria-hidden="true" />

				<h2 id="cta" className="title">
					<DynamicText segments={title} underlineClass="ctaUnderline" />
				</h2>
			</div>

			{features && features.length > 0 && (
				<div className="cta-list">
					<div className="list">
						{features.map((feature) => (
							<CtaFeature key={feature.id} data={feature} />
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default CtaSection;
