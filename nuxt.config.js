export default {
  ssr: false,

  target: "static",

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
  css: ["./assets/scss/global.scss"],

  styleResources: {
    scss: ["@/assets/scss/mixins.scss"],
  },

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
