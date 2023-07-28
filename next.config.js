/** @type {import('next').NextConfig} */
module.exports = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: true,
    images: {
        domains: ['ui-avatars.com', 'firebasestorage.googleapis.com'],
    },
}
