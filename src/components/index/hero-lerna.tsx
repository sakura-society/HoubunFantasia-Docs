import { ChevronRightIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./hero-lerna.module.css";
import { fontStyle } from "html2canvas/dist/types/css/property-descriptors/font-style";

export default function HeroLerna(): JSX.Element {
  const command = "npx lerna init";

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let t: NodeJS.Timeout;
    if (copied) {
      t = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [copied]);

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--8 margin-vert--xl">
            <a
              href="#"
              //target="_blank"
              rel="noreferrer"
              className={clsx("wow bounceIn", styles.callout)}
            >
              <span className="badge badge--primary callout__badge">Warning</span>
              <span className={styles.callout__text}>网站正在全力施工中!</span>
              <ChevronRightIcon className={styles.callout__icon} aria-hidden="true" />
            </a>
            <h1 className={clsx("wow fadeIn slow", styles.slogan)}>
              <span>一款主题以</span>
              <span className={styles.slogan__highlight}>芳文社漫画的 <br></br>同人游戏</span>
            </h1>
            <p className={clsx("wow fadeIn", styles.description)}>
              致力于在2D中还原芳文社Manga Time Kirara系列漫画中各个场景/角色/工作/功能/剧情的同人游戏
            </p>
            <div className="padding-vert--md row wow fadeIn slow delay-1s">
              <div className="col col--5">
                <a href="/docs/getting-started" className="button button--lg button--block button--primary">
                  获取游戏！
                </a>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.illustration}>
              <img src="images/logo.svg" className={styles.illustration__svg} />
            </div>
          </div>
        </div>
      </div>
      <iframe style={{
        height: "100px",
        width: "60%",
        marginLeft: "20%",
        marginRight: "20%",

      }} src="//music.163.com/outchain/player?type=2&id=448520086&auto=1&height=66"></iframe>
      <p style={{
        height: "100px",
        width: "60%",
        marginLeft: "20%",
        marginRight: "20%",
        textAlign: "center",
        fontStyle: "italic",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      }}>一边听合适的歌曲一边看吧qwq</p>
    </section >
  );
}
