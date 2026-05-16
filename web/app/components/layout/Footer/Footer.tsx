import Link from "next/link";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footerContainer">
				<div className="socials" aria-label="Social media links">
					<Link href="#" className="socialLink" aria-label="X">
						X
					</Link>
					<Link href="#" className="socialLink" aria-label="YouTube">
						B
					</Link>
					<Link href="#" className="socialLink" aria-label="Facebook">
						F
					</Link>
					<Link href="#" className="socialLink" aria-label="Instagram">
						I
					</Link>
				</div>

				<p className="meta">
					© 2024 FormingMen.co. All Rights Reserved. <Link href="#">Privacy Policy</Link> |{" "}
					<Link href="#">Terms &amp; Conditions</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
