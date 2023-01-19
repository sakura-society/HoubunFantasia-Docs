import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroLerna from "@site/src/components/index/hero-lerna";
import ProjectsUsingLerna from "@site/src/components/index/projects-using-lerna";
import PublishWithLerna from "@site/src/components/index/publish-with-lerna";
import PoweredByNx from "@site/src/components/index/powered-by-nx";
import AboutLerna from "@site/src/components/index/about-lerna";
import Head from '@docusaurus/Head';
import ReactPlayer from 'react-player'

// Render a YouTube video player

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (

    <Layout
      title="Kirara！"
      description="致力于在2D中还原芳文社Manga Time Kirara系列漫画中各个场景/角色/工作/功能/剧情的同人游戏

      "
    >
      <Head>
        <script>new WOW().init();</script>
      </Head>
      <main>
        <HeroLerna />
        <ProjectsUsingLerna />
        <PoweredByNx />
        <PublishWithLerna />
        <AboutLerna />
      </main>
    </Layout>
  );
}
