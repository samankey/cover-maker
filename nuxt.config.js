export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "samnail-maker",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  css: ["~/assets/scss/global.scss"],

  styleResources: {
    scss: ["@/assets/scss/mixins.scss"],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  build: {
    optimizeCSS: true,

    extractCSS: {
      ignoreOrder: true,
    },
  },

  plugins: [
    "@/plugins/globalFnc.js",
    "@/plugins/globalComponents.js",
    { src: "~/plugins/notifications-ssr", ssr: true },
    { src: "~/plugins/notifications-client", ssr: false },
  ],

  buildModules: ["@nuxtjs/style-resources"],
};
