# 第七章 pn结与金属-半导体接触

> 本章是半导体器件物理的核心内容，围绕两大类结构展开：
> 1. **金属-半导体接触**（金半接触）：分析金属与半导体接触后的能带弯曲、阻挡层与反阻挡层；
> 2. **pn结**：讨论pn结的形成、载流子分布、电流-电压特性以及击穿机制。

---

### 功函数与接触电势差

#### 金属的功函数

**金属功函数** $W_m$ 定义为：一个起始能量等于费米能级的电子，从金属内部逸出到真空中所需要的最小能量。

$$
W_m = E_0 - (E_F)_m
$$

其中：
- $E_0$：真空中静止电子的能量（真空能级）
- $(E_F)_m$：金属的费米能级

> **理解笔记**：功函数本质上是"电子逃逸金属所需的门槛能量"。功函数越大，电子越难逃出金属。不同金属的功函数不同，典型的如 Cs（1.93 eV）很低，Pt（5.36 eV）很高。

#### 半导体的功函数

**半导体功函数** $W_s$ 定义为真空能级 $E_0$ 与半导体费米能级 $E_{Fs}$ 之差：

$$
W_s = E_0 - E_{Fs}
$$

**电子亲和能** $\chi$：半导体导带底的电子逸出体外所需的最小能量：

$$
\chi = E_0 - E_c
$$

半导体功函数可以用电子亲和能表示：

- **n型半导体**：$W_s = \chi + (E_c - E_F) = \chi + E_n$
- **p型半导体**：$W_s = \chi + [E_g - (E_F - E_v)]$

其中 $E_n = E_c - E_F$ 是导带底到费米能级的距离。

> **理解笔记**：半导体的功函数与掺杂浓度和类型有关——费米能级随杂质浓度变化，因此功函数也相应变化。这是金半接触行为多样化的根源。

#### 费米能级的物理意义（回顾）

费米-狄拉克分布函数：

$$
f(E) = \frac{1}{1 + \exp\left(\frac{E - E_F}{k_0 T}\right)}
$$

**核心性质：**
- **T = 0 K 时**：$E < E_F$ 的量子态全部被电子占据（$f = 1$），$E > E_F$ 的量子态全部为空（$f = 0$）
- **T > 0 K 时**：$E = E_F$ 处 $f(E_F) = 1/2$，即费米能级是被占据概率为50%的能级
- **物理意义**：费米能级标志着电子填充能级的水平，是量子态基本上被占据或基本上空着的分界线

> 当 $E - E_F > 5k_0T$ 时，$f(E) < 0.007$（基本为空）；当 $E - E_F < -5k_0T$ 时，$f(E) > 0.993$（基本填满）。

### 小结

- 金属功函数 $W_m = E_0 - E_{Fm}$，是电子从费米能级逸出到真空的最小能量
- 半导体功函数 $W_s = E_0 - E_{Fs}$，与掺杂类型和浓度有关
- 电子亲和能 $\chi = E_0 - E_c$，只与半导体材料本身有关
- 费米能级是电子占据概率的分界线，决定了接触前后的电子流动方向

---


---

## 📑 课件截图

以下为7.1-7.2 接触与能带图相关课件页面，点击图片可放大查看。

### 第16次课

<div class="courseware-gallery" markdown>

<figure markdown="1">
![第16次课 p2](../assets/images/courseware/07-pn结与金属半导体接触/l16-p02.png)
<figcaption>第16次课 - p2</figcaption>
</figure>

<figure markdown="1">
![第16次课 p3](../assets/images/courseware/07-pn结与金属半导体接触/l16-p03.png)
<figcaption>第16次课 - p3</figcaption>
</figure>

<figure markdown="1">
![第16次课 p4](../assets/images/courseware/07-pn结与金属半导体接触/l16-p04.png)
<figcaption>第16次课 - p4</figcaption>
</figure>

<figure markdown="1">
![第16次课 p5](../assets/images/courseware/07-pn结与金属半导体接触/l16-p05.png)
<figcaption>第16次课 - p5</figcaption>
</figure>

<figure markdown="1">
![第16次课 p6](../assets/images/courseware/07-pn结与金属半导体接触/l16-p06.png)
<figcaption>第16次课 - p6</figcaption>
</figure>

<figure markdown="1">
![第16次课 p7](../assets/images/courseware/07-pn结与金属半导体接触/l16-p07.png)
<figcaption>第16次课 - p7</figcaption>
</figure>

<figure markdown="1">
![第16次课 p8](../assets/images/courseware/07-pn结与金属半导体接触/l16-p08.png)
<figcaption>第16次课 - p8</figcaption>
</figure>

<figure markdown="1">
![第16次课 p9](../assets/images/courseware/07-pn结与金属半导体接触/l16-p09.png)
<figcaption>第16次课 - p9</figcaption>
</figure>

<figure markdown="1">
![第16次课 p10](../assets/images/courseware/07-pn结与金属半导体接触/l16-p10.png)
<figcaption>第16次课 - p10</figcaption>
</figure>

<figure markdown="1">
![第16次课 p11](../assets/images/courseware/07-pn结与金属半导体接触/l16-p11.png)
<figcaption>第16次课 - p11</figcaption>
</figure>

<figure markdown="1">
![第16次课 p12](../assets/images/courseware/07-pn结与金属半导体接触/l16-p12.png)
<figcaption>第16次课 - p12</figcaption>
</figure>

<figure markdown="1">
![第16次课 p13](../assets/images/courseware/07-pn结与金属半导体接触/l16-p13.png)
<figcaption>第16次课 - p13</figcaption>
</figure>

<figure markdown="1">
![第16次课 p14](../assets/images/courseware/07-pn结与金属半导体接触/l16-p14.png)
<figcaption>第16次课 - p14</figcaption>
</figure>

<figure markdown="1">
![第16次课 p15](../assets/images/courseware/07-pn结与金属半导体接触/l16-p15.png)
<figcaption>第16次课 - p15</figcaption>
</figure>

<figure markdown="1">
![第16次课 p16](../assets/images/courseware/07-pn结与金属半导体接触/l16-p16.png)
<figcaption>第16次课 - p16</figcaption>
</figure>

<figure markdown="1">
![第16次课 p17](../assets/images/courseware/07-pn结与金属半导体接触/l16-p17.png)
<figcaption>第16次课 - p17</figcaption>
</figure>

<figure markdown="1">
![第16次课 p18](../assets/images/courseware/07-pn结与金属半导体接触/l16-p18.png)
<figcaption>第16次课 - p18</figcaption>
</figure>

<figure markdown="1">
![第16次课 p19](../assets/images/courseware/07-pn结与金属半导体接触/l16-p19.png)
<figcaption>第16次课 - p19</figcaption>
</figure>

<figure markdown="1">
![第16次课 p20](../assets/images/courseware/07-pn结与金属半导体接触/l16-p20.png)
<figcaption>第16次课 - p20</figcaption>
</figure>

<figure markdown="1">
![第16次课 p21](../assets/images/courseware/07-pn结与金属半导体接触/l16-p21.png)
<figcaption>第16次课 - p21</figcaption>
</figure>

<figure markdown="1">
![第16次课 p22](../assets/images/courseware/07-pn结与金属半导体接触/l16-p22.png)
<figcaption>第16次课 - p22</figcaption>
</figure>

<figure markdown="1">
![第16次课 p23](../assets/images/courseware/07-pn结与金属半导体接触/l16-p23.png)
<figcaption>第16次课 - p23</figcaption>
</figure>

<figure markdown="1">
![第16次课 p24](../assets/images/courseware/07-pn结与金属半导体接触/l16-p24.png)
<figcaption>第16次课 - p24</figcaption>
</figure>

<figure markdown="1">
![第16次课 p25](../assets/images/courseware/07-pn结与金属半导体接触/l16-p25.png)
<figcaption>第16次课 - p25</figcaption>
</figure>

<figure markdown="1">
![第16次课 p26](../assets/images/courseware/07-pn结与金属半导体接触/l16-p26.png)
<figcaption>第16次课 - p26</figcaption>
</figure>

<figure markdown="1">
![第16次课 p27](../assets/images/courseware/07-pn结与金属半导体接触/l16-p27.png)
<figcaption>第16次课 - p27</figcaption>
</figure>

<figure markdown="1">
![第16次课 p28](../assets/images/courseware/07-pn结与金属半导体接触/l16-p28.png)
<figcaption>第16次课 - p28</figcaption>
</figure>

<figure markdown="1">
![第16次课 p29](../assets/images/courseware/07-pn结与金属半导体接触/l16-p29.png)
<figcaption>第16次课 - p29</figcaption>
</figure>

<figure markdown="1">
![第16次课 p30](../assets/images/courseware/07-pn结与金属半导体接触/l16-p30.png)
<figcaption>第16次课 - p30</figcaption>
</figure>

<figure markdown="1">
![第16次课 p31](../assets/images/courseware/07-pn结与金属半导体接触/l16-p31.png)
<figcaption>第16次课 - p31</figcaption>
</figure>

<figure markdown="1">
![第16次课 p32](../assets/images/courseware/07-pn结与金属半导体接触/l16-p32.png)
<figcaption>第16次课 - p32</figcaption>
</figure>

<figure markdown="1">
![第16次课 p33](../assets/images/courseware/07-pn结与金属半导体接触/l16-p33.png)
<figcaption>第16次课 - p33</figcaption>
</figure>

<figure markdown="1">
![第16次课 p34](../assets/images/courseware/07-pn结与金属半导体接触/l16-p34.png)
<figcaption>第16次课 - p34</figcaption>
</figure>

<figure markdown="1">
![第16次课 p35](../assets/images/courseware/07-pn结与金属半导体接触/l16-p35.png)
<figcaption>第16次课 - p35</figcaption>
</figure>

<figure markdown="1">
![第16次课 p36](../assets/images/courseware/07-pn结与金属半导体接触/l16-p36.png)
<figcaption>第16次课 - p36</figcaption>
</figure>

<figure markdown="1">
![第16次课 p37](../assets/images/courseware/07-pn结与金属半导体接触/l16-p37.png)
<figcaption>第16次课 - p37</figcaption>
</figure>

<figure markdown="1">
![第16次课 p38](../assets/images/courseware/07-pn结与金属半导体接触/l16-p38.png)
<figcaption>第16次课 - p38</figcaption>
</figure>

<figure markdown="1">
![第16次课 p39](../assets/images/courseware/07-pn结与金属半导体接触/l16-p39.png)
<figcaption>第16次课 - p39</figcaption>
</figure>

<figure markdown="1">
![第16次课 p40](../assets/images/courseware/07-pn结与金属半导体接触/l16-p40.png)
<figcaption>第16次课 - p40</figcaption>
</figure>

<figure markdown="1">
![第16次课 p41](../assets/images/courseware/07-pn结与金属半导体接触/l16-p41.png)
<figcaption>第16次课 - p41</figcaption>
</figure>

<figure markdown="1">
![第16次课 p42](../assets/images/courseware/07-pn结与金属半导体接触/l16-p42.png)
<figcaption>第16次课 - p42</figcaption>
</figure>

<figure markdown="1">
![第16次课 p43](../assets/images/courseware/07-pn结与金属半导体接触/l16-p43.png)
<figcaption>第16次课 - p43</figcaption>
</figure>

<figure markdown="1">
![第16次课 p44](../assets/images/courseware/07-pn结与金属半导体接触/l16-p44.png)
<figcaption>第16次课 - p44</figcaption>
</figure>

<figure markdown="1">
![第16次课 p45](../assets/images/courseware/07-pn结与金属半导体接触/l16-p45.png)
<figcaption>第16次课 - p45</figcaption>
</figure>

<figure markdown="1">
![第16次课 p46](../assets/images/courseware/07-pn结与金属半导体接触/l16-p46.png)
<figcaption>第16次课 - p46</figcaption>
</figure>

</div>

*来源：曹荣荣老师课件*
