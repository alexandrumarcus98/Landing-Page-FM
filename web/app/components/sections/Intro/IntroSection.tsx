const IntroSection = () => {
	return (
		<section id="intro" className="intro-section container" aria-labelledby="intro-title">
			<div className="content">
				<h2 id="intro-title" className="title">
					We believe every man is called to walk the ancient path. But you won&apos;t find it by
					listening to the popular voices of our day.
				</h2>

				<p className="lead">
					And so that&apos;s what this little corner of the internet is—a place you can walk that
					ancient path.
				</p>

				<div className="copy">
					<p>
						A place for men. To heal. To be refreshed. To be encouraged. And to learn ways to exist
						in this world that are healthy and holy.
					</p>

					<p>
						Join us on one of our 1 day conferences, retreats, or jump into our men&apos;s 6 month
						discipleship program (waiting list currently) and let&apos;s become better men,
						husbands, and fathers because even though the culture says there&apos;s no place for us,
						we know the world will be better when we are better.
					</p>
				</div>

				<p className="statement">
					Some men live their whole lives with their deepest desires and questions left unmet and
					unanswered.
					<br />
					It doesn&apos;t have to be <span className="statementUnderline">that way.</span>
				</p>

				<div className="divider" aria-hidden="true" />
			</div>
		</section>
	);
};

export default IntroSection;
