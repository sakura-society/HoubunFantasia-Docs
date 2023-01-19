/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  main: [
    "getting-started",
    {
      type: "category",
      label: "帮助",
      items: [
        "help/usual",
      ],
      link: {
        type: "generated-index",
        title: "帮助",
        description: "这里是客户端帮助页面，请自行选择一类进行QA",
        slug: "/help",
      },
    },
    {
      type: "category",
      label: "游戏开发文档",
      items: [
        "GameDev/start",
        "GameDev/audiomanager",
      ],
      link: {
        type: "generated-index",
        title: "游戏开发文档",
        description: "这里是游戏开发文档，开发者可以查看此文档来规范开发",
        slug: "/GameDev",
      },
    },
    {
      type: "category",
      label: "超·简单新手教程",
      items: [
        "course/start",
      ],
      link: {
        type: "generated-index",
        title: "超·简单新手教程",
        description: "真的是超·简单新手教程，书名标题竟然是！《芳文狂想曲-从入门到放弃-猴子都会的教程》",
        slug: "/course",
      },
    },
  ],
};

module.exports = sidebars;