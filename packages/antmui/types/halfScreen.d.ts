import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface IHalfScreenRef {
  show: () => void
  hide: () => void
}

export interface HalfScreenProps extends ANTMUI.IBaseComponent {
  cref: React.MutableRefObject<IHalfScreenRef | undefined>
  title?: string
  subTitle?: string
  children: JSX.Element | string | JSX.Element[]
  onClose?: () => void
  onConfirm?: () => void
}

declare const HalfScreen: ComponentClass<HalfScreenProps>

export { HalfScreen }
