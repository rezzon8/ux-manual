module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "The UX Manual",
    themeColor: "#3f51b5",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "no",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "GenerateSW"
  }
};
