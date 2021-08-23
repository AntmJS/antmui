import { ComponentClass } from 'react'

import ANTMUI from './normal'

export interface Item {
  /**
   * 列表项内容
   */
  name: string

  [propName: string]: any
}

export interface ListItem {
  /**
   * 列表标题
   */
  title: string
  /**
   * 右侧导航标题
   */
  key: string
  /**
   * 列表项
   */
  items: Array<Item>
}

export interface IndexesProps
  extends Omit<ANTMUI.IBaseComponent, 'animation' | 'onClick'> {
  /**
   * 是否开启跳转过渡动画
   * @default false
   */
  animation?: boolean
  /**
   * 右侧导航第一个名称
   * @default Top
   */
  topKey?: string
  /**
   * 是否切换 key 的震动
   * **注意：** 只在微信小程序有效
   * @default true
   */
  isVibrate?: boolean

  /**
   * 列表
   */
  list: Array<ListItem>
  /**
   * 点击列表项触发事件
   */
  onClick?: (item: Item) => void
  /**
   * 获取跳转事件跳转到指定 key
   */
  onScrollIntoView?: (fn: (key: string) => void) => void
}

export interface IndexesState {
  _scrollIntoView: string
  _scrollTop: number
  isWEB: boolean
}

declare const Indexes: ComponentClass<IndexesProps>

export { Indexes }
