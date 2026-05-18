export default function Loading() {
	return (
		<div
			className="container"
			style={{
				padding: "4rem 1rem",
				textAlign: "center",
				minHeight: "50vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="loading-spinner">Loading...</div>
		</div>
	);
}
