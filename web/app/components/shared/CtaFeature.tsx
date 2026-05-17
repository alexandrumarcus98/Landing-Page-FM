import Image from "next/image";
import Link from "next/link";

type CtaFeatureProps = {
	title: string;
	date?: string;
	description: string;
	image: string;
	imageAlt: string;
	imageLeft?: boolean;
	href?: string;
	buttonLabel?: string;
};

const CtaFeature = ({
	title,
	date,
	description,
	image,
	imageAlt,
	imageLeft = false,
	href = "#",
	buttonLabel = "Tell Me More!",
}: CtaFeatureProps) => {
	return (
		<article className={`cta-feature ${imageLeft ? "imageLeft" : ""}`}>
			<div className="text">
				<h3 className="title">{title}</h3>

				{date ? <p className="date">{date}</p> : null}

				<p className="description">{description}</p>

				<Link href={href} className="buttonPrimary button">
					{buttonLabel}
				</Link>
			</div>

			<div className="media">
				<Image src={image} alt={imageAlt} width={812} height={542} className="image" />
			</div>
		</article>
	);
};

export default CtaFeature;
