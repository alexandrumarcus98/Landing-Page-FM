import Image from "next/image";
import Link from "next/link";

const leftLinks = ["Fighting shadows book", "retreats", "primal path"];
const rightLinks = ["Conference", "jon’s newsletter", "Video Courses"];

const Header = () => {
	return (
		<header className="header">
			<div className="container headerContainer">
				<nav className="siteNav" aria-label="Primary navigation">
					<div className="nav navLeft">
						{leftLinks.map((item) => (
							<Link key={item} href="#" className="link">
								{item}
							</Link>
						))}
					</div>

					<Link href="/" className="logo" aria-label="Forming Men home">
						<Image src="/images/Logo.png" alt="Forming Men" width={145} height={100} />
					</Link>

					<div className="nav navRight">
						{rightLinks.map((item) => (
							<Link key={item} href="#" className="link">
								{item}
							</Link>
						))}
					</div>
				</nav>

				<button type="button" className="menuButton" aria-label="Open menu">
					Menu
				</button>
			</div>
		</header>
	);
};

export default Header;
