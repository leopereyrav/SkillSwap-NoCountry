/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_URL_BASE: process.env.BACKEND_URL_BASE,
        PEER_PORT: process.env.PEER_PORT,
        PEER_HOST: process.env.PEER_HOST,
        WEBSOCKET_URL: process.env.WEBSOCKET_URL,
    }
}

module.exports = nextConfig
