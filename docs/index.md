# 半导体物理学

> 基于《半导体物理学（第8版）》（刘恩科等）课程课件整理的学习笔记
>
> 课程学习笔记 · 持续更新

<div class="sp-hero">
  <span>11 章 · 28 节</span>
</div>

---

## 概念云

<div class="sp-wordcloud" markdown="0">
<span class="sp-xxxl">能带论</span>
<span class="sp-xxl">费米能级</span>
<span class="sp-xl">pn结</span>
<span class="sp-xl">MOSFET</span>
<span class="sp-l">载流子</span>
<span class="sp-l">有效质量</span>
<span class="sp-l">迁移率</span>
<span class="sp-l">异质结</span>
<span class="sp-l">布洛赫定理</span>
<span class="sp-m">施主</span>
<span class="sp-m">受主</span>
<span class="sp-m">散射</span>
<span class="sp-m">漂移</span>
<span class="sp-m">扩散</span>
<span class="sp-m">MIS</span>
<span class="sp-m">超晶格</span>
<span class="sp-m">肖特基</span>
<span class="sp-s">表面态</span>
<span class="sp-s">量子阱</span>
<span class="sp-s">带隙</span>
<span class="sp-s">空穴</span>
<span class="sp-s">声子</span>
<span class="sp-s">击穿</span>
<span class="sp-s">C-V特性</span>
<span class="sp-s">平带电压</span>
<span class="sp-s">阈值电压</span>
<span class="sp-m">复合</span>
<span class="sp-s">俄歇</span>
<span class="sp-s">雪崩</span>
<span class="sp-m">欧姆接触</span>
<span class="sp-s">钉扎</span>
<span class="sp-s">准费米</span>
<span class="sp-l">金半接触</span>
<span class="sp-s">金刚石结构</span>
<span class="sp-s">闪锌矿</span>
<span class="sp-m">态密度</span>
<span class="sp-s">简并</span>
<span class="sp-s">玻尔兹曼</span>
<span class="sp-s">隧穿</span>
<span class="sp-m">电导率</span>
</div>

---

## 简介

半导体物理学是理解现代电子器件和光电器件的理论基础。本 Wiki 涵盖从**绪论与半导体发展**到**MOSFET 与异质结**的完整知识体系，共 11 章、28 节课。

核心线索：**从微观电子行为出发，理解宏观电学性质，最终指导半导体器件设计**。

## 知识脉络

<div markdown="0">

<svg class="sp-kmap" viewBox="0 0 1100 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="半导体物理 11 章知识脉络图">
  <title>半导体物理 11 章知识脉络图（微观 → 宏观）</title>
  <polyline points="50,120 150,75 250,170 350,85 450,165 550,90 650,170 750,85 850,165 950,90 1050,150" fill="none" stroke="var(--md-default-fg-color--lightest)" stroke-width="2" stroke-dasharray="5 5"/>
  <g font-family="Noto Sans SC, sans-serif" text-anchor="middle">
    <a href="01-绪论/"><circle class="sp-node" cx="50" cy="120" r="23" fill="#fff" stroke="#534AB7" stroke-width="2.5"/><image href="assets/images/chapter-01.svg" x="37" y="107" width="26" height="26"/><text class="sp-label" x="50" y="160">导论</text></a>
    <a href="02-电子状态/"><circle class="sp-node" cx="150" cy="75" r="23" fill="#fff" stroke="#534AB7" stroke-width="2.5"/><image href="assets/images/chapter-02.svg" x="137" y="62" width="26" height="26"/><text class="sp-label" x="150" y="115">电子状态</text></a>
    <a href="03-杂质和缺陷能级/"><circle class="sp-node" cx="250" cy="170" r="23" fill="#fff" stroke="#534AB7" stroke-width="2.5"/><image href="assets/images/chapter-03.svg" x="237" y="157" width="26" height="26"/><text class="sp-label" x="250" y="210">杂质能级</text></a>
    <a href="04-平衡载流子/"><circle class="sp-node" cx="350" cy="85" r="23" fill="#fff" stroke="#0F6E56" stroke-width="2.5"/><image href="assets/images/chapter-04.svg" x="337" y="72" width="26" height="26"/><text class="sp-label" x="350" y="125">平衡载流子</text></a>
    <a href="05-导电性/"><circle class="sp-node" cx="450" cy="165" r="23" fill="#fff" stroke="#0F6E56" stroke-width="2.5"/><image href="assets/images/chapter-05.svg" x="437" y="152" width="26" height="26"/><text class="sp-label" x="450" y="205">导电性</text></a>
    <a href="06-非平衡载流子/"><circle class="sp-node" cx="550" cy="90" r="23" fill="#fff" stroke="#0F6E56" stroke-width="2.5"/><image href="assets/images/chapter-06.svg" x="537" y="77" width="26" height="26"/><text class="sp-label" x="550" y="130">非平衡载流子</text></a>
    <a href="07-pn结与金属半导体接触/"><circle class="sp-node" cx="650" cy="170" r="23" fill="#fff" stroke="#854F0B" stroke-width="2.5"/><image href="assets/images/chapter-07.svg" x="637" y="157" width="26" height="26"/><text class="sp-label" x="650" y="210">pn结</text></a>
    <a href="08-金半接触/"><circle class="sp-node" cx="750" cy="85" r="23" fill="#fff" stroke="#854F0B" stroke-width="2.5"/><image href="assets/images/chapter-08.svg" x="737" y="72" width="26" height="26"/><text class="sp-label" x="750" y="125">金半接触</text></a>
    <a href="09-半导体表面与MIS结构/"><circle class="sp-node" cx="850" cy="165" r="23" fill="#fff" stroke="#185FA5" stroke-width="2.5"/><image href="assets/images/chapter-09.svg" x="837" y="152" width="26" height="26"/><text class="sp-label" x="850" y="205">表面MIS</text></a>
    <a href="10-MOSFET/"><circle class="sp-node" cx="950" cy="90" r="23" fill="#fff" stroke="#185FA5" stroke-width="2.5"/><image href="assets/images/chapter-10.svg" x="937" y="77" width="26" height="26"/><text class="sp-label" x="950" y="130">MOSFET</text></a>
    <a href="11-异质结/"><circle class="sp-node" cx="1050" cy="150" r="23" fill="#fff" stroke="#185FA5" stroke-width="2.5"/><image href="assets/images/chapter-11.svg" x="1037" y="137" width="26" height="26"/><text class="sp-label" x="1050" y="190">异质结</text></a>
  </g>
</svg>

<div class="sp-kmap-legend">
  <span><i style="background:#534AB7"></i>导论 / 微观基础</span>
  <span><i style="background:#0F6E56"></i>载流子与输运</span>
  <span><i style="background:#854F0B"></i>结型器件</span>
  <span><i style="background:#185FA5"></i>表面与器件</span>
</div>

</div>

## 快速导航

| 专题 | 章节 | 核心内容 |
|:---|:---|:---|
| **导论** | 第一章 | 半导体概念、研究内容、发展简史 |
| **微观基础** | 第二、三章 | 晶体结构、能带论、有效质量、杂质能级 |
| **载流子与输运** | 第四、五、六章 | 状态密度、费米分布、漂移散射、非平衡载流子 |
| **结型器件** | 第七、八章 | pn结、金半接触、肖特基二极管、欧姆接触 |
| **表面与器件** | 第九、十、十一章 | MIS结构、C-V特性、MOSFET、异质结、超晶格 |

## 学习入口

<div class="sp-cards">
  <div class="sp-card">
    <div class="sp-card__icon" style="background:#854F0B">复</div>
    <h3>考试复习</h3>
    <p>重点梳理、易错点与速记口诀，考前冲刺。</p>
    <a class="sp-card__link" href="exam-review/">进入 →</a>
  </div>
  <div class="sp-card">
    <div class="sp-card__icon" style="background:#185FA5">Σ</div>
    <h3>公式手册</h3>
    <p>按章节检索核心公式，支持一键复制。</p>
    <a class="sp-card__link" href="formula-reference/">进入 →</a>
  </div>
  <div class="sp-card">
    <div class="sp-card__icon" style="background:#0F6E56">共</div>
    <h3>共建仓库</h3>
    <p>Fork → 编辑 → PR，一起完善 Wiki。</p>
    <a class="sp-card__link" href="https://github.com/LiuandXu/semiconductor-physics-wiki">参与 →</a>
  </div>
</div>

## 参考教材

刘恩科, 朱秉升, 罗晋生 等.《半导体物理学（第8版）》. 电子工业出版社.

授课课件：共 28 份 PDF

## 使用说明

建议配合教材和课件一起学习。支持全文搜索，公式由 MathJax 渲染。每章末尾有知识脉络总结与核心公式速查表。点击右上角编辑图标可跳转到 GitHub 仓库贡献内容。

## 共建仓库

本 Wiki 完全开源，欢迎每一位半导体物理学习者和研究者共同完善！

[:fontawesome-brands-github: GitHub 仓库](https://github.com/LiuandXu/semiconductor-physics-wiki){ .md-button .md-button--primary }

**参与方式：**

1. :octicons-git-branch-16: **Fork** 仓库到你的账号
2. :octicons-pencil-16: 编辑或新增 `docs/` 目录下的 Markdown 文件
3. :octicons-git-pull-request-16: 提交 **Pull Request**，审核通过后即可合并
4. :octicons-comment-discussion-16: 每页底部设有评论区，欢迎讨论交流

编辑器推荐 [VS Code](https://code.visualstudio.com/) + [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 插件。

---

## 致谢

本 Wiki 的样式参考了 [OI Wiki](https://oi-wiki.org/)，基于 [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) 主题构建。
