import Header from "@/app/components/layout/Header/Header";

import Footer from "@/app/components/layout/Footer/Footer";
import ContactSection from "@/app/components/sections/Contact/ContactSection";
import CtaSection from "@/app/components/sections/Cta/CtaSection";
import HeroSection from "@/app/components/sections/Hero/HeroSection";
import IntroSection from "@/app/components/sections/Intro/IntroSection";

import { getLandingPageData } from "@/app/lib/strapi";
import { LandingPagePayload } from "@/app/types/strapi";

export const Home = async () => {
	const strapiData: LandingPagePayload = await getLandingPageData();

	if (!strapiData) {
		throw new Error("Failed to load landing page data. Check if Strapi is running.");
	}

	return (
		<>
			{strapiData.Header && <Header data={strapiData.Header} />}

			<main>
				{strapiData.Hero && <HeroSection data={strapiData.Hero} />}
				{strapiData.Intro && <IntroSection data={strapiData.Intro} />}
				{strapiData.CTA && <CtaSection data={strapiData.CTA} />}
			</main>

			{strapiData.Footer && (
				<Footer contactData={strapiData.Contact} data={strapiData.Footer}>
					<ContactSection data={strapiData.Contact} />
				</Footer>
			)}
		</>
	);
};

export default Home;
