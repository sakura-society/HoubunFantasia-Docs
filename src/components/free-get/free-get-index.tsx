import {
  EnvelopeIcon,
  AtSymbolIcon,
  DocumentDuplicateIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./free-get-index.module.css";
export default function HeroUpgrade(): JSX.Element {
  const MailCommand = "misaka10843@outlook.jp";
  const QQCommand = "https://jq.qq.com/?_wv=1027&k=Hg0RpVVI";

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
                <span className={styles.slogan__highlight}>免费</span> 获取
              </span>
              <span>游戏激活码！</span>
            </h1>
            <p className={styles.description}>
              如果您觉得您是十分资深的芳文党，那您可以尝试这个项目！<br></br>
              我们会出一个需要有非常资深的芳文知识才能合格的问卷！<br></br>
              如果您能达到合格标准，我们会将您添加进抽奖池，如果中奖将免费赠送游戏激活码！<br></br>
            </p>
            <p className={styles.description}>
              您可以在左侧找到问卷填写链接，填写完成后请将截图发送到左侧中的联系方式，我们将在核实后发放激活码！
            </p>
            <p className={styles.description}>
              请注意！此页面并不为长期活动<br></br>
              并且请回答时不要依靠搜索引擎！<br></br>
              我们将保留一切解释权
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
                  QQ群
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
                <h4>芳文资深党测试！</h4>
                <p>
                  来测测您到底多么了解芳文社吧！<br></br>
                  请注意将分数截图发送到上方的联系方式中来获取激活码
                </p>
                <div className={styles.reaching_out__link_container}>
                  <a href="https://forms.office.com/r/EUpWuCdLEV" target="_blank">

                    <svg style={{ height: "1rem", width: "1rem" }}
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="margin-right--sm"><path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z" /></svg>
                    芳文狂想曲游戏制作方向调研
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
