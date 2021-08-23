import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface ProgressProps extends ANTMUI.IBaseComponent {
  /**
   * 元素的状态
   */
  status?: 'progress' | 'error' | 'success'
  /**
   * 元素的进度
   */
  percent?: number
  /**
   * 元素的规格
   */
  strokeWidth?: number
  /**
   * 是否隐藏文字
   */
  isHidePercent?: boolean
}

declare const Progress: ComponentClass<ProgressProps>

export { Progress }
