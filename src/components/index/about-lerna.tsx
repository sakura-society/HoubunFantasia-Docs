import {
  ClockIcon,
  CogIcon,
  CubeTransparentIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  ShareIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import styles from "./about-lerna.module.css";

interface Callout {
  title: string;
  text: string;
  link: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const callouts: Callout[] = [
  {
    title: "使用Unity制作",
    text:
      "相较于RPG Maker等软件，Unity2D能更好的扩展玩法，但是需要开发员一定基础",
    link: "/docs/GameDev/start",
    icon: (props) => (<svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unity" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M243.583 91.6027L323.695 138.384C326.575 140.026 326.68 144.583 323.695 146.225L228.503 201.854C225.623 203.55 222.22 203.444 219.549 201.854L124.357 146.225C121.425 144.636 121.373 139.973 124.357 138.384L204.417 91.6027V0L0 119.417V358.252L78.3843 312.477V218.914C78.3319 215.576 82.2066 213.192 85.0865 214.993L180.279 270.622C183.159 272.318 184.782 275.338 184.782 278.464V389.669C184.834 393.007 180.959 395.391 178.079 393.589L97.9673 346.808L19.583 392.583L224 512L428.417 392.583L350.033 346.808L269.921 393.589C267.093 395.338 263.114 393.06 263.218 389.669V278.464C263.218 275.126 265.051 272.159 267.721 270.622L362.914 214.993C365.741 213.245 369.72 215.47 369.616 218.914V312.477L448 358.252V119.417L243.583 0V91.6027Z"></path></svg>),
  },
  {
    title: "芳文党制作",
    text:
      "项目发起人是一个资深芳文党，以至于如果那个季度没有芳文番会直接怀疑世界！",
    link: "/docs/features/cache-tasks#distributed-computation-caching",
    icon: (props) => (<svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>),
  },
  {
    title: "保姆级教程(应该？)",
    text: "只要游玩完成本游戏新手教程，肯定就不会出现操作问题！(就算有那就直接去QQ频道/discord吐槽！)",
    link: "/docs/course",
    icon: (props) => (<svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="person-chalkboard" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M192 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"></path></svg>),
  },
  {
    title: "超多玩法",
    text:
      "虽然本游戏策划案都没写，但是我能保证你可以一边露营一边经营咖啡厅，亦或者打“它们”(实锤学园孤岛)",
    link: "/docs/features/run-tasks",
    icon: (props) => (<svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="infinity" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"></path></svg>),
  },
  {
    title: "社区支持",
    text: "我们创建了QQ频道以及discord，来为中国大陆或者海外用户提供社区服务，并且我们还有专业(划掉)的论坛来让玩家们快乐交流",
    link: "/join",
    icon: (props) => (<svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="satellite" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M233 7c-9.4-9.4-24.6-9.4-33.9 0l-96 96c-9.4 9.4-9.4 24.6 0 33.9l89.4 89.4-15.5 15.5C152.3 230.4 124.9 224 96 224c-31.7 0-61.5 7.7-87.8 21.2c-9 4.7-10.3 16.7-3.1 23.8L112.7 376.7 96.3 393.1c-2.6-.7-5.4-1.1-8.3-1.1c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32c0-2.9-.4-5.6-1.1-8.3l16.4-16.4L242.9 506.9c7.2 7.2 19.2 5.9 23.8-3.1C280.3 477.5 288 447.7 288 416c0-28.9-6.4-56.3-17.8-80.9l15.5-15.5L375 409c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9l-89.4-89.4 55-55c12.5-12.5 12.5-32.8 0-45.3l-48-48c-12.5-12.5-32.8-12.5-45.3 0l-55 55L233 7zm159 351l-72.4-72.4 62.1-62.1L454.1 296 392 358.1zM226.3 192.4L153.9 120 216 57.9l72.4 72.4-62.1 62.1z"></path></svg>),
  },
  {
    title: "不支持联机！",
    text:
      "虽然我们非常希望能添加联机功能，但是服务器的花费、技术原因等不能让我们开启联机功能，还请谅解！",
    link: "/docs/getting-started#visualizing-workspace",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM406.6 416.4L220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3zm-290-228.5L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9z"></path></svg>
    ),
  },
  {
    title: "日常贴贴の剧情(尽量还原原作！)",
    text:
      "我们可以肯定我们的剧情是完美的日常贴贴剧情，并且会尽量还原原作！绝不可能有刀子的！(学园孤岛:？)",
    link: "/docs/getting-started",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compass-drafting" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192h0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496V440.6c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1V496c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"></path></svg>
    ),
  },
  {
    title: "存档加密",
    text:
      "我们会将存档加密，以防止玩家通过修改存档的方式来修改游戏，嘿嘿，都给我肝！",
    link: "/docs/getting-started",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
        <path fill="currentColor" d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z"></path>
      </svg>
    ),
  },
  {
    title: "你想帮忙制作，那就来吧！",
    text:
      "我们在Github/Plastic/Crowdin都开源了我们的游戏工程/文本翻译，您可以直接参与到我们的开发中！(但是最好还是先添加下联系方式www)",
    link: "/join",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
        <path fill="currentColor" d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path>
      </svg>
    ),
  },
  {
    title: "多平台支持(大概)",
    text:
      "我们会考虑支持手机平台！让没有电脑的小伙伴也能体验游戏！",
    link: "/docs/getting-started",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
        <path fill="currentColor" d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
      </svg>
    ),
  },
  {
    title: "No free to play",
    text:
      "我们最多最多只会出买断制，绝对不会内置充值系统！(也就是免费游玩但内置充值)或者您可以通过问卷回答来获取资格(芳文向问卷)",
    link: "/docs/help/usual#q1为什么要付费",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
        <path fill="currentColor" d="M192 96H320l47.4-71.1C374.5 14.2 366.9 0 354.1 0H157.9c-12.8 0-20.4 14.2-13.3 24.9L192 96zm128 32H192c-3.8 2.5-8.1 5.3-13 8.4l0 0 0 0C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96H416c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4zM289.9 336l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47z"></path>
      </svg>
    ),
  },
  {
    title: "I18N支持",
    text:
      "包含英语+日语+Kirara语言(雾)！但是还是求有掌握英语/日语或者kirara语的小伙伴能提供翻译！",
    link: "https://crowdin.com/project/houbunfantasia",
    icon: (props) => (
      <svg {...props} fill="currentColor" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
        <path fill="currentColor" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"></path>
      </svg>
    ),
  },
];

function Callout(props: Callout): JSX.Element {
  return (
    <div className={clsx("margin-top--xl card shadow--lw", styles.callout)}>
      <div className="card__header">
        <h3 className={styles.callout__title}>
          <props.icon className={styles.callout__icon} stroke="currentColor" aria-hidden="true" />
          {props.title}
        </h3>
      </div>
      <div className="card__body">
        <p>
          <a href={props.link} className={styles.callout__link}>
            <span className="link--inset" aria-hidden="true"></span>
            {props.text}
          </a>
        </p>
      </div>
      <div className={styles.callout__bottom} />
    </div>
  );
}

export default function AboutLerna(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <div className={clsx("row margin-bottom--xl wow fadeInLeft slow", styles.hero)}>
        <div className="col col--8">
          <div>
            <h1 className={clsx("margin-bottom--lg", styles.hero__title)}>什么是芳文狂想曲?</h1>
            <p className={clsx("margin-bottom--md", styles.hero__text)}>
              芳文幻想曲是一个2D RPG轻百日常类游戏，使用unity制作，以芳文社漫画为主的一个同人游戏
              此游戏制作初心就是希望以开放世界来连接kirara系列漫画的所有世界
              并且让玩家体验到漫画中的剧情与情节
              还原各个场景/角色/工作/功能/剧情
            </p>
            <p className={clsx("margin-bottom--md", styles.hero__text)}>
              我们是为爱发电的团队，并且十分缺人，如果您愿意贡献您的力量，您可以去往{" "}
              <a href="/join">加入我们页面</a>, 我们十分希望有小伙伴能加入我们来加速开发速度！
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {callouts.map((c) => (
          <div key={c.title} className="col col--4 wow fadeIn slow">
            <Callout title={c.title} text={c.text} link={c.link} icon={c.icon} />
          </div>
        ))}
      </div>
      <br></br>
      <p style={{
        height: "100px",
        width: "60%",
        marginLeft: "20%",
        marginRight: "20%",
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      }}>点击上方卡片可以跳转到对应页面qwq</p>
    </section>
  );
}
