/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	poweredByHeader: false,
	env: {},

	images: {
		remotePatterns: [{ protocol: "https", hostname: "i.pinimg.com", port: "", pathname: "/**" }]
	}
}

module.exports = nextConfig
