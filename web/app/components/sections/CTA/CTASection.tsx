import CtaFeature from "@/app/components/shared/CtaFeature";

const items = [
	{
		title: "Men’s Conference",
		date: "August 23–24, 2024",
		description:
			"What if there was a space for 500 men to gather once a year for two days of content, formation, and relationship? There is, and that's what our conference is. August 23 and 24, 2024, where we will hang, eat, and lean in to sharpen ourselves and each other.",
		image: "/images/cta_feature_background.jpg",
		imageAlt: "Men gathered at a large conference.",
		imageLeft: false,
	},
	{
		title: "Retreats",
		description:
			"We believe there is nothing more powerful that can happen in a man's life, than when he gathers with 30 to 40 men for one reason only. To get your heart back. To get wounds healed. To get vision unleashed. And that's why we do our 2–3 day retreats. And let us tell you, we do not skimp. Good food, amazing properties, and phones turned off. How it should be.",
		image: "/images/retreats.jpg",
		imageAlt: "Retreat cabins in a quiet natural landscape.",
		imageLeft: true,
	},
	{
		title: "3 Month Online Cohorts",
		description:
			"One way we hope to serve you all is through our curriculum that will equip us all to speak and to live well. Weekly live keynote, a Slack group to process with the other men while you engage the content, plus ongoing support throughout the week and much more.",
		image: "/images/cohorts.jpg",
		imageAlt: "Speaker standing at a podium during a talk.",
		imageLeft: false,
	},
	{
		title: "The Men’s Council Mastermind",
		description:
			"Twice a year, about 30 of us men get together for a private off the books meeting. We sharpen each other, encourage one another, and most of all link arms in our vision, justice, and ministry.",
		image: "/images/mastermind.jpg",
		imageAlt: "Still life image used in the mastermind section.",
		imageLeft: true,
	},
];

const CtaSection = () => {
	return (
		<section className="cta-section" aria-labelledby="cta">
			<div className="container cta-header">
				<div className="divider" aria-hidden="true" />

				<h2 id="cta" className="title">
					Come Hangout
					<br />
					With Us
				</h2>
			</div>

			<div className="cta-list">
				<div className="list">
					{items.map((item) => (
						<CtaFeature key={item.title} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
