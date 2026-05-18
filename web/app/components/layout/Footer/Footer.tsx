import Image from "next/image";
import Link from "next/link";

import RichText from "@/app/components/shared/RichText";
import { getMedia } from "@/app/lib/strapi";

import type { ContactSection, Footer } from "@/app/types/strapi";

interface FooterProps {
	contactData: ContactSection | null;
	data: Footer | null;
	children: React.ReactNode;
}

const Footer = ({ children, contactData, data }: FooterProps) => {
	if (!data || !contactData) {
		return null;
	}

	const { backgroundImage } = contactData;
	const { copyright, socials = [] } = data;
	const bgUrl = getMedia(backgroundImage?.url);

	return (
		<footer
			className="footer-section"
			style={
				{
					"--contact-bg": `linear-gradient(180deg, #EAE8DC 16.46%, rgba(234, 232, 220, 0.6) 100%),
			url('${bgUrl}')`,
				} as React.CSSProperties
			}
		>
			{children}

			<div className="container footer-container">
				{socials.length > 0 && (
					<div className="footer-socials" aria-label="Social Media Links">
						{socials.map((social) => (
							<Link key={social.id} href={social.url} target="_blank" rel="noopener noreferrer">
								<Image
									src={getMedia(social.icon.url) || ""}
									alt={`Link to ${social.url}`}
									width={24}
									height={24}
								/>
							</Link>
						))}
					</div>
				)}

				<div className="copyright">
					<RichText content={copyright} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
