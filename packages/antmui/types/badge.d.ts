import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface BadgeProps extends ANTMUI.IBaseComponent {
  dot?: boolean
  value?: string | number
  maxValue?: number
  children?: JSX.Element | JSX.Element[]
}

declare const Badge: ComponentClass<BadgeProps>

export { Badge }
