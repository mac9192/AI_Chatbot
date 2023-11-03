/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
          // 
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            },
            {
                hostname: "directus-production-af9e.up.railway.app",
                protocol:"https"
            },
            {
                hostname: "servicescardpub.s3.us-east-2.amazonaws.com",
                protocol:"https"
            }
        ]
    },
   /* experimental:{
        serverActions: true,
    }*/
}

module.exports = nextConfig
