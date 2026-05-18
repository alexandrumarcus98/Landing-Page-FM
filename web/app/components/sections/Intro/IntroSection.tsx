import StrapiBlocks from "@/app/components/shared/Blocks";
import DynamicText from "@/app/components/shared/DynamicText";
import { DistressBot } from "@/app/components/ui/DistressDividers";

import type { IntroSection } from "@/app/types/strapi";

type IntroSectionProps = {
	data: IntroSection;
};

const IntroSection = async ({ data }: IntroSectionProps) => {
	const { title, copyHtml, statement } = data;
	return (
		<section
			id="intro-section"
			className="intro-section has-distress-edges"
			aria-labelledby="intro-title"
		>
			<DistressBot />
			<div className="container intro-container">
				<h2 id="intro-title" className="title">
					{title}
				</h2>

				{copyHtml.length > 0 && (
					<div className="copy">
						<StrapiBlocks content={data.copyHtml} />
					</div>
				)}

				<p className="statement">
					<DynamicText segments={statement} underlineClass="statement-underline" />
				</p>
				<div className="divider" aria-hidden="true" />
			</div>
		</section>
	);
};

export default IntroSection;
