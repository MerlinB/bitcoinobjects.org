module.exports = {
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/docs/" }
    ],
    logo: "/bo_logo_small.svg",
    sidebar: ["/docs/"],
    sidebarDepth: 2,
    lastUpdated: "Last Updated"
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        rel: "mask-icon",
        href: "/bo_logo_small.svg"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"
      }
    ]
  ],
  description: "Self-descriptive JSON graphs on Bitcoin SV",
  title: "Bitcoin Objects"
};
