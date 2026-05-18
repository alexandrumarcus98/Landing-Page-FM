import Image from "next/image";
import Link from "next/link";

import RichText from "@/app/components/shared/RichText";
import { getMedia } from "@/app/lib/strapi";

import type { CtaItem } from "@/app/types/strapi";

interface CtaFeatureProps {
	data: CtaItem;
}

const CtaFeature = ({ data }: CtaFeatureProps) => {
	if (!data) {
		return null;
	}

	const {
		title,
		date,
		description,
		image,
		imageAlt,
		imageLeft = false,
		href = "#",
		buttonLabel = "Tell Me More!",
	} = data;

	const imageUrl = getMedia(image?.url);
	const altText = imageAlt || image?.alternativeText || title;

	return (
		<article className={`cta-feature ${imageLeft ? "image-left" : ""}`}>
			<div className="text">
				<h3 className="title">{title}</h3>

				{date ? <p className="date">{date}</p> : null}

				<div className="description">
					<RichText content={description} />
				</div>

				{buttonLabel && href && (
					<Link href={href} className="button-primary button">
						{buttonLabel}
					</Link>
				)}
			</div>

			<div className="media">
				{imageUrl && (
					<Image
						src={imageUrl}
						alt={altText}
						width={image?.width || 812}
						height={image?.height || 542}
						className="image"
					/>
				)}
			</div>
		</article>
	);
};

export default CtaFeature;
