import { TextSegment } from "@/app/types/strapi";
import { Fragment } from "react/jsx-runtime";

type DynamicTextProps = {
	segments: TextSegment[];
	underlineClass?: string;
};

const DynamicText = ({ segments, underlineClass = "underline" }: DynamicTextProps) => {
	return (
		<>
			{segments.map((segment) => {
				if (segment.type === "break") return <br key={segment.id} />;

				if (segment.type === "accent") {
					return (
						<span key={segment.id} className="text-accent">
							{segment.text}{" "}
						</span>
					);
				}

				if (segment.type === "underline") {
					return (
						<span key={segment.id} className={underlineClass}>
							{segment.text}{" "}
						</span>
					);
				}

				return <Fragment key={segment.id}>{segment.text} </Fragment>;
			})}
		</>
	);
};

export default DynamicText;
