// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
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
            script: [],
            css: [
                '~/assets/fonts/proxima/stylesheet.css',
            ]
        }
    },
})