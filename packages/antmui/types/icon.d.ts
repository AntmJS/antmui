import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface IconProps extends ANTMUI.IBaseComponent {
  fontFamily?: string
  name: string
}

declare const Icon: ComponentClass<IconProps>

export { Icon }
