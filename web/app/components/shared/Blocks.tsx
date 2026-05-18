"use client"; // This creates a safe boundary for the library's internal functions

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import DOMPurify from "isomorphic-dompurify";
import React from "react";

interface StrapiBlocksProps {
	content: BlocksContent;
}

export default function StrapiBlocks({ content }: StrapiBlocksProps) {
	if (!content) return null;

	return (
		<BlocksRenderer
			content={content}
			blocks={{
				paragraph: ({ children }) => <p>{children}</p>,
				code: ({ children }) => {
					const textContent = React.Children.toArray(children).join("");

					if (textContent.includes("<") && textContent.includes(">")) {
						const cleanHtml = DOMPurify.sanitize(textContent);
						return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
					}

					return (
						<pre>
							<code>{children}</code>
						</pre>
					);
				},
			}}
		/>
	);
}
