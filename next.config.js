/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: 
    {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dtljv9iws",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "xsld2ehm",
        NEXT_PUBLIC_CLOUDINARY_FOLDER: "biography"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com'
          },
        ]
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/biography',
          permanent: true,
        },
      ]
    }
}
module.exports = nextConfig
