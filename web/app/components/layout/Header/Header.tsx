"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const leftLinks = ["Fighting shadows book", "retreats", "primal path"];
const rightLinks = ["Conference", "jon’s newsletter", "Video Courses"];
const mobileLinks = [...leftLinks, ...rightLinks];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className={`header ${isMenuOpen ? "isOpen" : ""}`}>
			<div className="container headerContainer">
				<nav className="siteNav" aria-label="Primary navigation">
					<div className="nav navLeft desktopNav">
						{leftLinks.map((item) => (
							<Link key={item} href="#" className="link">
								{item}
							</Link>
						))}
					</div>

					<Link href="/" className="logo" aria-label="Forming Men home">
						<Image src="/images/Logo.png" alt="Forming Men" width={145} height={100} />
					</Link>

					<div className="nav navRight desktopNav">
						{rightLinks.map((item) => (
							<Link key={item} href="#" className="link">
								{item}
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
						<Link key={item} href="#" className="mobileLink" onClick={closeMenu}>
							{item}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
