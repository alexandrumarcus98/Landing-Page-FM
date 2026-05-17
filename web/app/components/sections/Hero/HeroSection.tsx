const Hero = () => {
	return (
		<section
			className="hero-section"
			style={{
				backgroundImage: "url('https://admin.formingmen.com/uploads/heroimage_6386634d99.jpg')",
			}}
		>
			<div className="container heroContainer">
				<div className="hero-content">
					<h1 className="title">
						Becoming a man
						<br />
						doesn&apos;t happen by
						<br />
						accident
					</h1>

					<p className="subtitle">
						Men are <span className="subtitleUnderline">formed</span>
					</p>

					<a href="#intro" className="buttonPrimary heroButton">
						Tell me more
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
