import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Aurora",
  tagline: "Aurora Documentation Resources",
  favicon: "img/favicon.svg",

  url: "https://docs.getaurora.dev/",
  baseUrl: "/",

  future: {
    experimental_faster: true,
  },

  // GitHub pages deployment config.
  organizationName: "ublue-os",
  projectName: "aurora-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

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
          // Disables the landing page
          routeBasePath: "/",
          editUrl: "https://github.com/ublue-os/aurora-docs/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // algolia: {
    //   // FIXME: put valid stuff here
    //   // The application ID provided by Algolia
    //   appId: "H1LI1VATRI",
    //   Public API key: it is safe to commit it
    //   apiKey: "201fbeeb537ae90f533bedcb5a73230b",
    //   indexName: "projectbluefin",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },

    metadata: [
      {
        name: "keywords",
        content:
          "documentation, aurora, universalblue, linux, kde, podman, docker, cloudnative",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],

    // Social card that shows up on discord when you share it
    image: "img/meta.png",
    navbar: {
      title: "Aurora",
      logo: {
        alt: "Aurora Logo",
        src: "img/favicon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "baseSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://getaurora.dev/",
          label: "Website",
          position: "right",
        },
        {
          href: "https://universal-blue.discourse.group/",
          label: "Community",
          position: "right",
        },
        {
          href: "https://discord.gg/WEu6BdFEtp",
          label: "Feedback",
          position: "right",
        },
        {
          href: "https://github.com/ublue-os/aurora",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Universal Blue",
          items: [
            {
              label: "Bluefin",
              href: "https://projectbluefin.io",
            },
            {
              label: "Bazzite",
              href: "https://bazzite.gg/",
            },
            {
              label: "uCore",
              href: "https://github.com/ublue-os/ucore",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Answer Overflow",
              href: "https://www.answeroverflow.com/c/1072614816579063828",
            },
            {
              label: "Discord",
              href: "https://discord.gg/WEu6BdFEtp",
            },
            {
              label: "Forum",
              href: "https://universal-blue.discourse.group/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ublue-os/aurora",
            },
            {
              label: "Documentation on GitHub",
              href: "https://github.com/ublue-os/aurora-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aurora and Universal Blue`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
