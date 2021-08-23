import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface MiniBarProps extends ANTMUI.IBaseComponent {
  title?: string | React.ReactNode
  fixed?: boolean
  fixedPlaceholder?: boolean
  border?: boolean
  buttonColor?: 'white' | 'black'
  homeUrl: string
}

declare const MiniBar: ComponentClass<MiniBarProps>

export { MiniBar }
