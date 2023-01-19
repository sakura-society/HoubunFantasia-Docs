import {
  EnvelopeIcon,
  AtSymbolIcon,
  DocumentDuplicateIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./join-index.module.css";
export default function HeroUpgrade(): JSX.Element {
  const MailCommand = "misaka10843@outlook.jp";
  const QQCommand = "3594254539";

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
          <div className="col col--7 margin-vert--xl wow fadeIn slow">
            <h1 className={styles.slogan}>
              <span>
                <span className={styles.slogan__highlight}>加快</span> 我们的
              </span>
              <span>游戏制作吧！</span>
            </h1>
            <p className={styles.description}>
              如果您有任何一项技能，我们都十分欢迎您加入我们的团队！<br></br>
              如果我们决定以买断制发布，您还可以获取分成！<br></br>
              请不要害羞，现在就加入我们吧！<br></br>
            </p>
            <p className={styles.description}>
              您可以在下方查询我们的职位！十分期待您的加入！
            </p>
            <p className={styles.description}>
              请注意！我们是为爱发电的团队，团队中的每一个小伙伴都是无私奉献<br></br>
              您可以不用向上班一样，但是我们还是希望能多多参与<br></br>
              如果您是希望找一份有收入的工作，那么我们可能不适合您
            </p>
          </div>
          <div className="col col--1" />
          <div className="col col--4">
            <div className={styles.commands_wrapper}>
              <div className={clsx("wow fadeIn slow", styles.commands_container)}>
                <h3>
                  <EnvelopeIcon
                    className={styles.commands_icon}
                    stroke="currentColor"
                    aria-hidden="true"
                  />{" "}
                  Mail
                </h3>
                <CopyToClipboard
                  text={MailCommand}
                  onCopy={() => {
                    setCopied(true);
                  }}
                >
                  <button
                    className={clsx(
                      "button button--lg button--block button--outline button--secondary",
                      styles.command
                    )}
                  >
                    <span className={styles.command__text}>
                      {MailCommand}
                    </span>
                    <DocumentDuplicateIcon className={styles.command__icon} />
                  </button>
                </CopyToClipboard>
              </div>
              <div className={clsx("wow fadeIn slow", styles.commands_container)}>
                <h3>
                  <AtSymbolIcon className={styles.commands_icon} stroke="currentColor" aria-hidden="true" />
                  QQ（请备注来意哦qwq）
                </h3>
                <CopyToClipboard
                  text={QQCommand}
                  onCopy={() => {
                    setCopied(true);
                  }}
                >
                  <button
                    className={clsx(
                      "button button--lg button--block button--outline button--secondary",
                      styles.command
                    )}
                  >
                    <span className={styles.command__text}>
                      {QQCommand}
                    </span>
                    <DocumentDuplicateIcon className={styles.command__icon} />
                  </button>
                </CopyToClipboard>
              </div>
              <div className={clsx("wow fadeIn slow delay-1s", styles.reaching_out)}>
                <h4>不知道怎么单独联系?</h4>
                <p>
                  那就去我们的社群/社区/网站/仓库来联系我们吧！<br></br>
                  请注意要@管理员哦qwq
                </p>
                <div className={styles.reaching_out__link_container}>
                  <a href="https://pd.qq.com/s/egfs0th8i" target="_blank">

                    <svg style={{ height: "1rem", width: "1rem" }}
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      className="margin-right--sm"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="2671"></path></svg>
                    QQ频道
                  </a>
                  <a href="https://twitter.com/kaosu_sensei" target="_blank">
                    <svg
                      style={{ height: "1rem", width: "1rem" }}
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="margin-right--sm"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                  <a href="https://github.com/sakura-society" target="_blank">
                    <svg
                      style={{ height: "1rem", width: "1rem" }}
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="margin-right--sm"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
