import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  baseSidebar: [
    {
      type: "category",
      label: "Installation",
      collapsed: false,
      items: [
        "guides/system-requirements",
        "guides/install-guide",
        "guides/installation-troubleshoot",
        "guides/alternate-install-guide",
      ],
    },
    {
      type: "category",
      label: "User Guides",
      collapsed: false,
      items: [
        "guides/basic-usage",
        "guides/start-icon",
        "guides/software",
        "guides/layerapp",
        "guides/secondary-drives",
        "guides/gaming",
        "guides/quadlet",
        "guides/rescue-mode",
        "guides/report-issues",
      ],
    },
    {
      type: "category",
      label: "Developer Experience",
      collapsed: false,
      items: [
        "dx/aurora-dx-intro",
        "guides/aurora-cli",
        "guides/local-ai",
        "dx/local-kubernetes",
        "dx/different-workflows",
      ],
    },
    {
      type: "category",
      label: "Miscellaneous",
      collapsed: false,
      items: ["reference/example", "guides/dino"],
    },
    {
      type: "category",
      label: "Project Information",
      collapsed: false,
      items: [
        "project-docs/credits",
        "project-docs/press-kit",
        "project-docs/coc",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      collapsed: false,
      items: ["guides/building"],
    },
  ],
};

export default sidebars;
