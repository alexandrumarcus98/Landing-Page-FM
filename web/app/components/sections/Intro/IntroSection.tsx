import RichText from "@/app/components/shared/RichText";
import { DistressBot } from "@/app/components/ui/DistressDividers";

import type { IntroSection } from "@/app/types/strapi";

type IntroSectionProps = {
	data: IntroSection;
};

const IntroSection = async ({ data }: IntroSectionProps) => {
	const { title, description, statement } = data;
	return (
		<section
			id="intro-section"
			className="intro-section has-distress-edges"
			aria-labelledby="intro-title"
		>
			<DistressBot />

			<div className="container intro-container">
				<h2 id="intro-title" className="title">
					<RichText content={title} isHeading />
				</h2>

				<div className="description">
					<RichText content={description} underlineClass="description-underline" />
				</div>

				<div className="statement">
					<RichText content={statement} underlineClass="statement-underline" />
				</div>

				<div className="divider" aria-hidden="true" />
			</div>
		</section>
	);
};

export default IntroSection;
