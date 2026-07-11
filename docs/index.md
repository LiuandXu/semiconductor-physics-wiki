# 半导体物理学

> 基于《半导体物理学（第8版）》（刘恩科等）课程课件整理的学习笔记
>
> 授课教师：曹荣荣 | 笔记整理时间：2026 年春季学期

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

半导体物理学是理解现代电子器件和光电器件的理论基础。本 Wiki 涵盖从**晶体结构与能带论**到**MOSFET 与异质结**的完整知识体系，共 10 章、27 节课。

核心线索：**从微观电子行为出发，理解宏观电学性质，最终指导半导体器件设计**。

## 知识脉络

```mermaid
flowchart TD
    A["晶体结构"] --> B["电子状态与能带论"]
    B --> C["杂质与缺陷"]

    C --> D["有效质量"]
    C --> E["载流子浓度"]

    D --> F["导电性：漂移与散射"]
    F --> G["迁移率与电导率"]

    E --> H["pn结与金半接触与MIS"]
    H --> I["MOSFET与异质结与超晶格"]

    style A fill:#1a73e8,color:#fff,stroke:none
    style B fill:#4285f4,color:#fff,stroke:none
    style C fill:#7baaf7,color:#fff,stroke:none
    style D fill:#34a853,color:#fff,stroke:none
    style F fill:#34a853,color:#fff,stroke:none
    style G fill:#34a853,color:#fff,stroke:none
    style E fill:#ea8600,color:#fff,stroke:none
    style H fill:#ea8600,color:#fff,stroke:none
    style I fill:#ea8600,color:#fff,stroke:none
```

## 快速导航

| 专题 | 章节 | 核心内容 |
|:---|:---|:---|
| **微观基础** | 第二、三章 | 晶体结构、能带论、有效质量、杂质能级 |
| **载流子与输运** | 第四、五、六章 | 状态密度、费米分布、漂移散射、非平衡载流子 |
| **结型器件** | 第七、八章 | pn结、金半接触、肖特基二极管、欧姆接触 |
| **表面与器件** | 第九、十、十一章 | MIS结构、C-V特性、MOSFET、异质结、超晶格 |

## 参考教材

刘恩科, 朱秉升, 罗晋生 等.《半导体物理学（第8版）》. 电子工业出版社.

授课课件：曹荣荣老师（第02次课 ~ 第28次课，共 27 份 PDF）

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
