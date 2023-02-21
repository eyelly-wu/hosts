
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
# github hosts generated by hosts-generator on 2023-02-22 03:13:30

# not found        github.com  # home page
# not found        collector.github.com  
# not found        api.github.com  
# not found        spotlights-feed.github.com  
# not found        events-feed.github.com  
# not found        gist.github.com  
# not found        central.github.com  
# not found        assets-cdn.github.com  
# not found        codeload.github.com  
# not found        raw.github.com  
# not found        github.io  # github pages
# not found        github.dev  # web editor
# not found        github.githubassets.com  # assets
# not found        avatars.githubusercontent.com  # avatars
185.199.109.133    avatars0.githubusercontent.com  
# not found        avatars1.githubusercontent.com  
# not found        avatars2.githubusercontent.com  
185.199.108.133    avatars3.githubusercontent.com  
# not found        avatars4.githubusercontent.com  
185.199.109.133    avatars5.githubusercontent.com  
185.199.108.133    favicons.githubusercontent.com  
185.199.110.133    user-images.githubusercontent.com  
185.199.110.133    raw.githubusercontent.com  
185.199.108.133    marketplace-screenshots.githubusercontent.com  
185.199.108.133    desktop.githubusercontent.com  
185.199.110.133    camo.githubusercontent.com  
185.199.111.133    media.githubusercontent.com  
185.199.110.133    objects.githubusercontent.com  
20.80.64.28        copilot-proxy.githubusercontent.com  
```
