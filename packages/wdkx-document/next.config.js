/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['zh-cn', 'en-us'],
        defaultLocale: 'zh-cn',
        localeDetection: false,
    },
    webpack5: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.md/,
            type: 'asset/source',
        })

        return config
    },
}

module.exports = nextConfig
