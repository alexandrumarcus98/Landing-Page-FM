import localFont from "next/font/local";

import type { Metadata } from "next";

import "./global.scss";

export const metadata: Metadata = {
	title: "Forming Men",
	description: "Becoming a man doesn't happen by accident",
};

const inputMono = localFont({
	src: "../public/fonts/InputMono-Regular-Testing.ttf",
	variable: "--font-mono",
	display: "swap",
});

const akzidenz = localFont({
	src: "../public/fonts/Berthold Akzidenz Grotesk Bold Extended.otf",
	variable: "--font-display",
	display: "swap",
});

const chainprinter = localFont({
	src: "../public/fonts/Chainprinter W00 Regular.ttf",
	variable: "--font-accent",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inputMono.variable} ${akzidenz.variable} ${chainprinter.variable}`}>
			<body>{children}</body>
		</html>
	);
}
