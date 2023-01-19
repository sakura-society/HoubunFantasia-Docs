import clsx from "clsx";
import React from "react";
import styles from "./publish-with-lerna.module.css";

export default function PublishWithLerna(): JSX.Element {
  return (
    <section className="padding-vert--xl container wow fadeIn slow">
      <div className={clsx("row row--no-gutters shadow--md", styles.item)}>
        <div className={clsx("col col--6", styles.item__inner)}>
          <div>
            <h1 className="margin-bottom--md">多样化游玩系统</h1>
            <p className="margin-bottom--md">
              我们不仅仅开发主系统，我们还会开发音游系统/钓鱼系统/工作系统/露营系统/烹饪系统等等
              来配合剧情需要与增加游玩乐趣.
              并且让玩家怀有花一款游戏的钱买到了几款游戏一样的心情
            </p>
            <a className="button button--secondary" href="/docs/features/version-and-publish">
              系统详细
            </a>
          </div>
        </div>
        <div
          className="col col--6"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/background/parcel.avif')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
    </section>
  );
}
