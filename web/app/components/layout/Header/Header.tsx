"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getMedia } from "@/app/lib/strapi";
import type { Header } from "@/app/types/strapi";
import { formatStrapiUrl } from "@/app/utils/format";

interface HeaderProps {
	data: Header | null;
}

const Header = ({ data }: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	if (!data) {
		return null;
	}

	const { logo, leftLinks, rightLinks } = data;

	const logoUrl = getMedia(logo?.url) || "";
	const logoAlt = logo?.alternativeText || "";
	const mobileLinks = [...leftLinks, ...rightLinks];

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className={`header ${isMenuOpen ? "isOpen" : ""}`}>
			<div className="container header-container">
				<nav className="siteNav" aria-label="Primary navigation">
					<div className="nav navLeft desktopNav">
						{leftLinks.map((item) => (
							<Link
								key={item?.id}
								href={formatStrapiUrl(item.label, item.url)}
								className="link"
							>
								{item?.label}
							</Link>
						))}
					</div>

					<Link href="/" className="logo" aria-label="Forming Men home">
						<Image src={logoUrl} alt={logoAlt} width={145} height={100} />
					</Link>

					<div className="nav navRight desktopNav">
						{rightLinks.map((item) => (
							<Link
								key={item?.id}
								href={formatStrapiUrl(item.label, item.url)}
								className="link"
							>
								{item?.label}
							</Link>
						))}
					</div>

					<button
						type="button"
						className="menuButton"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-navigation"
						onClick={() => setIsMenuOpen((current) => !current)}
					>
						<span className="menuIcon" aria-hidden="true">
							<span />
							<span />
							<span />
						</span>
					</button>
				</nav>

				<div id="mobile-navigation" className="mobile-nav" aria-hidden={!isMenuOpen}>
					{mobileLinks.map((item) => (
						<Link
							key={item?.id}
							href={formatStrapiUrl(item.label, item.url)}
							className="mobileLink"
							onClick={closeMenu}
						>
							{item?.label}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
