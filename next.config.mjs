/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental' /**adotar ppr para rotas específicas */
    }
};

export default nextConfig;
