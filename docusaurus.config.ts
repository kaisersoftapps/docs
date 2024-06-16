import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "KaiserSoft Apps Documentation Hub",
  tagline: "KaiserSoft Apps Documentation",
  favicon: "img/favicon.ico",

  // example
  // url: 'https://endiliey.github.io', // Your website URL
  // baseUrl: '/',
  // projectName: 'endiliey.github.io',
  // organizationName: 'endiliey',
  // trailingSlash: false,

  // Set the production url of your site here
  url: "https://kaisersoftapps.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kaisersoftapps", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
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
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
      {
        gtag: {
          trackingID: 'G-MVSZZG9F0H',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KaiserSoft`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'TUY9IHN7G2',

    //   // Public API key: it is safe to commit it
    //   apiKey: '3fae171b158457c884749e981f8e2c93',

    //   indexName: 'kaisersoftappsio',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: 'external\\.com|domain\\.com',

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: '/docs/', // or as RegExp: /\/docs\//
    //     to: '/',
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: 'search',

    //   // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    //   insights: false,

    //   //... other Algolia params
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
