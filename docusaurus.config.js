// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Reaxi",
  tagline: "code generation",
  url: "https://reaxi.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "reaxi", // Usually your GitHub org/user name.
  projectName: "reaxi", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/reaxi",
          routeBasePath: "docs/reaxi",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false ?? {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "plugin-system",
        path: "docs/plugin-system",
        routeBasePath: "docs/plugin-system",
        sidebarPath: require.resolve("./sidebarsDocs.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wksp",
        path: "docs/wksp",
        routeBasePath: "docs/wksp",
        sidebarPath: require.resolve("./sidebarsDocs.js"),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Reaxi",
        logo: {
          alt: "Reaxi Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            label: "Packages",
            position: "left",
            items: [
              {
                label: "reaxi",
                to: "/reaxi",
              },
              {
                label: "plugin-system",
                to: "/plugin-system",
              },
              {
                label: "wksp",
                to: "/wksp",
              },
            ],
          },
          /*  { to: "/blog", label: "Blog", position: "left" }, */
          {
            href: "https://github.com/reaxi",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/reaxi/intro",
              },
            ],
          },
          /*           {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          }, */
          {},
          {
            title: "More",
            items: [
              /*               {
                label: "Blog",
                to: "/blog",
              }, */
              {
                label: "GitHub",
                href: "https://github.com/reaxi",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reaxi, Org. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
