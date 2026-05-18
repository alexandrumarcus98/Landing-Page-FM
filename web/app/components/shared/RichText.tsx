"use client";

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

type RichTextProps = {
	content: BlocksContent;
	underlineClass?: string;
	isHeading?: boolean;
};

const RichText = ({ content, underlineClass = "underline", isHeading = false }: RichTextProps) => {
	if (!content) return null;

	// Handle legacy string content by wrapping it in a valid Blocks structure
	const normalizedContent =
		typeof content === "string"
			? ([{ type: "paragraph", children: [{ type: "text", text: content }] }] as BlocksContent)
			: content;

	return (
		<BlocksRenderer
			content={normalizedContent}
			blocks={{
				paragraph: ({ children }) => (isHeading ? <>{children}</> : <p>{children}</p>),
				heading: ({ children, level }) => {
					if (isHeading) return <>{children}</>;
					const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
					return <Tag>{children}</Tag>;
				},
			}}
			modifiers={{
				bold: ({ children }) => <span className="text-accent">{children}</span>,
				underline: ({ children }) => <span className={underlineClass}>{children}</span>,
				strikethrough: ({ children }) => (
					<>
						<br className="mobile-only" />
						{children}
					</>
				),
				code: ({ children }) => (
					<>
						<br className="desktop-only" />
						{children}
					</>
				),
			}}
		/>
	);
};

export default RichText;
