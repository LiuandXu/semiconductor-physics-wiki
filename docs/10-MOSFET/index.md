# 第十章 MOSFET原理与基本结构


### 10.1.1 MOSFET简介

**MOSFET**（Metal-Oxide-Semiconductor Field-Effect Transistor，金属-氧化物-半导体场效应晶体管）是现代集成电路中最核心的器件。以小米玄戒O1处理器为例，采用第二代3nm工艺，在109 mm²的面积上集成了**190亿个晶体管**，足见MOSFET在芯片中的基础地位。

#### 前置知识回顾

学习MOSFET之前，需要掌握两块基础知识：

**1. pn结**
- **平衡pn结**：能带图、接触电势差 $V_D$
- **非平衡pn结**：能带图、载流子分布、J-V特性（整流特性）

正向偏压时，势垒高度降低，势垒区变窄，电流指数增长；反向偏压时，势垒高度上升，势垒区变宽，电流几乎为零。这就是pn结的**整流特性**。

**2. MIS结构（金属-绝缘体-半导体）**
- **理想MIS结构**：定性和定量分析 $Q_s \sim V_s$、理想C-V曲线
- **实际MIS结构**：功函数对C-V曲线的平移、绝缘层中电荷对C-V曲线的平移、四种电荷的分布与产生

MIS结构的等效电路为绝缘层电容 $C_0$ 与半导体电容 $C_s$ 串联：

$$C = \frac{1}{\frac{1}{C_0} + \frac{1}{C_s}}$$


**表面电荷 \$|Q_s|\$ 随表面势 $V_s$ 的变化**可分为五个区域：
- **积累区**：$V_s < 0$，多子（空穴）在表面堆积
- **平带**：$V_s = 0$，能带不弯曲
- **耗尽区**：$V_s > 0$，多子被排走
- **弱反型区**：$V_s$ 继续增大，少子开始出现
- **强反型区**：$V_s \geq 2V_B$，表面少子浓度超过体内多子浓度，$|Q_s|$ 随 $V_s$ 呈指数增长 $\exp\left(\frac{q|V_s|}{2k_0T}\right)$


#### MIS与MOSFET的关系

MIS和MOSFET都受**表面场效应调控**，不同的是：
- MIS只做MOSFET的**控制回路**（纵向电场控制表面电导）
- MOSFET相当于在MIS基础上加一个**水平回路**，将表面调制效果反映到**水平回路电流变化**上


#### 表面电导调控效应

表面电导是指**平行于表面**的电导，取决于表面层内**载流子的数量和迁移率**，将随表面势变化。通过**垂直表面方向**的电场可以对表面电导进行控制——这正是MOSFET工作的物理基础。

> **小结**：MOSFET的本质是利用MIS结构的表面场效应，通过栅极电压控制半导体表面的载流子浓度（即表面电导），进而控制源漏之间的水平电流。理解MIS结构的C-V特性和表面电荷行为是学习MOSFET的关键前提。

---


---

## 📑 课件截图

以下为10.1 MOSFET原理相关课件页面，点击图片可放大查看。

### 第24次课

<div class="courseware-gallery" markdown>

<figure markdown="1">
![第24次课 p1](../assets/images/courseware/10-MOSFET/l24-p01.png)
<figcaption>第24次课 - p1</figcaption>
</figure>

<figure markdown="1">
![第24次课 p2](../assets/images/courseware/10-MOSFET/l24-p02.png)
<figcaption>第24次课 - p2</figcaption>
</figure>

<figure markdown="1">
![第24次课 p3](../assets/images/courseware/10-MOSFET/l24-p03.png)
<figcaption>第24次课 - p3</figcaption>
</figure>

<figure markdown="1">
![第24次课 p4](../assets/images/courseware/10-MOSFET/l24-p04.png)
<figcaption>第24次课 - p4</figcaption>
</figure>

<figure markdown="1">
![第24次课 p5](../assets/images/courseware/10-MOSFET/l24-p05.png)
<figcaption>第24次课 - p5</figcaption>
</figure>

<figure markdown="1">
![第24次课 p6](../assets/images/courseware/10-MOSFET/l24-p06.png)
<figcaption>第24次课 - p6</figcaption>
</figure>

<figure markdown="1">
![第24次课 p7](../assets/images/courseware/10-MOSFET/l24-p07.png)
<figcaption>第24次课 - p7</figcaption>
</figure>

<figure markdown="1">
![第24次课 p8](../assets/images/courseware/10-MOSFET/l24-p08.png)
<figcaption>第24次课 - p8</figcaption>
</figure>

<figure markdown="1">
![第24次课 p9](../assets/images/courseware/10-MOSFET/l24-p09.png)
<figcaption>第24次课 - p9</figcaption>
</figure>

<figure markdown="1">
![第24次课 p10](../assets/images/courseware/10-MOSFET/l24-p10.png)
<figcaption>第24次课 - p10</figcaption>
</figure>

<figure markdown="1">
![第24次课 p11](../assets/images/courseware/10-MOSFET/l24-p11.png)
<figcaption>第24次课 - p11</figcaption>
</figure>

<figure markdown="1">
![第24次课 p12](../assets/images/courseware/10-MOSFET/l24-p12.png)
<figcaption>第24次课 - p12</figcaption>
</figure>

<figure markdown="1">
![第24次课 p13](../assets/images/courseware/10-MOSFET/l24-p13.png)
<figcaption>第24次课 - p13</figcaption>
</figure>

<figure markdown="1">
![第24次课 p14](../assets/images/courseware/10-MOSFET/l24-p14.png)
<figcaption>第24次课 - p14</figcaption>
</figure>

<figure markdown="1">
![第24次课 p15](../assets/images/courseware/10-MOSFET/l24-p15.png)
<figcaption>第24次课 - p15</figcaption>
</figure>

<figure markdown="1">
![第24次课 p16](../assets/images/courseware/10-MOSFET/l24-p16.png)
<figcaption>第24次课 - p16</figcaption>
</figure>

<figure markdown="1">
![第24次课 p17](../assets/images/courseware/10-MOSFET/l24-p17.png)
<figcaption>第24次课 - p17</figcaption>
</figure>

<figure markdown="1">
![第24次课 p18](../assets/images/courseware/10-MOSFET/l24-p18.png)
<figcaption>第24次课 - p18</figcaption>
</figure>

<figure markdown="1">
![第24次课 p19](../assets/images/courseware/10-MOSFET/l24-p19.png)
<figcaption>第24次课 - p19</figcaption>
</figure>

<figure markdown="1">
![第24次课 p20](../assets/images/courseware/10-MOSFET/l24-p20.png)
<figcaption>第24次课 - p20</figcaption>
</figure>

<figure markdown="1">
![第24次课 p21](../assets/images/courseware/10-MOSFET/l24-p21.png)
<figcaption>第24次课 - p21</figcaption>
</figure>

<figure markdown="1">
![第24次课 p22](../assets/images/courseware/10-MOSFET/l24-p22.png)
<figcaption>第24次课 - p22</figcaption>
</figure>

<figure markdown="1">
![第24次课 p23](../assets/images/courseware/10-MOSFET/l24-p23.png)
<figcaption>第24次课 - p23</figcaption>
</figure>

<figure markdown="1">
![第24次课 p24](../assets/images/courseware/10-MOSFET/l24-p24.png)
<figcaption>第24次课 - p24</figcaption>
</figure>

<figure markdown="1">
![第24次课 p25](../assets/images/courseware/10-MOSFET/l24-p25.png)
<figcaption>第24次课 - p25</figcaption>
</figure>

<figure markdown="1">
![第24次课 p26](../assets/images/courseware/10-MOSFET/l24-p26.png)
<figcaption>第24次课 - p26</figcaption>
</figure>

<figure markdown="1">
![第24次课 p27](../assets/images/courseware/10-MOSFET/l24-p27.png)
<figcaption>第24次课 - p27</figcaption>
</figure>

<figure markdown="1">
![第24次课 p28](../assets/images/courseware/10-MOSFET/l24-p28.png)
<figcaption>第24次课 - p28</figcaption>
</figure>

<figure markdown="1">
![第24次课 p29](../assets/images/courseware/10-MOSFET/l24-p29.png)
<figcaption>第24次课 - p29</figcaption>
</figure>

<figure markdown="1">
![第24次课 p30](../assets/images/courseware/10-MOSFET/l24-p30.png)
<figcaption>第24次课 - p30</figcaption>
</figure>

<figure markdown="1">
![第24次课 p31](../assets/images/courseware/10-MOSFET/l24-p31.png)
<figcaption>第24次课 - p31</figcaption>
</figure>

<figure markdown="1">
![第24次课 p32](../assets/images/courseware/10-MOSFET/l24-p32.png)
<figcaption>第24次课 - p32</figcaption>
</figure>

<figure markdown="1">
![第24次课 p33](../assets/images/courseware/10-MOSFET/l24-p33.png)
<figcaption>第24次课 - p33</figcaption>
</figure>

<figure markdown="1">
![第24次课 p34](../assets/images/courseware/10-MOSFET/l24-p34.png)
<figcaption>第24次课 - p34</figcaption>
</figure>

<figure markdown="1">
![第24次课 p35](../assets/images/courseware/10-MOSFET/l24-p35.png)
<figcaption>第24次课 - p35</figcaption>
</figure>

<figure markdown="1">
![第24次课 p36](../assets/images/courseware/10-MOSFET/l24-p36.png)
<figcaption>第24次课 - p36</figcaption>
</figure>

<figure markdown="1">
![第24次课 p37](../assets/images/courseware/10-MOSFET/l24-p37.png)
<figcaption>第24次课 - p37</figcaption>
</figure>

<figure markdown="1">
![第24次课 p38](../assets/images/courseware/10-MOSFET/l24-p38.png)
<figcaption>第24次课 - p38</figcaption>
</figure>

</div>

*来源：曹荣荣老师课件*
