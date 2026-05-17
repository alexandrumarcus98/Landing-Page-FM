import Footer from "@/app/components/layout/Footer/Footer";
import Header from "@/app/components/layout/Header/Header";
import Main from "@/app/components/layout/Main/Main";
import ContactSection from "@/app/components/sections/Contact/ContactSection";
import CTASection from "@/app/components/sections/CTA/CTASection";
import Hero from "@/app/components/sections/Hero/HeroSection";
import IntroSection from "@/app/components/sections/Intro/IntroSection";

const Home = () => {
	return (
		<>
			<Header />

			<Main>
				<Hero />
				<IntroSection />
				<CTASection />
				<ContactSection />
			</Main>

			<Footer />
		</>
	);
};

export default Home;
