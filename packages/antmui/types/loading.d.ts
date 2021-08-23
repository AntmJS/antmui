import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface LoadingProps extends ANTMUI.IBaseComponent {
  type?: 'primary' | 'similar'
}

declare const Loading: ComponentClass<LoadingProps>

export { Loading }
