import clsx from "clsx";
import React from "react";
import styles from "./powered-by-nx.module.css";
export default function PoweredByNx(): JSX.Element {
  return (
    <section className="padding-vert--xl container wow fadeIn slow">
      <div className={clsx("row row--no-gutters shadow--md", styles.item)}>
        <div
          className="col col--6"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/background/rocket.avif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className={clsx("col col--6", styles.item__inner)}>
          <div>
            <h1 className={clsx("margin-bottom--md", styles.item__title)}>
              还原原作剧情
            </h1>
            <p className="margin-bottom--md">
              我们会在一个游戏中致力于还原所有kirara系列漫画的剧情.
              比如您可以上午与智乃看店，下午与芝麻凛露营.
              我们会在保证游玩体验的情况下还原剧情，并且添加原创剧情来让两个剧情平滑过渡.
            </p>
            <a className="button button--secondary" href="/docs/features/run-tasks">
              查看剧情系统
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
