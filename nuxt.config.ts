// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxtjs/fontaine",
        "nuxt-paypal"
    ],
    colorMode: {
        preference: 'light'
    },
    app: {
        head: {
            title: 'Фандрайзинг – «Скажи Гордеевой»',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
            link: [
                {rel: 'apple-touch-icon', sizes: "180x180", href: ""},
                {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"},
                {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"},
                {rel: "manifest", href: "/site.webmanifest"}
            ],
            script: [
                {src: "https://www.paypalobjects.com/donate/sdk/donate-sdk.js", defer: true}
            ],
            css: [
                '~/assets/fonts/proxima/stylesheet.css',
            ]
        }
    },
    components: true,
    images: {
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        }
    },
    paypal: {
        clientId: 'ASwuhBpJqSczQIY1cCD2qd3AgJ1KZ0amTiQYfvm7UsZlxpgxiD7REnt4on2kCwxgiU52bhDRiumgRI70',
    },
    devtools: {enabled: true}
})