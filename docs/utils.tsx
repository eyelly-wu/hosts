import { readFileSync} from 'node:fs'
import { join} from 'node:path'

export function getHosts(name:string){
  let res = '${name}.hosts 文件内容信息获取异常\n\n具体原因如下：\n'

  try {
    res = readFileSync(join(__dirname,`../${name}.hosts`),{encoding:'utf-8'})
  } catch (error) {
    res+=error
  }

  return res
}
