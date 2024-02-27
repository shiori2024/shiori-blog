---
icon: edit
title: Awtrix
date: 2021-07-21 14:24:43
category:
- DIY
tag:
- 分享
- 开源
- 技术
---
最近在b站上看了制作Awtrix像素时钟的视频非常心动，也想自己动手diy做一下，那么这篇blog就是记录我从零开始制作出一个成品的Awtrix像素时钟。
<!-- more -->
# Awtrix项目介绍
AWTRIX是一位德国作者的开源项目，其项目有高定制化，高可塑性，高组合性的特点，基于这个开源项目，我们只需自行购买基础的硬件、服务端和客户端。
[Awtrix官方文档](https://awtrixdocs.blueforcer.de/#/en-en/README)
# 起步
起步阶段，开始准备制作像素时钟的材料清单，决定要购买和用到哪些材料。
|         材料清单          |     |        |
|:-----------------:|:--------:|:--------:|
|        名称       |   数量   | 参考价格 |
|   ESP8266 cp2102  |     1    |    29    |
|  8*32 柔性点阵屏  |     1    |    55    |
| 5V 2A的电源适配器 |     1    |    18    |
|     电烙铁套装    |     1    |   37.5   |
|      502胶水      |     2    |     9    |
|   标准套件外壳等  |     1    |    100   |
|    剪线钳三件套   |     3    |    31    |
|        合计       |          |   279.5  |  
以上材料清单均为我个人网购选配，你可以根据自己需求进行购买，
像标准套件我就是购买图片中的套餐（太多零件了，懒
[![Awtrix_img1](https://s1.ax1x.com/2022/04/21/Lcge4s.jpg)](https://imgtu.com/i/Lcge4s)
# 材料到齐
我网购了这么多东西，终于到齐了，万事具备只差安装~
下面放图，一大波图片来袭


# 对ESP8266刷固件
因为我要使用到Awtrix服务端的功能，所以我要给它刷服务端的固件
[下载地址]()
插上micro usb连上电脑，打开我们的ide跑固件刷入ESP8266就可以啦

# 组装
然后就是对时钟外壳材料的拼装，用到的是椴木板材质，up主说这个材质更省成本
椴木板外壳材料放图


具体怎样组装的可以看这个[视频]()
将时钟整体组装后，放入柔性屏，放上扩散板，再用502胶水涂抹边框，贴合上深色亚克力板，接下来的操作就是焊接了。

# 焊接
主要是用电烙铁将电阻和一些排母等元件焊接在PCB板上