import JoinIndex from "@site/src/components/join/join-index";
import JoinPosition from "@site/src/components/join/join-position";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ModernLerna from "@site/src/components/join/modern-lerna";
import Head from '@docusaurus/Head';

export default function Upgrade(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="加入我们" description="Get the latest developer experience from Lerna for your monorepo.">
      <Head>
        <script>new WOW().init();</script>
      </Head>
      <main>
        <JoinIndex />
        <JoinPosition />
      </main>
    </Layout>
  );
}
