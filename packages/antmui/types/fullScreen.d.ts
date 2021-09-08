import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface IFullScreenRef {
  show: () => void
  hide: () => void
}

export interface FullScreenProps extends ANTMUI.IBaseComponent {
  cref: React.MutableRefObject<IFullScreenRef | undefined>
  children: JSX.Element | string | JSX.Element[]
}

declare const FullScreen: ComponentClass<FullScreenProps>

export { FullScreen }
