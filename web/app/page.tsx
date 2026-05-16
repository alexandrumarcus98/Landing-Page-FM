import Footer from "@/app/components/layout/Footer/Footer";
import Header from "@/app/components/layout/Header/Header";
import Main from "@/app/components/layout/Main/Main";
import Hero from "@/app/components/sections/Hero/HeroComponent";

const Home = () => {
	return (
		<>
			<Header />

			<Main>
				<Hero />
			</Main>

			<Footer />
		</>
	);
};

export default Home;
