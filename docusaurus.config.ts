import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "KaiserSoft Apps Documentation Hub",
  tagline: "KaiserSoft Apps Documentation",
  favicon: "img/favicon.ico",

  url: "https://kaisersoftapps.github.io",
  baseUrl: "/docs",
  organizationName: "kaisersoftapps",
  projectName: "docs",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  staticDirectories: ['public', 'static'],
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
      }),
    ],
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: 'G-MVSZZG9F0H',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "KaiserSoft Apps Documentation",
      logo: {
        alt: "KaiserSoft Logo",
        src: "img/logo-0.0.4.png",
      },
      items: [
        { to: 'docs/script-master', label: 'Script Master', position: 'left' },
        { to: 'docs/event-planner', label: 'Event Planner', position: 'left' },
        { to: 'docs/team-voice', label: 'Team Voice', position: 'left' },
        { to: 'docs/field-craft', label: 'FieldCraft', position: 'left' },
        { to: 'docs/content-craft', label: 'ContentCraft', position: 'left' },
        { to: 'docs/secrets', label: 'Secrets', position: 'left' },
        { to: 'docs/config-master', label: 'ConfigMaster', position: 'left' },
        // { to: 'docs/host-checker', label: 'HostChecker', position: 'left' },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Marketplace",
          items: [
            {
              label: "All our apps",
              to: "https://marketplace.atlassian.com/vendors/1225884/",
            },
          ],
        },
        {
          title: "Youtube",
          items: [
            {
              label: "Guides, Tutorials and more",
              to: "https://www.youtube.com/@KaiserSoft",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KaiserSoft`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
