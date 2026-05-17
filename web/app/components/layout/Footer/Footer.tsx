import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footerContainer">
				<div className="socials" aria-label="Social media links">
					<Link href="#" className="socialLink" aria-label="X">
						<Image src="/images/x-icon.svg" alt="X" width={24} height={24} />
					</Link>
					<Link href="#" className="socialLink" aria-label="YouTube">
						<Image src="/images/youtube-icon.svg" alt="YouTube" width={24} height={24} />
					</Link>
					<Link href="#" className="socialLink" aria-label="Facebook">
						<Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} />
					</Link>
					<Link href="#" className="socialLink" aria-label="Instagram">
						<Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
					</Link>
				</div>

					<p className="meta">
						© 2024 FormingMen.co.<br/>All Rights Reserved.<br/><Link href="#">Privacy Policy</Link> |{" "}
						<Link href="#">Terms &amp; Conditions</Link>
					</p>
			</div>
		</footer>
	);
};

export default Footer;
