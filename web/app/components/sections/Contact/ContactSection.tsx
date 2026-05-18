import RichText from "@/app/components/shared/RichText";

import type { ContactSection } from "@/app/types/strapi";

interface ContactSectionProps {
	data: ContactSection | null;
}

const ContactSection = ({ data }: ContactSectionProps) => {
	if (!data) {
		return null;
	}

	const { title, formTitle, formSubtitle } = data;

	return (
		<section className="contact-section" aria-labelledby="contact">
			<div className="container contact-header">
				<div className="divider" aria-hidden="true" />

				<h2 id="contact" className="title">
					<RichText content={title} />
				</h2>

				<div className="form-wrapper">
					<div className="form-content">
						<h3 className="form-title">{formTitle}</h3>
						<p className="form-subtitle">{formSubtitle}</p>

						<form className="contact-form" method="POST">
							<div className="input-group">
								<input type="text" id="fullName" name="fullName" placeholder="Full name" required />
							</div>

							<div className="input-group">
								<input type="email" id="email" name="email" placeholder="Email address" required />
							</div>

							<div className="input-group">
								<textarea
									id="message"
									name="message"
									placeholder="Message"
									rows={4}
									required
								></textarea>
							</div>

							<button type="submit" className="button-primary">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
