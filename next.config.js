/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development"
})

const nextConfig = withPWA({
	optimizeFonts: true,
	poweredByHeader: false,
	env: {
		API_URL: process.env.API_URL,
		FAKE_API_URL: process.env.FAKE_API_URL
	},

	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "i.pinimg.com", port: "", pathname: "/**" },
			{ protocol: "http", hostname: "localhost", port: "5000", pathname: "/**" }
		]
	},

	compiler: {
		styledComponents: true
	}
})

module.exports = nextConfig
