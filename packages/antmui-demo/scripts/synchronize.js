/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
var parse = require("markdown-to-ast").parse;
const template = require("../.template.js")
const { watch } = require('gulp')
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const target = path.resolve(process.cwd(), './src/pages')

if (
  process.argv.slice(2)[0] &&
  process.argv.slice(2)[0] === '--watch'
) {
  watch(['./docs/pages/**/*.md']).on('change', function (p) {
    const compName = p.split('/')[1]
    const isZhCN = p.includes('.zh-CN')
    synch(compName, p, isZhCN)
  })
  glob('./docs/pages/**/*.md', {}, function (err, files) {
    if (err) return console.error(err)
    createRouteConfig(files)
  })
} else {
  glob('./docs/pages/**/*.md', {}, function (err, files) {
    if (err) return console.error(err)
    files.forEach(item => {
      const compName = item.split('/')[3]
      const isZhCN = item.includes('.zh-CN')
      synch(compName, item, isZhCN)
    })

    createRouteConfig(files)
  })
}
/**
 * 文件同步
 * @param {*} compName 
 * @param {*} p 
 * @param {*} isZhCN 
 */
function synch(compName, p, isZhCN) {
  let imports = ``
  let jsx = ``
  let js = ``
  const markdownStr = fs.readFileSync(path.resolve(process.cwd(), p), 'utf-8')
  const AST = parse(markdownStr)
  AST.children.forEach((item, index) => {
    if (item.type === 'CodeBlock' && item.lang === 'js') {
      if (item.value.indexOf('import') === 0) {
        imports += item.value.replace('antmui', '../../../../antmui/src/index')
      } else {
        js += item.value
      }
    }
    if (item.type === 'CodeBlock' && item.lang === 'jsx') {
      const prvTitleIndex = findPrvTitle(index, AST)
      jsx += `
<div className="example-show">
  <div className="example-show-title">
  ${AST.children[prvTitleIndex].raw.replace('### ', '')}
  </div>
  ${item.value}
</div>
      `
    }
  })

  imports += `
import '../../../../antmui/src/style/components/${compName}.less'`

  let filePath = path.join(target, compName)
  let configPath = path.resolve(filePath, './index.config.ts')
  if (!fs.existsSync(filePath)) fs.mkdirSync(filePath)
  if (isZhCN) {
    filePath += '/index.zh-CN.js'
  } else {
    filePath += '/index.js'
  }

  fs.writeFileSync(filePath, template({ imports, js, jsx }), 'utf-8')
  fs.writeFileSync(configPath, `export default {}`, 'utf-8')
}
/**
 * 生成exmaple路由配置文件
 * @param {*} files 
 */
function createRouteConfig(files) {
  let content = ``
  files.forEach(item => {
    const compName = item.split('/')[3]
    content += `'pages/${compName}/index',
    `
  })
  const res = routerTemplate({ content: content })
  console.info(res)
  fs.writeFileSync(path.resolve(target, '../app.config.ts'), res, 'utf-8')
}

function firstWordUplower(s) {
  const res = s.split('')
  res[0] = res[0].toLocaleUpperCase()

  return res.join('')
}
/**
 * 寻找demo小标题下标
 * @param {*} index 
 * @param {*} AST 
 * @returns 
 */
function findPrvTitle(index, AST) {
  let prevTitleIndex = index
  while (AST.children[prevTitleIndex].type !== 'Header') {
    prevTitleIndex--
  }
  return prevTitleIndex
}

function routerTemplate(props) {
  return `
  export default {
    pages: [
      'pages/ui/index',
      ${props.content}
    ],
    window: {
      // 微信全局设置自定义导航栏
      navigationStyle: 'custom',
      // 支付宝全局设置自定义导航栏
      transparentTitle: 'always',
      titlePenetrate: 'YES',
  
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Taro模版',
      navigationBarTextStyle: 'black',
    },
  }`
}