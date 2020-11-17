/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Anchor/cn.md'
import en from 'doc/pages/components/Anchor/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '01.base',
    title: locate(
      '基本用法 \n 基本的使用',
      'Base \n Basic usage'
    ),
    component: require('doc/pages/components/Anchor/example-01.base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Anchor/example-01.base.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
