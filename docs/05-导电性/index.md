# 第五章 半导体的导电性

本章主要解决三个问题：
- **运动**：讨论载流子在外电场下的运动情况——漂移运动
- **概念**：介绍载流子运动过程中的阻碍因素——散射
- **规律**：讨论半导体的电导率、电阻率、迁移率随温度和杂质浓度的变化规律

---

### 载流子的三种运动形式 :material-target: **考点**{: .md-tag }

#### 1. 热运动

无外力时（无电场），一定温度下半导体中的载流子（自由电子）作无规则热运动，与其它粒子发生碰撞，遭到散射。热平衡时，自由电子的热运动是完全随机的、无规则的，**净电流为零**。

#### 2. 漂移运动

在施加电场作用下，载流子受到电场力作用产生的**定向运动**：
- 电子逆电场方向运动
- 空穴顺着电场方向运动

漂移运动会产生电流，称为**漂移电流**。

> **理想情况**：电子沿电场反方向做匀速直线运动。
> **实际情况**：电子在运动过程中不断遭到散射，运动轨迹是曲折的，但整体有一个沿电场反方向的净漂移。

#### 3. 扩散运动

若半导体中载流子浓度存在**浓度梯度**，载流子会从浓度高的地方向浓度低的方向定向扩散运动，会产生电流——**扩散电流**。

### 漂移运动与迁移率 :material-target: **考点**{: .md-tag }


#### 欧姆定律（以金属导体为例）

对于长为 $l$、截面积为 $s$ 的导体，两端加电压 $V$：

$$I = \frac{V}{R}$$

$$R = \rho \frac{l}{s}$$

其中 $\rho$ 为电阻率，单位为 $\Omega \cdot \text{cm}$。

**电导率**为电阻率的倒数：

$$\sigma = \frac{1}{\rho}$$

单位为 $\text{S/cm}$。

#### 欧姆定律的微分形式

在非均匀导体（如半导体）中，欧姆定律不能描述各处的电流情况，因此引入**电流密度** $J$：

$$J = \frac{\Delta I}{\Delta s}$$

单位为 $\text{A/cm}^2$，表示通过垂直于电场方向的单位面积的电流强度。

导体内部的电场强度为：

$$E = \frac{V}{l}$$

由 $I = V/R$ 和 $R = \rho l / s$ 可以推导出：

$$J = \frac{I}{s} = \frac{V}{Rs} = \frac{V}{l\rho} = \sigma E$$

$$\boxed{J = \sigma E}$$

这就是**欧姆定律的微分形式**，它将导体中某一点的电流密度与该处的电导率及电场强度联系起来。

**电导率 $\sigma$ 的影响因素**：载流子浓度、载流子的运动速度。

#### 漂移速度与漂移电流

外加电压下，导体内部的电子受电场力作用，沿着电场反方向作定向运动构成电流。这种运动称为**漂移运动**，定向运动的速度称为**漂移速度** $v_d$，常用**平均漂移速度** $\bar{v}_d$。

设导体内任意两截面 A 和 B 相距 $v_d t$，电子浓度为 $n$，则 AB 截面所围成体积内的电子数 $N = n s v_d t$，经过时间 $t$ 后全部流出 A 面，则：

**电流：**
$$I = \frac{q}{t} = \frac{-q n s v_d t}{t} = -q n s v_d$$

**电流密度：**
$$J = \frac{I}{s} = -q n v_d$$

#### 迁移率的定义


由 $J = \sigma E$ 和 $J = nq v_d$（取绝对值），可知：

- 电场恒定时，电子平均漂移速度恒定不变
- 电场强度增大时，电流密度也相应增大
- 平均漂移速度与电场强度成正比

定义：

$$v_d = \mu E$$

$$\mu = \left| \frac{v_d}{E} \right| \quad \text{（习惯取正值）}$$

**$\mu$ 称为载流子的迁移率**：单位场强下载流子的平均漂移速度，单位是 $\text{cm}^2/(\text{V} \cdot \text{s})$，反映了载流子在电场作用下运动能力的强弱。

#### 电导率与迁移率的关系

将 $v_d = \mu E$ 代入 $J = nq v_d$：

$$J = nq\mu E$$

又因为 $J = \sigma E$，所以：

$$\boxed{\sigma = nq\mu}$$

#### 半导体的漂移电流和迁移率

半导体中同时存在电子和空穴两种载流子：

- 导电电子在导带中运动，产生电流：$J_n = nq\mu_n E$
- 导电空穴在价带中运动，产生电流：$J_p = pq\mu_p E$

其中 $\mu_n$ 为电子迁移率，$\mu_p$ 为空穴迁移率。

**总电流密度：**

$$J = J_n + J_p = (nq\mu_n + pq\mu_p)E = \sigma E$$

**电导率：**

$$\boxed{\sigma = nq\mu_n + pq\mu_p}$$

不同半导体类型的电导率简化：

| 半导体类型 | 条件 | 电导率 |
|:---:|:---:|:---:|
| N 型 | $n \gg p$ | $\sigma \approx nq\mu_n$ |
| P 型 | $p \gg n$ | $\sigma \approx pq\mu_p$ |
| 本征 | $n = p = n_i$ | $\sigma = n_i q(\mu_n + \mu_p)$ |

> **重要结论**：电导率主要取决于多数载流子。

#### 电子迁移率与空穴迁移率的比较

- **$\mu_n > \mu_p$**：导带电子脱离了共价键，可以在半导体中自由运动；空穴实际上是共价键上电子在价键间运动。在相同电场下，导带电子的平均漂移速度更大，因此电子迁移率比空穴迁移率大。
- 迁移率数值大小可表示载流子在电场作用下运动的难易程度。

> **小结**：漂移运动是载流子在电场作用下的定向运动。迁移率 $\mu$ 是衡量载流子在电场中运动能力的物理量，定义为 $\mu = |v_d/E|$。电导率与载流子浓度和迁移率的关系为 $\sigma = nq\mu_n + pq\mu_p$。

### 散射机制 :material-target: **考点**{: .md-tag }

#### 散射的概念

**矛盾的产生**：对某一个电子进行受力分析，$a = -qE/m_n^*$，如果没有散射，$v_d$ 将随时间无限上升，$J$ 也应无限上升——这与 $J = \sigma E$（$J$ 与 $E$ 成正比）矛盾！

> **矛盾的产生源于散射的存在！** 散射实际上是用波的概念来解释碰撞。

**载流子散射的物理图像**：

- 无外场时：载流子做无规则热运动，与格点原子、杂质原子（离子）、其他载流子发生碰撞（散射）
- 有外场时：载流子在外场下定向漂移的同时遭到散射，运动速度和方向不断改变

**关键结论**：平均漂移速度在外力和散射共同作用下是一定的。加速度是常数，只存在于连续两次散射之间。

#### 散射的本质

晶格的**周期性势场遭到破坏**而存在附加势场，引起载流子发生不同状态 $k$ 的跃迁。

能够破坏周期性势场的因素：
1. **杂质**：电离杂质
2. **晶格振动**
3. **缺陷和位错**

**基本概念**：两次散射间运动的载流子被认为是真正意义上的自由载流子。两次散射间自由运动的平均路程称为**平均自由程**，所用的时间称为**平均自由时间** $\tau$。

#### 电离杂质散射

在电离施主或电离受主附近形成**库仑势场**，局部破坏了杂质附近的周期性势场，引起载流子的散射。

载流子靠近电离杂质后，其速度大小和（或）方向发生改变。

**散射概率 $P_i$**（描述散射的强弱，表示单位时间内一个载流子受到散射的次数）：

$$\boxed{P_i \propto N_i T^{-3/2}}$$

其中 $N_i$ 为离化的杂质浓度：
- N 型：$N_i = N_D$
- P 型：$N_i = N_A$
- 补偿半导体：$N_i = N_D + N_A$

**物理意义**：
- $N_i$ 越高，杂质浓度越大，散射概率越大
- 温度升高，载流子热运动速度增大，容易掠过电离杂质周围的库仑场，散射概率反而减小


#### 晶格振动散射（声子散射）

**晶格振动**：晶体中的原子并不是固定不动的，而是相对于自己的平衡位置进行热振动。由于原子之间的相互作用，每个原子的振动不是彼此无关的，一个原子的振动要依次传给其它原子。这种振动破坏了严格的晶格周期势，引起对载流子的**晶格散射**。

##### 格波的概念

- 格点原子的振动都是由若干个不同基本波动按照波的叠加原理组合而成的
- 每一个基本波动称为一个**格波**
- 与电子波类似，用波矢 $q$（$|q| = 2\pi/\lambda$）表示格波波长和传播方向
- 与电子波不同的是，一个波矢 $q$ 对应不止一个格波，取决于晶体原胞中的原子个数

##### 声学波与光学波

对锗、硅及 III-V 族化合物半导体，原胞中大多含有两个原子，对应于一个波矢 $q$ 就有**六个不同的格波**：
- **三个声学波**（低频）：原胞相邻两个原子振动方向**相同**
- **三个光学波**（高频）：原胞相邻两个原子振动方向**相反**

声学波和光学波都有一個纵波和两个横波：
- **横波**：起伏相间
- **纵波**：疏密相间

##### 声子——格波能量的量子化

格波的能量是不连续的、是量子化的。若格波频率为 $\omega_q$，其能量只能取：

$$E = \left(n + \frac{1}{2}\right)\hbar\omega_q, \quad n = 0, 1, 2, \ldots$$

频率为 $\omega_q$ 的格波的平均能量为：

$$\bar{E} = \frac{1}{2}\hbar\omega_q + \frac{1}{\exp\left(\frac{\hbar\omega_q}{k_0 T}\right) - 1} \cdot \hbar\omega_q$$

其中方括号部分 $\frac{1}{\exp(\hbar\omega_q/k_0T) - 1}$ 为**平均声子数** $\bar{n}_q$。

$\hbar\omega_q$ 称为**声子**，是格波能量的基本单元。电子与格波作用后能量变化是声子的整数倍。

##### 声学波散射

对电子起散射作用的主要是**长纵声波**（波长在几十个原子间距以上）。

散射机理：长纵声学波振动 $\rightarrow$ 原子排列疏密变化 $\rightarrow$ 附加电场 $\rightarrow$ 载流子散射

**散射概率：**

$$\boxed{P_s \propto T^{3/2}}$$

温度升高，晶格振动加剧，声学波散射增强。


##### 光学波散射

在化合物半导体（如 GaAs）中，长纵光学波振动引起的散射作用不可忽略。

散射机理：长纵光学波振动 $\rightarrow$ 离子疏密区 $\rightarrow$ 附加电场 $\rightarrow$ 载流子散射

**散射概率：**

$$\boxed{P_o \propto \frac{1}{\exp\left(\frac{\hbar\omega_q}{k_0 T}\right) - 1} = \bar{n}_q}$$

温度升高 $\rightarrow$ 平均声子数 $\bar{n}_q$ 增大 $\rightarrow$ $P_o$ 增大。

#### 其他散射机制

1. **等能谷间散射**：对 Ge、Si 等多能谷半导体，电子可以从一个能谷散射到另一个能谷（g 散射和 f 散射）。低温下谷间散射很小，高温下才考虑。

2. **中性杂质散射**：低温下未电离的杂质（中性杂质）对周期性势场有一定微扰作用而引起散射。散射概率 $P_N = \frac{20\hbar N_N}{\pi m_n^*}$，与温度无关。在很低温度下，杂质离化率低，$P_i$ 和 $P_s$ 都很小，中性杂质散射凸显。

3. **位错散射**：位错线不饱和键具有受主中心作用，俘获电子后成为一串负电中心，形成局部电场，散射概率与位错密度相关。

4. **载流子间散射**：载流子数量特别多（强简并）时才考虑。

#### 半导体主要散射机构总结

| 材料 | 主要散射机构 | 散射概率 |
|:---:|:---:|:---:|
| Si、Ge | 电离杂质散射 | $P_i \propto N_i T^{-3/2}$ |
| Si、Ge | 声学波散射 | $P_s \propto T^{3/2}$ |
| GaAs | 电离杂质散射 | $P_i \propto N_i T^{-3/2}$ |
| GaAs | 声学波散射 | $P_s \propto T^{3/2}$ |
| GaAs | 光学波散射 | $P_o \propto \bar{n}_q$ |

> **小结**：散射是载流子运动过程中遭到阻碍的根本原因。主要散射机构有电离杂质散射（$P_i \propto N_i T^{-3/2}$，温度升高散射减弱）和晶格振动散射（声学波 $P_s \propto T^{3/2}$，光学波 $P_o \propto \bar{n}_q$，温度升高散射增强）。不同半导体材料中起主导作用的散射机构不同。

---


---

## 📑 课件截图

以下为5.1 漂移与散射相关课件页面，点击图片可放大查看。

### 第11次课

<div class="courseware-gallery" markdown>

<figure markdown="1">
![第11次课 p3](../assets/images/courseware/05-导电性/l11-p03.png)
<figcaption>第11次课 - p3</figcaption>
</figure>

<figure markdown="1">
![第11次课 p4](../assets/images/courseware/05-导电性/l11-p04.png)
<figcaption>第11次课 - p4</figcaption>
</figure>

<figure markdown="1">
![第11次课 p5](../assets/images/courseware/05-导电性/l11-p05.png)
<figcaption>第11次课 - p5</figcaption>
</figure>

<figure markdown="1">
![第11次课 p7](../assets/images/courseware/05-导电性/l11-p07.png)
<figcaption>第11次课 - p7</figcaption>
</figure>

<figure markdown="1">
![第11次课 p8](../assets/images/courseware/05-导电性/l11-p08.png)
<figcaption>第11次课 - p8</figcaption>
</figure>

<figure markdown="1">
![第11次课 p9](../assets/images/courseware/05-导电性/l11-p09.png)
<figcaption>第11次课 - p9</figcaption>
</figure>

<figure markdown="1">
![第11次课 p10](../assets/images/courseware/05-导电性/l11-p10.png)
<figcaption>第11次课 - p10</figcaption>
</figure>

<figure markdown="1">
![第11次课 p11](../assets/images/courseware/05-导电性/l11-p11.png)
<figcaption>第11次课 - p11</figcaption>
</figure>

<figure markdown="1">
![第11次课 p12](../assets/images/courseware/05-导电性/l11-p12.png)
<figcaption>第11次课 - p12</figcaption>
</figure>

<figure markdown="1">
![第11次课 p13](../assets/images/courseware/05-导电性/l11-p13.png)
<figcaption>第11次课 - p13</figcaption>
</figure>

<figure markdown="1">
![第11次课 p14](../assets/images/courseware/05-导电性/l11-p14.png)
<figcaption>第11次课 - p14</figcaption>
</figure>

<figure markdown="1">
![第11次课 p15](../assets/images/courseware/05-导电性/l11-p15.png)
<figcaption>第11次课 - p15</figcaption>
</figure>

<figure markdown="1">
![第11次课 p16](../assets/images/courseware/05-导电性/l11-p16.png)
<figcaption>第11次课 - p16</figcaption>
</figure>

<figure markdown="1">
![第11次课 p17](../assets/images/courseware/05-导电性/l11-p17.png)
<figcaption>第11次课 - p17</figcaption>
</figure>

<figure markdown="1">
![第11次课 p18](../assets/images/courseware/05-导电性/l11-p18.png)
<figcaption>第11次课 - p18</figcaption>
</figure>

<figure markdown="1">
![第11次课 p19](../assets/images/courseware/05-导电性/l11-p19.png)
<figcaption>第11次课 - p19</figcaption>
</figure>

<figure markdown="1">
![第11次课 p20](../assets/images/courseware/05-导电性/l11-p20.png)
<figcaption>第11次课 - p20</figcaption>
</figure>

<figure markdown="1">
![第11次课 p21](../assets/images/courseware/05-导电性/l11-p21.png)
<figcaption>第11次课 - p21</figcaption>
</figure>

<figure markdown="1">
![第11次课 p22](../assets/images/courseware/05-导电性/l11-p22.png)
<figcaption>第11次课 - p22</figcaption>
</figure>

<figure markdown="1">
![第11次课 p23](../assets/images/courseware/05-导电性/l11-p23.png)
<figcaption>第11次课 - p23</figcaption>
</figure>

<figure markdown="1">
![第11次课 p24](../assets/images/courseware/05-导电性/l11-p24.png)
<figcaption>第11次课 - p24</figcaption>
</figure>

<figure markdown="1">
![第11次课 p25](../assets/images/courseware/05-导电性/l11-p25.png)
<figcaption>第11次课 - p25</figcaption>
</figure>

<figure markdown="1">
![第11次课 p26](../assets/images/courseware/05-导电性/l11-p26.png)
<figcaption>第11次课 - p26</figcaption>
</figure>

<figure markdown="1">
![第11次课 p27](../assets/images/courseware/05-导电性/l11-p27.png)
<figcaption>第11次课 - p27</figcaption>
</figure>

<figure markdown="1">
![第11次课 p28](../assets/images/courseware/05-导电性/l11-p28.png)
<figcaption>第11次课 - p28</figcaption>
</figure>

<figure markdown="1">
![第11次课 p29](../assets/images/courseware/05-导电性/l11-p29.png)
<figcaption>第11次课 - p29</figcaption>
</figure>

<figure markdown="1">
![第11次课 p30](../assets/images/courseware/05-导电性/l11-p30.png)
<figcaption>第11次课 - p30</figcaption>
</figure>

<figure markdown="1">
![第11次课 p31](../assets/images/courseware/05-导电性/l11-p31.png)
<figcaption>第11次课 - p31</figcaption>
</figure>

<figure markdown="1">
![第11次课 p32](../assets/images/courseware/05-导电性/l11-p32.png)
<figcaption>第11次课 - p32</figcaption>
</figure>

<figure markdown="1">
![第11次课 p33](../assets/images/courseware/05-导电性/l11-p33.png)
<figcaption>第11次课 - p33</figcaption>
</figure>

<figure markdown="1">
![第11次课 p34](../assets/images/courseware/05-导电性/l11-p34.png)
<figcaption>第11次课 - p34</figcaption>
</figure>

</div>

*来源：曹荣荣老师课件*
