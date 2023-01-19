
# 概述
用于优化部分国外网站由于 DNS 污染导致网页访问速度慢的问题
# 原理
实现上述目标依赖于如下工具提供的能力：
* [hosts-generator](https://github.com/eyelly-wu/hosts-generator)：获取指定域名 IP 并生成 hosts 文件
* [GitHub Actions](https://github.com/features/actions)：定时任务，每10分钟自动更新 hosts
* [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)：部署了函数接口，即使 GitHub 不能访问也能获取到最新的 hosts 文件
* [Switch Hosts](https://swh.app/zh)：可以灵活配置远程hosts，并且可以设置定时更新

# 域名列表

## GitHub
这里罗列 `GitHub` 相关域名的hosts信息，如果域名有缺少的，可以在根目录下的 `hgrc.js` 文件中进行补充<br />可以在 `Switch Hosts` 配置远程URL：`https://hosts.eyelly.top/api/getHosts?name=github` 来获取最新 hosts
```text
# github hosts generated by hosts-generator on 2023-01-20 00:21:58

192.30.255.113     github.com  # home page
140.82.114.21      collector.github.com  
192.30.255.117     api.github.com  
185.199.110.153    spotlights-feed.github.com  
185.199.111.153    events-feed.github.com  
192.30.255.113     gist.github.com  
140.82.112.22      central.github.com  
185.199.111.153    assets-cdn.github.com  
192.30.255.121     codeload.github.com  
185.199.108.133    raw.github.com  
185.199.111.153    github.io  # github pages
20.99.227.183      github.dev  # web editor
185.199.108.154    github.githubassets.com  # assets
185.199.108.133    avatars.githubusercontent.com  # avatars
185.199.111.133    avatars0.githubusercontent.com  
185.199.110.133    avatars1.githubusercontent.com  
185.199.108.133    avatars2.githubusercontent.com  
185.199.108.133    avatars3.githubusercontent.com  
185.199.110.133    avatars4.githubusercontent.com  
185.199.109.133    avatars5.githubusercontent.com  
185.199.111.133    favicons.githubusercontent.com  
185.199.109.133    user-images.githubusercontent.com  
185.199.108.133    raw.githubusercontent.com  
185.199.110.133    marketplace-screenshots.githubusercontent.com  
185.199.110.133    desktop.githubusercontent.com  
185.199.111.133    camo.githubusercontent.com  
185.199.109.133    media.githubusercontent.com  
185.199.109.133    objects.githubusercontent.com  
20.80.64.28        copilot-proxy.githubusercontent.com  
```
