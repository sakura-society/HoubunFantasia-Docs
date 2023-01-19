import JoinIndex from "@site/src/components/free-get/free-get-index";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from '@docusaurus/Head';

export default function Upgrade(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="免费激活码" description="Get the latest developer experience from Lerna for your monorepo.">
      <Head>
        <script>new WOW().init();</script>
      </Head>
      <main>
        <JoinIndex />
      </main>
    </Layout>
  );
}
