import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2jgkuusud5fri.cloudfront.net",
      },
    ],
  },
}

export default withPayload(nextConfig)
