
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
# github hosts generated by hosts-generator on 2023-04-24 06:39:47

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
# not found        avatars0.githubusercontent.com  
# not found        avatars1.githubusercontent.com  
# not found        avatars2.githubusercontent.com  
# not found        avatars3.githubusercontent.com  
# not found        avatars4.githubusercontent.com  
# not found        avatars5.githubusercontent.com  
# not found        favicons.githubusercontent.com  
# not found        user-images.githubusercontent.com  
# not found        raw.githubusercontent.com  
# not found        marketplace-screenshots.githubusercontent.com  
# not found        desktop.githubusercontent.com  
# not found        camo.githubusercontent.com  
# not found        media.githubusercontent.com  
# not found        objects.githubusercontent.com  
# not found        copilot-proxy.githubusercontent.com  
```
