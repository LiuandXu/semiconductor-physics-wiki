# 公式手册

> 按章节汇总半导体物理核心公式，便于复习速查。更多公式见各章「本章总结」中的核心公式速查表。

## 第二章 电子状态

- **有效质量** $m^* = \hbar^2 \left/ \left( \dfrac{d^2E}{dk^2} \right) \right.$
- **导带状态密度（三维）** $g_c(E) = \dfrac{4\pi}{h^3}(2m_n^*)^{3/2}\sqrt{E-E_c}$

## 第四章 平衡载流子

- **质量作用定律** $\boxed{n_0 p_0 = N_c N_v \exp\!\left(-\dfrac{E_g}{k_B T}\right)}$
- **本征载流子浓度** $\boxed{n_i = \sqrt{N_c N_v}\exp\!\left(-\dfrac{E_g}{2k_B T}\right)}$
- **导带有效状态密度** $N_c = 2\left(\dfrac{m_{cn}^* k_B T}{2\pi\hbar^2}\right)^{3/2}$

## 第五章 导电性

- **电导率** $\boxed{\sigma = n q \mu_n + p q \mu_p}$
- **迁移率** $\mu = \dfrac{q\tau}{m^*}$
- **爱因斯坦关系** $\boxed{\dfrac{D_n}{\mu_n} = \dfrac{D_p}{\mu_p} = \dfrac{k_B T}{q}}$

## 第六章 非平衡载流子

- **扩散电流** $J_n = q D_n \dfrac{dn}{dx},\quad J_p = -q D_p \dfrac{dp}{dx}$
- **小注入复合** $\Delta n(t) = \Delta n(0)\,e^{-t/\tau}$

## 第七章 pn 结

- **内建电势** $\boxed{V_{bi} = \dfrac{k_B T}{q}\ln\!\dfrac{N_A N_D}{n_i^2}}$
- **反向饱和电流密度** $J_s = q n_i^2\left(\dfrac{D_n}{L_n N_A} + \dfrac{D_p}{L_p N_D}\right)$

## 第九章 MIS 结构

- **平带电压** $V_{FB} = \phi_{ms} - \dfrac{Q_{ox}}{C_{ox}}$

## 第十章 MOSFET

- **阈值电压** $V_T = V_{FB} + 2\phi_F + \dfrac{\sqrt{2\varepsilon_s q N_A(2\phi_F)}}{C_{ox}}$
- **线性区电流** $I_D = \mu_n C_{ox}\dfrac{W}{L}\left[(V_G-V_T)V_D - \dfrac{V_D^2}{2}\right]$

---

> 本页为速查雏形，后续将按章节补全并接入各节锚点。
