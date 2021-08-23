import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface IDialogRef {
  show: () => void
  hide: () => void
}

export interface DialogProps extends ANTMUI.IBaseComponent {
  cref: React.MutableRefObject<IDialogRef | undefined>
  children: JSX.Element | string | JSX.Element[]
  closeIconFontFamily?: string
  closeIconName?: string
  closeIconPosition?: 'top-left' | 'top-right' | 'bottom-center'
  onClose?: () => void
}

declare const Dialog: ComponentClass<DialogProps>

export { Dialog }
