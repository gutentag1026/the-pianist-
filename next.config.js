/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = '/'
if (isGithubActions) {
   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
   assetPrefix = `/${repo}/`
   basePath = `/${repo}`
}
const nextConfig = {
    reactStrictMode: false,
    assetPrefix: assetPrefix,
    basePath: basePath,
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
        ],
        //unoptimized: true
    },
    // videos: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'res.cloudinary.com'
    //       },
    //     ]
    // },
    // async redirects() {
    //   return [
    //     {
    //       source: '/',
    //       destination: '/biography',
    //       permanent: true,
    //     },
    //   ]
    // },
  output: 'export'
}
module.exports = nextConfig
