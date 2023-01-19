import React from "react";
import styles from "./join-position.module.css";
import clsx from "clsx";
export default function HowToUpgrade(): JSX.Element {
  return (
    <section className="padding-vert--xl container">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className={clsx("wow fadeIn slow", styles.slogan__highlight)}>职位列表</span>
      </h2>
      <div className="wow fadeIn slow delay-1s">
        <table className="rwd-table col col--auto">
          <tr>
            <th>职位</th>
            <th>简介</th>
            <th>类别</th>
            <th>数量</th>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>游戏开发</td>
            <td data-th="简介">负责游戏系统功能、剧情、玩法框架的设计及优化</td>
            <td data-th="类别">程序</td>
            <td data-th="数量">2-5</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>角色设计</td>
            <td data-th="简介">游戏角色的贴图制作，并能够制作与设计符合漫画角色中的待机、移动、攻击等动作</td>
            <td data-th="类别">美术</td>
            <td data-th="数量">2-8</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>游戏场景</td>
            <td data-th="简介">游戏场景的制作，能够尽量用像素贴图还原漫画中的场景</td>
            <td data-th="类别">美术</td>
            <td data-th="数量">4-6</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>系统策划</td>
            <td data-th="简介">根据游戏项目的系统架构编写系统及玩法功能文档</td>
            <td data-th="类别">策划</td>
            <td data-th="数量">1-2</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>剧情任务策划</td>
            <td data-th="简介">可以参考漫画剧情线设计规划制作，根据剧情策划提供的内容，细化任务流程，进行任务的设计和制作</td>
            <td data-th="类别">策划</td>
            <td data-th="数量">1-2</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior_Y}>暂</span>本地化制作</td>
            <td data-th="简介">负责游戏内文本内容的本地化工作（包括翻译及校对支持）</td>
            <td data-th="类别">运营</td>
            <td data-th="数量">2-4</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>音乐制作</td>
            <td data-th="简介">负责游戏的背景音乐制作</td>
            <td data-th="类别">美术</td>
            <td data-th="数量">2-4</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior}>缺</span>总策划</td>
            <td data-th="简介">负责所有的策划制作与审核，需要比较了解芳文社的大部分漫画</td>
            <td data-th="类别">策划</td>
            <td data-th="数量">1-2</td>
          </tr>
          <tr>
            <td data-th="职位"><span className={styles.prior_G}>饱和</span>总程序</td>
            <td data-th="简介">负责所有的程序制作与审核，需要比较了解Unity的使用</td>
            <td data-th="类别">程序</td>
            <td data-th="数量">1-2</td>
          </tr>
        </table>
        <p className={styles.description}>职位申请审核并不严格，可以放心申请！qwq</p>
        <p className={styles.description}>一人可申请多职，但是需要很好的安排职位工作哦！qwq</p>
        <p className={styles.description}>所有职位均为兼职，在有时间时上工即可！</p>
      </div>
    </section>
  );
}
