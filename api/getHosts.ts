import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export default function (req: VercelRequest, res: VercelResponse) {
  const { name } = req.query
  let hosts = ''
  try {
    hosts = readFileSync(join(__dirname, `../${name}.hosts`), {
      encoding: 'utf-8',
    })
  } catch (error) {
    hosts = `# 未能正确获取到对应的hosts，原因：${error}`
  }

  res.send(hosts)
}
