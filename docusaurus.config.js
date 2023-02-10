// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HuobunFantasia",
  tagline: "一款芳文同人游戏",
  url: "https://docs.sakurakoi.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.ico",
  organizationName: "sakura society",
  projectName: "website",
  deploymentBranch: "main",
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    require.resolve("@cmfcmf/docusaurus-search-local"),

  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sakura-society/HouBunFantasia-Website/tree/main/",
          sidebarCollapsed: false,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/helpers.css")],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],
  scripts: [
    // 字符串格式。
    'https://cdn.jsdelivr.net/npm/wowjs@1.1.3/dist/wow.min.js',
  ],
  stylesheets: [
    // 字符串格式。
    'https://cdn.bootcss.com/animate.css/4.1.1/animate.compat.css',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "W7AFDUEIGE",
        apiKey: "95785b7a78017aade2bc8b82ca965e24",
        indexName: "lerna",
        contextualSearch: false,
        searchPagePath: false,
      },
      // announcementBar: {
      //   id: "lerna-talks",
      //   content:
      //     'Do not miss Lerna talks at <a target="_blank" style="font-weight: bolder" rel="noopener noreferrer" href="https://nx.dev/conf?utm_source=lerna.js.org">NxConf on October 17!</a>',
      //   backgroundColor: "#9333EA",
      //   textColor: "#FFFFFF",
      //   isCloseable: false,
      // },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(248, 250, 252)',
          dark: 'rgb(17, 24, 39)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      metadata: [{
          name: "keywords",
          content: "芳文社,houbunsha,同人游戏,Unity,游戏,芳文狂想曲,Houbunfantasia"
        },
        {
          name: "description",
          content: "一款芳文社为主题的同人游戏.",
        },
        {
          name: "og:image",
          content: "https://lerna.js.org/images/og-image-lerna.png"
        },
      ],
      navbar: {
        title: "Kirara!",
        logo: {
          alt: "Logo",
          src: "images/favicon.ico",
          srcDark: "images/favicon-dark.ico",
        },
        items: [{
            type: "doc",
            docId: "/GameDev",
            position: "left",
            label: "游戏开发文档",
          },
          {
            type: "doc",
            docId: "/course",
            position: "left",
            label: "超·教程",
          },
          {
            to: "/join",
            label: "加入我们",
            position: "left"
          },
          {
            to: "/free-get",
            label: "免费激活码",
            position: "left"
          },
          {
            to: "/docs/kanborad",
            label: "项目看板",
            position: "right"
          },
          // {
          //   href: "https://nx.dev",
          //   className: "header-nxdev-link",
          //   "aria-label": "Nx documentation",
          //   position: "right",
          //   title: "Check Nx",
          //   label: "Nx",
          // },
          // {
          //   href: "https://nx.app",
          //   className: "header-nxdev-link",
          //   "aria-label": "Nx Cloud",
          //   position: "right",
          //   title: "Check Nx Cloud",
          //   label: "Nx Cloud",
          // },
          // {
          //   href: "https://nrwl.io",
          //   className: "header-nrwlio-link",
          //   "aria-label": "Nrwl consulting",
          //   position: "right",
          //   title: "Check Nrwl",
          //   label: "Nrwl",
          // },
          {
            href: "https://github.com/sakura-society/HouBunFantasia-Website",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
            title: "Github",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        links: [{
            title: "帮助",
            items: [{
                label: "帮助文档",
                to: "/docs/help",
              },
              {
                label: "QQ群",
                href: "https://jq.qq.com/?_wv=1027&k=Hg0RpVVI",
              },
            ],
          },
          {
            title: "社区",
            items: [{
                label: "Twitter",
                href: "https://twitter.com/kaosu_sensei",
              },
              {
                label: "GitHub",
                href: "https://github.com/sakura-society",
              },
              {
                label: "QQ群",
                href: "https://jq.qq.com/?_wv=1027&k=Hg0RpVVI",
              },
              {
                label: "bilibili",
                href: "https://space.bilibili.com/384576146",
              },
            ],
          },
          {
            title: "姊妹网站",
            items: [{
                label: "Sakura Society",
                href: "https://sakurakoyi.top",
              },
              {
                label: "kancolle-ohuraiN",
                href: "https://colle.sakurakoi.top/",
              },
            ],
          },
        ],
        copyright: `The license of the website is GPLv3. <br /> &copy; ${new Date().getFullYear()} Copyright Sakura Society.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;