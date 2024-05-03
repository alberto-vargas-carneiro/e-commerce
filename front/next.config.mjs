/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'down-br.img.susercontent.com',
                port: '',
                pathname: '/file/**',
            }
        ]
    }
};

export default nextConfig;
