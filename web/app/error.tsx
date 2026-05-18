"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="container" style={{ padding: "4rem 1rem", textAlign: "center" }}>
			<h2 style={{ marginBottom: "1rem" }}>Something went wrong!</h2>
			<p style={{ marginBottom: "2rem" }}>
				Please make sure the Strapi server is running and try again.
			</p>
			<button
				onClick={() => reset()}
				className="button-primary button"
				style={{ cursor: "pointer" }}
			>
				Try again
			</button>
		</div>
	);
}
