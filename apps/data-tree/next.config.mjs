import { composePlugins, withNx } from '@nx/next'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
	nx: {
		// Set this to true if you would like to use SVGR
		// See: https://github.com/gregberge/svgr
		svgr: true,
	},
	swcMinify: true
}

const plugins = [
	() => nextConfig,
	withNx,
]

export default composePlugins(...plugins)()
