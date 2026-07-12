# 第八章 金属-半导体接触

> 本章研究金属与半导体接触时的物理过程和电学特性，是半导体器件制备和应用的基础。核心问题：半导体器件的特性怎么测量？——用金属材料将半导体连接出来。这样的连接会遇到什么问题？接触面的载流子是怎么运动的？

---

### 理想金半接触的能带图 :material-target: **考点**{: .md-tag }

#### 8.1.1 金属功函数 :material-target: **考点**{: .md-tag }


**金属功函数** \$W_m$ 定义为真空能级 $E_0$ 与金属费米能级 $(E_F)_m$ 之间的能量之差：

$$
W_m = E_0 - (E_F)_m
$$

- $E_0$：真空中静止电子的能量（真空能级）
- $(E_F)_m$：金属的费米能级
- **物理意义**：一个起始能量等于费米能级的电子，从金属内部逸出到真空中所需要的最小能量

不同金属的功函数不同，呈周期性变化，与原子序数有关。例如：铯（Cs）约 1.93 eV，铂（Pt）约 5.36 eV。

#### 8.1.2 半导体功函数 :material-target: **考点**{: .md-tag }

**半导体功函数** $W_s$ 定义为真空能级 $E_0$ 与半导体费米能级 $(E_F)_s$ 之间的能量之差：

$$
W_s = E_0 - (E_F)_s
$$

**电子亲和能** $\chi$ 定义为真空能级与导带底 $E_c$ 之差：

$$
\chi = E_0 - E_c
$$

> 电子亲和能是半导体的固有属性，**不随杂质浓度变化**。

半导体功函数还可以写成：

$$
W_s = \chi + [E_c - (E_F)_s] = \chi + E_n
$$

其中 $E_n = E_c - (E_F)_s$。

**n型和p型半导体的功函数：**

- **N型**：$W_s = \chi + (E_c - E_F)$
- **P型**：$W_s = \chi + [E_g - (E_F - E_v)]$

**关键结论：**

- 杂质浓度不同，费米能级位置不同
- 对于同一半导体，电子亲和能 $\chi$ 相同
- **n型半导体**：掺杂浓度越大 → 费米能级越高 → 功函数越小
- **p型半导体**：掺杂浓度越大 → 费米能级越低 → 功函数越大

> 费米能级 $E_F$ 的物理意义：标志着电子填充能级的水平，是量子态基本上被电子占据或基本上空着的一个分界线。

#### 8.1.3 金半接触能带图


以金属与n型半导体接触为例，假定 $W_m > W_s$。

**接触前：** 金属和半导体有共同的真空能级 $E_0$，各自的费米能级不在同一水平上。

**接触过程（间隙从大到小）：**

1. **间隙较大时**（$D$ 远大于原子间距）：半导体中的电子向金属流动（因为 $E_{FS} > E_{Fm}$），金属表面带负电，半导体表面带正电。达到平衡时费米能级统一。接触电势差为：

$$
V_{ms} = V_m - V'_s = \frac{W_s - W_m}{q}
$$

2. **紧密接触时**（$D \to 0$）：随着 $D$ 减小，金属表面负电荷密度增加，半导体表面正电荷密度也增加。由于半导体中电荷密度的限制，正电荷分布在半导体表面相当厚的一层内，即**空间电荷区**。接触电势差一部分降落在金属-半导体表面之间，另一部分降落在空间电荷区。

3. **忽略间隙时**（$D = 0$）：$V_{ms}$ 可以忽略，接触电势差绝大部分降落在空间电荷区。此时：

$$
\frac{W_s - W_m}{q} = V_s
$$

**半导体一边的势垒高度：**

$$
qV_D = -qV_s = W_m - W_s
$$

**金属一边的势垒高度（肖特基势垒高度）：**

$$
q\phi_{ns} = qV_D + E_n = W_m - W_s + E_n = W_m - \chi
$$

> 这是一个非常重要的公式：肖特基势垒高度等于金属功函数减去半导体电子亲和能。

#### 四种金半接触情况

| 条件 | n型半导体 | p型半导体 |
|------|----------|----------|
| $W_m > W_s$ | **电子阻挡层**（电子耗尽，高电阻，能带向上翘） | **空穴反阻挡层**（空穴积累，低电阻，能带向上翘） |
| $W_m < W_s$ | **电子反阻挡层**（电子积累，低电阻，能带向下弯） | **空穴阻挡层**（空穴耗尽，高电阻，能带向下弯） |

**$W_m > W_s$，n型（阻挡层）的物理过程：**

1. $E_{FS}$ 高于 $E_{Fm}$
2. 半导体中的电子流向金属，金属表面带负电，半导体表面带正电
3. 半导体表面的电势低于体内的电势
4. 半导体表面的电势能高于体内的电势能
5. 能带向上弯曲，形成电子的势垒，表面电子浓度比体内少，空间电荷主要是电离施主
6. 多子耗尽 → 电子阻挡层（高阻）

**$W_m < W_s$，n型（反阻挡层）的物理过程：**

1. $E_{FS}$ 低于 $E_{Fm}$
2. 金属中的电子流向半导体，金属表面带正电，半导体表面带负电
3. 半导体表面的电势高于体内的电势
4. 能带向下弯曲，表面电子浓度比体内大得多
5. 多子堆积 → 高电导区域 → 电子反阻挡层

**$W_m < W_s$，p型（阻挡层）：** 金属中的电子流向半导体（等效于空穴从半导体流向金属），能带向下弯曲，空穴耗尽，形成空穴阻挡层（高阻）。

**$W_m > W_s$，p型（反阻挡层）：** 半导体中的电子流向金属，能带向上弯曲，空穴积累，形成高电导区域 → 空穴反阻挡层。


### 表面态对势垒高度的影响

#### 实验现象

实验发现：**势垒高度基本不受金属功函数影响**。不同的金属功函数相差很大，但金半接触时的势垒高度相差很小。

例如 n-Si 与不同金属接触的势垒高度：Au → 0.79 V，W → 0.67 V，差异远小于金属功函数的差异。

#### 表面态的来源

半导体表面周期性结构遭到破坏，在表面处产生**表面态**（悬挂键等），在禁带中形成一定的分布。

#### 表面态的类型

- **受主型表面态**：空着呈电中性，有电子时带负电
- **施主型表面态**：有电子呈电中性，空着时带正电

表面处存在一个距离价带顶 $q\phi_0$ 的能级，约为禁带宽度的 $1/3$：

$$
q\phi_0 \approx \frac{E_g}{3}
$$

#### 费米能级钉扎效应

存在表面态时，**即使不与金属接触**也会在半导体表面形成电子势垒，费米能级被"钉扎"（pinned）在表面态能级附近。

接触前后，半导体一侧的空间电荷不发生变化，势垒高度不变 —— **表面态电荷屏蔽了金属的影响**。

#### 钉扎效应的影响

- 肖特基二极管的反向漏电流特性、开关速度以及欧姆接触的电阻率对表面处理工艺极其敏感
- 器件参数重复性和稳定性下降
- 基于功函数差设计接触的传统方法失效

#### 解决方案

采用**表面钝化技术**（如生长钝化层或进行化学处理）以降低悬挂键密度，或通过引入超薄界面层调控界面电子结构，从而实现对势垒高度的更精确控制。


### 小结

本节核心知识框架：

1. **金属功函数** $W_m = E_0 - (E_F)_m$，由金属材料决定
2. **半导体功函数** $W_s = E_0 - (E_F)_s = \chi + E_n$，随掺杂浓度和类型变化
3. **电子亲和能** $\chi = E_0 - E_c$，半导体固有属性，不随掺杂变化
4. **金半接触势垒高度**：$q\phi_{ns} = W_m - \chi$（理想情况）
5. **四种接触情况**：$W_m > W_s$ 或 $W_m < W_s$ 分别对 n 型和 p 型形成阻挡层或反阻挡层
6. **表面态**会导致费米能级钉扎，使势垒高度基本不受金属功函数影响

---


---

## 📑 课件截图

以下为8.1 金半接触能带图相关课件页面，点击图片可放大查看。

### 第19次课

<div class="courseware-gallery" markdown>

<figure markdown="1">
![第19次课 p1](../assets/images/courseware/08-金半接触/l19-p01.png)
<figcaption>第19次课 - p1</figcaption>
</figure>

<figure markdown="1">
![第19次课 p2](../assets/images/courseware/08-金半接触/l19-p02.png)
<figcaption>第19次课 - p2</figcaption>
</figure>

<figure markdown="1">
![第19次课 p3](../assets/images/courseware/08-金半接触/l19-p03.png)
<figcaption>第19次课 - p3</figcaption>
</figure>

<figure markdown="1">
![第19次课 p4](../assets/images/courseware/08-金半接触/l19-p04.png)
<figcaption>第19次课 - p4</figcaption>
</figure>

<figure markdown="1">
![第19次课 p5](../assets/images/courseware/08-金半接触/l19-p05.png)
<figcaption>第19次课 - p5</figcaption>
</figure>

<figure markdown="1">
![第19次课 p6](../assets/images/courseware/08-金半接触/l19-p06.png)
<figcaption>第19次课 - p6</figcaption>
</figure>

<figure markdown="1">
![第19次课 p7](../assets/images/courseware/08-金半接触/l19-p07.png)
<figcaption>第19次课 - p7</figcaption>
</figure>

<figure markdown="1">
![第19次课 p8](../assets/images/courseware/08-金半接触/l19-p08.png)
<figcaption>第19次课 - p8</figcaption>
</figure>

<figure markdown="1">
![第19次课 p9](../assets/images/courseware/08-金半接触/l19-p09.png)
<figcaption>第19次课 - p9</figcaption>
</figure>

<figure markdown="1">
![第19次课 p10](../assets/images/courseware/08-金半接触/l19-p10.png)
<figcaption>第19次课 - p10</figcaption>
</figure>

<figure markdown="1">
![第19次课 p11](../assets/images/courseware/08-金半接触/l19-p11.png)
<figcaption>第19次课 - p11</figcaption>
</figure>

<figure markdown="1">
![第19次课 p12](../assets/images/courseware/08-金半接触/l19-p12.png)
<figcaption>第19次课 - p12</figcaption>
</figure>

<figure markdown="1">
![第19次课 p13](../assets/images/courseware/08-金半接触/l19-p13.png)
<figcaption>第19次课 - p13</figcaption>
</figure>

<figure markdown="1">
![第19次课 p14](../assets/images/courseware/08-金半接触/l19-p14.png)
<figcaption>第19次课 - p14</figcaption>
</figure>

<figure markdown="1">
![第19次课 p15](../assets/images/courseware/08-金半接触/l19-p15.png)
<figcaption>第19次课 - p15</figcaption>
</figure>

<figure markdown="1">
![第19次课 p16](../assets/images/courseware/08-金半接触/l19-p16.png)
<figcaption>第19次课 - p16</figcaption>
</figure>

<figure markdown="1">
![第19次课 p17](../assets/images/courseware/08-金半接触/l19-p17.png)
<figcaption>第19次课 - p17</figcaption>
</figure>

<figure markdown="1">
![第19次课 p18](../assets/images/courseware/08-金半接触/l19-p18.png)
<figcaption>第19次课 - p18</figcaption>
</figure>

<figure markdown="1">
![第19次课 p19](../assets/images/courseware/08-金半接触/l19-p19.png)
<figcaption>第19次课 - p19</figcaption>
</figure>

<figure markdown="1">
![第19次课 p20](../assets/images/courseware/08-金半接触/l19-p20.png)
<figcaption>第19次课 - p20</figcaption>
</figure>

<figure markdown="1">
![第19次课 p21](../assets/images/courseware/08-金半接触/l19-p21.png)
<figcaption>第19次课 - p21</figcaption>
</figure>

<figure markdown="1">
![第19次课 p22](../assets/images/courseware/08-金半接触/l19-p22.png)
<figcaption>第19次课 - p22</figcaption>
</figure>

<figure markdown="1">
![第19次课 p23](../assets/images/courseware/08-金半接触/l19-p23.png)
<figcaption>第19次课 - p23</figcaption>
</figure>

<figure markdown="1">
![第19次课 p24](../assets/images/courseware/08-金半接触/l19-p24.png)
<figcaption>第19次课 - p24</figcaption>
</figure>

<figure markdown="1">
![第19次课 p25](../assets/images/courseware/08-金半接触/l19-p25.png)
<figcaption>第19次课 - p25</figcaption>
</figure>

<figure markdown="1">
![第19次课 p26](../assets/images/courseware/08-金半接触/l19-p26.png)
<figcaption>第19次课 - p26</figcaption>
</figure>

<figure markdown="1">
![第19次课 p27](../assets/images/courseware/08-金半接触/l19-p27.png)
<figcaption>第19次课 - p27</figcaption>
</figure>

<figure markdown="1">
![第19次课 p28](../assets/images/courseware/08-金半接触/l19-p28.png)
<figcaption>第19次课 - p28</figcaption>
</figure>

<figure markdown="1">
![第19次课 p29](../assets/images/courseware/08-金半接触/l19-p29.png)
<figcaption>第19次课 - p29</figcaption>
</figure>

<figure markdown="1">
![第19次课 p30](../assets/images/courseware/08-金半接触/l19-p30.png)
<figcaption>第19次课 - p30</figcaption>
</figure>

<figure markdown="1">
![第19次课 p31](../assets/images/courseware/08-金半接触/l19-p31.png)
<figcaption>第19次课 - p31</figcaption>
</figure>

<figure markdown="1">
![第19次课 p32](../assets/images/courseware/08-金半接触/l19-p32.png)
<figcaption>第19次课 - p32</figcaption>
</figure>

<figure markdown="1">
![第19次课 p33](../assets/images/courseware/08-金半接触/l19-p33.png)
<figcaption>第19次课 - p33</figcaption>
</figure>

<figure markdown="1">
![第19次课 p34](../assets/images/courseware/08-金半接触/l19-p34.png)
<figcaption>第19次课 - p34</figcaption>
</figure>

<figure markdown="1">
![第19次课 p35](../assets/images/courseware/08-金半接触/l19-p35.png)
<figcaption>第19次课 - p35</figcaption>
</figure>

<figure markdown="1">
![第19次课 p36](../assets/images/courseware/08-金半接触/l19-p36.png)
<figcaption>第19次课 - p36</figcaption>
</figure>

<figure markdown="1">
![第19次课 p37](../assets/images/courseware/08-金半接触/l19-p37.png)
<figcaption>第19次课 - p37</figcaption>
</figure>

<figure markdown="1">
![第19次课 p38](../assets/images/courseware/08-金半接触/l19-p38.png)
<figcaption>第19次课 - p38</figcaption>
</figure>

</div>

*来源：曹荣荣老师课件*
