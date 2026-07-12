# 第四章 平衡载流子

> **本章核心问题：** 如何计算热平衡状态下半导体中的载流子浓度？载流子浓度如何随温度和掺杂浓度变化？
>
> **核心思路：** 状态密度 × 费米分布函数 → 半导体中载流子浓度

---

### 4.1.1 热平衡态的基本概念

在没有外界作用的情况下，半导体材料具有统一的温度和确定的载流子浓度。热平衡时，电子和空穴的产生率等于复合率，达到**动态平衡**。此时：

- 导带电子浓度记为 $n_0$
- 价带空穴浓度记为 $p_0$

要计算载流子浓度，需要两个关键物理量：
1. **状态密度 $g(E)$**：单位能量间隔内的量子态数目
2. **费米分布函数 $f(E)$**：电子占据某一能级的概率

### 4.1.2 k 空间中的量子态密度

半导体中电子的允许能量状态用波矢 $\vec{k}$ 表示。在体积为 $V = L_x L_y L_z$ 的晶体中，$k$ 的取值是离散的：

$$k_x = \frac{2\pi n_x}{L_x}, \quad k_y = \frac{2\pi n_y}{L_y}, \quad k_z = \frac{2\pi n_z}{L_z}$$

其中 $n_x, n_y, n_z$ 为任意整数。

每个 $k$ 状态占据的 $k$ 空间体积为 $(2\pi)^3/V$。考虑电子有两种自旋取向（自旋简并度为 2），$k$ 空间中单位体积的状态数为：

$$\frac{2V}{(2\pi)^3}$$


> **理解注释：** 这里的"乘以2"非常重要——每个空间量子态可以容纳自旋向上和自旋向下两个电子，所以状态数要翻倍。

### 4.1.3 导带状态密度 g<sub>c</sub>(E) :material-target: **考点**{: .md-tag }

**等能面：** $k$ 空间中能量相等的点构成的曲面。对于自由电子，等能面是球面；对于半导体中的电子，需区分不同材料：

- **GaAs（砷化镓）：** 导带极小值在布里渊区中心（$\Gamma$ 点），等能面是**球面**，有效质量各向同性
- **Si（硅）：** 导带极小值不在布里渊区中心，等能面是**旋转椭球面**，有 $s=6$ 个等价椭球
- **Ge（锗）：** 等能面也是旋转椭球面，有 $s=4$ 个等价椭球

**推导思路：** 计算能量在 $E$ 到 $E+\Delta E$ 之间的 $k$ 空间体积，再乘以 $k$ 空间状态密度。

对于各向同性情况（球形等能面），导带底附近 $E(k) - E_c = \frac{\hbar^2 k^2}{2m_n^*}$，可得：

$$g_c(E) = \frac{V(2m_{cn}^*)^{3/2}}{2\pi^2\hbar^3}(E - E_c)^{1/2}$$

其中 $m_{cn}^*$ 为**导带电子状态密度有效质量**。


对于各向异性情况（椭球等能面），引入状态密度有效质量：

$$m_{cn}^* = (s^2 \cdot m_l^* \cdot m_t^{*2})^{1/3}$$

使得各向异性和各向同性的状态密度表达式形式一致。

**状态密度的特点：**
- $g_c(E)$ 与 $\sqrt{E - E_c}$ 成正比，呈抛物线关系
- 能量越高，状态密度越大
- 仅适用于能带极值附近
- 有效质量越大，状态密度越大


**常见半导体有效质量（300K）：**

| 材料 | 椭球数 $s$ | $m_{cn}^*/m_0$ |
|:---:|:---:|:---:|
| Si | 6 | 0.26 |
| Ge | 4 | 0.22 |
| GaAs | 1 | 0.067 |

### 4.1.4 价带状态密度 g<sub>v</sub>(E)

价带顶附近，空穴的状态密度为：

$$g_v(E) = \frac{V(2m_{pv}^*)^{3/2}}{2\pi^2\hbar^3}(E_v - E)^{1/2}$$

其中 $m_{pv}^*$ 为**价带空穴状态密度有效质量**。价带有重空穴带和轻空穴带，需将两者的贡献相加：

$$m_{pv}^* = \left[(m_{hh}^*)^{3/2} + (m_{lh}^*)^{3/2}\right]^{2/3}$$

**常见半导体价带有效质量（300K）：**

| 材料 | $m_{hh}^*/m_0$ | $m_{lh}^*/m_0$ | $m_{pv}^*/m_0$ |
|:---:|:---:|:---:|:---:|
| Si | 0.49 | 0.16 | 0.36 |
| Ge | 0.28 | 0.044 | 0.22 |

### 小结

1. 状态密度 $g(E)$ 描述的是单位能量间隔内可容纳电子的量子态数目
2. 导带状态密度 $g_c(E) \propto (E - E_c)^{1/2}$，从导带底 $E_c$ 向上递增
3. 价带状态密度 $g_v(E) \propto (E_v - E)^{1/2}$，从价带顶 $E_v$ 向下递增
4. 状态密度与有效质量的 3/2 次方成正比——有效质量越大，可用的量子态越多
5. 不同半导体材料因能带结构不同，有效质量和等能面形状各异

---


---

## 📑 课件截图

以下为4.1 状态密度与费米分布相关课件页面，点击图片可放大查看。

### 第7次课

<div class="courseware-gallery" markdown>

<figure markdown="1">
![第7次课 p2](../assets/images/courseware/04-平衡载流子/l07-p02.png)
<figcaption>第7次课 - p2</figcaption>
</figure>

<figure markdown="1">
![第7次课 p6](../assets/images/courseware/04-平衡载流子/l07-p06.png)
<figcaption>第7次课 - p6</figcaption>
</figure>

<figure markdown="1">
![第7次课 p7](../assets/images/courseware/04-平衡载流子/l07-p07.png)
<figcaption>第7次课 - p7</figcaption>
</figure>

<figure markdown="1">
![第7次课 p8](../assets/images/courseware/04-平衡载流子/l07-p08.png)
<figcaption>第7次课 - p8</figcaption>
</figure>

<figure markdown="1">
![第7次课 p9](../assets/images/courseware/04-平衡载流子/l07-p09.png)
<figcaption>第7次课 - p9</figcaption>
</figure>

<figure markdown="1">
![第7次课 p10](../assets/images/courseware/04-平衡载流子/l07-p10.png)
<figcaption>第7次课 - p10</figcaption>
</figure>

<figure markdown="1">
![第7次课 p11](../assets/images/courseware/04-平衡载流子/l07-p11.png)
<figcaption>第7次课 - p11</figcaption>
</figure>

<figure markdown="1">
![第7次课 p12](../assets/images/courseware/04-平衡载流子/l07-p12.png)
<figcaption>第7次课 - p12</figcaption>
</figure>

<figure markdown="1">
![第7次课 p13](../assets/images/courseware/04-平衡载流子/l07-p13.png)
<figcaption>第7次课 - p13</figcaption>
</figure>

<figure markdown="1">
![第7次课 p14](../assets/images/courseware/04-平衡载流子/l07-p14.png)
<figcaption>第7次课 - p14</figcaption>
</figure>

<figure markdown="1">
![第7次课 p15](../assets/images/courseware/04-平衡载流子/l07-p15.png)
<figcaption>第7次课 - p15</figcaption>
</figure>

<figure markdown="1">
![第7次课 p16](../assets/images/courseware/04-平衡载流子/l07-p16.png)
<figcaption>第7次课 - p16</figcaption>
</figure>

<figure markdown="1">
![第7次课 p17](../assets/images/courseware/04-平衡载流子/l07-p17.png)
<figcaption>第7次课 - p17</figcaption>
</figure>

<figure markdown="1">
![第7次课 p18](../assets/images/courseware/04-平衡载流子/l07-p18.png)
<figcaption>第7次课 - p18</figcaption>
</figure>

<figure markdown="1">
![第7次课 p19](../assets/images/courseware/04-平衡载流子/l07-p19.png)
<figcaption>第7次课 - p19</figcaption>
</figure>

<figure markdown="1">
![第7次课 p20](../assets/images/courseware/04-平衡载流子/l07-p20.png)
<figcaption>第7次课 - p20</figcaption>
</figure>

<figure markdown="1">
![第7次课 p21](../assets/images/courseware/04-平衡载流子/l07-p21.png)
<figcaption>第7次课 - p21</figcaption>
</figure>

<figure markdown="1">
![第7次课 p22](../assets/images/courseware/04-平衡载流子/l07-p22.png)
<figcaption>第7次课 - p22</figcaption>
</figure>

<figure markdown="1">
![第7次课 p23](../assets/images/courseware/04-平衡载流子/l07-p23.png)
<figcaption>第7次课 - p23</figcaption>
</figure>

<figure markdown="1">
![第7次课 p24](../assets/images/courseware/04-平衡载流子/l07-p24.png)
<figcaption>第7次课 - p24</figcaption>
</figure>

<figure markdown="1">
![第7次课 p25](../assets/images/courseware/04-平衡载流子/l07-p25.png)
<figcaption>第7次课 - p25</figcaption>
</figure>

<figure markdown="1">
![第7次课 p26](../assets/images/courseware/04-平衡载流子/l07-p26.png)
<figcaption>第7次课 - p26</figcaption>
</figure>

<figure markdown="1">
![第7次课 p27](../assets/images/courseware/04-平衡载流子/l07-p27.png)
<figcaption>第7次课 - p27</figcaption>
</figure>

<figure markdown="1">
![第7次课 p28](../assets/images/courseware/04-平衡载流子/l07-p28.png)
<figcaption>第7次课 - p28</figcaption>
</figure>

<figure markdown="1">
![第7次课 p29](../assets/images/courseware/04-平衡载流子/l07-p29.png)
<figcaption>第7次课 - p29</figcaption>
</figure>

<figure markdown="1">
![第7次课 p30](../assets/images/courseware/04-平衡载流子/l07-p30.png)
<figcaption>第7次课 - p30</figcaption>
</figure>

<figure markdown="1">
![第7次课 p31](../assets/images/courseware/04-平衡载流子/l07-p31.png)
<figcaption>第7次课 - p31</figcaption>
</figure>

<figure markdown="1">
![第7次课 p32](../assets/images/courseware/04-平衡载流子/l07-p32.png)
<figcaption>第7次课 - p32</figcaption>
</figure>

<figure markdown="1">
![第7次课 p33](../assets/images/courseware/04-平衡载流子/l07-p33.png)
<figcaption>第7次课 - p33</figcaption>
</figure>

<figure markdown="1">
![第7次课 p34](../assets/images/courseware/04-平衡载流子/l07-p34.png)
<figcaption>第7次课 - p34</figcaption>
</figure>

<figure markdown="1">
![第7次课 p35](../assets/images/courseware/04-平衡载流子/l07-p35.png)
<figcaption>第7次课 - p35</figcaption>
</figure>

<figure markdown="1">
![第7次课 p36](../assets/images/courseware/04-平衡载流子/l07-p36.png)
<figcaption>第7次课 - p36</figcaption>
</figure>

</div>

*来源：曹荣荣老师课件*
