import '@melting/shared/styles/index.css'
import 'the-new-css-reset/css/reset.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
