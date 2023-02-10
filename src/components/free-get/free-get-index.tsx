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
              如果您能达到合格标准，我们会免费赠送游戏激活码！<br></br>
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
                  <a href="#" target="_blank">

                    <svg style={{ height: "1rem", width: "1rem" }}
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="margin-right--sm"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" p-id="2671"></path></svg>
                    暂时并没有开放呢
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
