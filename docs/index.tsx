import React, {
  Break,
  CodeBlock,
  H1,
  H2,
  Link,
  ListItem,
  UnorderList,
} from 'jsx-to-md'
import { getHosts } from './utils'

export default function () {
  return (
    <>
      <H1>概述</H1>
      用于优化部分国外网站由于 DNS 污染导致网页访问速度慢的问题
      <H1>原理</H1>
      实现上述目标依赖于如下工具提供的能力：
      <Break />
      <UnorderList>
        <ListItem>
          <Link href="https://github.com/eyelly-wu/hosts-generator">
            hosts-generator
          </Link>
          ：获取指定域名 IP 并生成 hosts 文件
        </ListItem>
        <ListItem>
          <Link href="https://github.com/features/actions">GitHub Actions</Link>
          ：定时任务，每10分钟自动更新 hosts
        </ListItem>
        <ListItem>
          <Link href="https://vercel.com/docs/concepts/functions/serverless-functions">
            Vercel Serverless Functions
          </Link>
          ：部署了函数接口，即使 GitHub 不能访问也能获取到最新的 hosts 文件
        </ListItem>
        <ListItem>
          <Link href="https://swh.app/zh">Switch Hosts</Link>
          ：可以灵活配置远程hosts，并且可以设置定时更新
        </ListItem>
      </UnorderList>
      <H1>域名列表</H1>
      <H2>GitHub</H2>
      这里罗列 `GitHub` 相关域名的hosts信息，如果域名有缺少的，可以在根目录下的
      `hgrc.js` 文件中进行补充
      <br />
      可以在 `Switch Hosts`
      配置远程URL：`https://hosts.eyelly.top/api/getHosts?name=github`
      来获取最新 hosts
      <CodeBlock langType="text" code={getHosts('github')} />
    </>
  )
}
