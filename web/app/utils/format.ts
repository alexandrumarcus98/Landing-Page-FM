const isUrlFormat = (str: string): boolean => {
	const trimmed = str.trim();

	return (
		trimmed.startsWith("/") ||
		trimmed.startsWith("#") || // Hash anchor: #intro
		trimmed.startsWith("http://") || // Absolute HTTP link
		trimmed.startsWith("https://") || // Absolute HTTPS link
		trimmed.startsWith("mailto:") || // Email anchor
		trimmed.startsWith("tel:") || // Phone anchor
		/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(trimmed) // Plain domains: formingmen.com
	);
};

export const formatStrapiUrl = (label: string, explicitUrl?: string | null): string => {
	if (explicitUrl && explicitUrl.trim() !== "") {
		const cleanUrl = explicitUrl.trim();
		if (isUrlFormat(cleanUrl)) {
			return cleanUrl;
		}
	}

	if (label && isUrlFormat(label)) {
		return label.trim();
	}

	if (!label) return "#";

	return (
		"#" +
		label
			.toLowerCase()
			.trim()
			.replace(/[’'""`]/g, "") // Clean out smart or regular apostrophes
			.replace(/[^a-z0-9\s-]/g, "") // Clean out special symbols
			.replace(/\s+/g, "-") // Compress multiple spaces into a single dash
			.replace(/-+/g, "-")
	); // Prevent trailing or duplicate dashes
};
