import { ComponentClass } from 'react'

import ANTMUI from './normal'

export interface RateProps extends ANTMUI.IBaseComponent {
  /**
   * 评分星星大小
   * @default 20
   */
  size?: number
  /**
   * 当前评分,开发者需要通过 onChange 事件来更新 value 值，必填
   */
  value?: number
  /**
   * 最大评分
   * @default 5
   */
  max?: number
  /**
   * 星星间隔,单位根据环境自动转为 rpx 或 rem
   * @default 5
   */
  margin?: number
  /**
   * 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读
   */
  onChange?: (value: number) => void
}

declare const Rate: ComponentClass<RateProps>

export { Rate }
