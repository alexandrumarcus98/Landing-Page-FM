import React from 'react';

const ContactSection = () => {
	return (
		<section className="contact-section" aria-labelledby="contact">
			<div className="contact-bg" aria-hidden="true"></div>

			<div className="container contact-container">
				<h2 id="contact" className="title">
					Most men haven’t been taught how to be one. It’s time for that to change.
				</h2>

				<div className="form-wrapper">
					<h3 className="form-title">Have Questions?</h3>
					<p className="form-subtitle">Let us know below and our team will be in touch!</p>
					
					<form className="contact-form">
						<div className="input-group">
							<input type="text" id="fullName" name="fullName" placeholder="Full name" required />
						</div>
						
						<div className="input-group">
							<input type="email" id="email" name="email" placeholder="Email address" required />
						</div>
						
						<div className="input-group">
							<textarea id="message" name="message" placeholder="Message" rows={4} required></textarea>
						</div>
						
						<button type="submit" className="buttonPrimary">Send</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
