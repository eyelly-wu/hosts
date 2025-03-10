
# 概述
用于优化部分国外网站由于 DNS 污染导致网页访问速度慢的问题
# 原理
实现上述目标依赖于如下工具提供的能力：

* [hosts-generator](https://github.com/eyelly-wu/hosts-generator)：获取指定域名 IP 并生成 hosts 文件
* [GitHub Actions](https://github.com/features/actions)：定时任务，每60分钟自动更新 hosts
* [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)：部署了函数接口，即使 GitHub 不能访问也能获取到最新的 hosts 文件
* [Switch Hosts](https://swh.app/zh)：可以灵活配置远程 hosts，并且可以设置定时更新


# 域名列表

## GitHub
这里罗列 `GitHub` 相关域名的 hosts 信息，如果域名有缺少的，可以在根目录下的 `hgrc.js` 文件中进行补充<br />可以在 `Switch Hosts` 配置远程URL：`https://hosts.eyelly.top/api/getHosts?name=github` 来获取最新 hosts
```text
# github hosts generated by hosts-generator on 2025-03-10 13:03:54

192.30.255.113     github.com  # home page
140.82.114.22      collector.github.com  
192.30.255.116     api.github.com  
185.199.108.153    spotlights-feed.github.com  
185.199.108.153    events-feed.github.com  
192.30.255.113     gist.github.com  
140.82.113.22      central.github.com  
185.199.108.153    assets-cdn.github.com  
192.30.255.120     codeload.github.com  
185.199.111.133    raw.github.com  
185.199.108.153    github.io  # github pages
20.99.227.183      github.dev  # web editor
185.199.110.154    github.githubassets.com  # assets
185.199.109.133    avatars.githubusercontent.com  # avatars
185.199.111.133    avatars0.githubusercontent.com  
185.199.111.133    avatars1.githubusercontent.com  
185.199.109.133    avatars2.githubusercontent.com  
185.199.111.133    avatars3.githubusercontent.com  
185.199.111.133    avatars4.githubusercontent.com  
185.199.109.133    avatars5.githubusercontent.com  
185.199.109.133    favicons.githubusercontent.com  
185.199.108.133    user-images.githubusercontent.com  
185.199.109.133    raw.githubusercontent.com  
185.199.108.133    marketplace-screenshots.githubusercontent.com  
185.199.111.133    desktop.githubusercontent.com  
185.199.110.133    camo.githubusercontent.com  
185.199.108.133    media.githubusercontent.com  
185.199.108.133    objects.githubusercontent.com  
20.80.64.28        copilot-proxy.githubusercontent.com  
```

# 更有效的方案
通过修改 hosts 文件的方式虽说是可以缓解问题，但是使用过程中还是会出现不稳定情况，最稳妥的方式还是借助梯子探寻墙外世界，有时候我们需要访问到外网的服务，例如 `Google`、`Youtube`、`X`、`OpenAI（ChatGPT）` 等等。尤其是随着 AI 的盛行，外网的 AI 服务能辅助我们高效解决问题<br />
## 梯子的选择

* <b>自搭梯子</b>：目前最便宜的云服务器至少需要 `5$/月`，还不能考虑国内的云服务器（国内实名制，并且不能搭梯子，不合法），当然也可以白嫖云服务器，之前笔者有幸白嫖过微软的 Axure 云服务，有效期一年。限制就是一个月只有 15G 的流量，超出就收费，而且费用不低；当然也有其他云服务器厂商可以白嫖。
* <b>购买别人搭好的梯子</b>：目前是市面上可以分为两类
   * <b>按月收费</b>：每月固定收费的模式，流量不限制
   * <b>按量收费</b>：购买定额流量，使用时间不限制

综上所述：作为国内用户访问外网可以有多种选择，每个人情况不同选择也会不一样。笔者的话现目前不会再选择自搭梯子，原因是服务器太贵了，购买服务器只为了搭梯子的话就太奢侈了。然而我访问外网的需求有限，不会经常看外网电影啥的，偶尔刷刷 `TikTok` 小视频啥的，流量消耗不高（一个月 10GB 可能都用不上），所以我选择的是 `按量收费` 的梯子服务，15 块钱买 130GB 流量够我用上一年的。如果选择 `按月收费`，那么每个月都需要花费 15（按月收费且服务稳定的价格应该都不会低于 15），对我而言相当不划算
# 广告
如果你跟我情况类似，那么我很乐意推荐我正在使用的服务
## 特色

* 按流量计费，无到期时间
* 不限设备数，可多人在线，多客户端登录，可与朋友合租
* 不限速，YouTube 4K 也可以流畅观看，但 4K 很耗流量哦
* 60+IP  节点，覆盖 30+ 国家和地区
* 支持 Android、iOS、Windows、MacOS 等平台，有自研客户端
* 支持支付宝、微信、USDT 等付款


## 方案

* 2GB - 1 元（不推荐）
* 130GB - 14.9 元（强推）
* 420GB - 42 元
* 750GB - 69 元
* 1660GB - 138 元
* 3600GB - 279 元
* 10TB - 688 元


## 使用
该服务的官网完整的配套服务：如何上手，相关软件的安装，及后续的售后（目前我未遇到需要售后的情况），那么[开始使用](https://mojie.app/register?aff=yqKCB1qB)吧