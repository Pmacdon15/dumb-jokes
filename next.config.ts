import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	typedRoutes: true,
	cacheComponents: true,

	images: {
		remotePatterns: [new URL('https://i.imgflip.com/**')],
	},
}

export default nextConfig
