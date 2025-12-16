import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'
import './globals.css'

const pixelifySans = Pixelify_Sans({
	variable: '--font-pixelify-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Dumb Jokes',
	description: 'A collection of dumb jokes',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${pixelifySans.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
