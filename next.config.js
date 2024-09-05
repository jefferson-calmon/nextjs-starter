/** @type {import('next').NextConfig} */
module.exports = {
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
	// typescript: {
	// 	ignoreBuildErrors: true,
	// },
	transpilePackages: ['lucide-react', 'geist'],
	rewrites() {
		return [{ source: '/ping', destination: '/api/ping' }];
	},
};
