/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    workerThreads: true,
    concurrentFeatures: true,
    reactDomFiber: true,
    serverComponents: true,
    optimizeServerComponents: true,
    imageOptimization: true,
    imageTransform: true,
    imageCDN: true,
    cpus: 5,
  },
};

export default nextConfig;
