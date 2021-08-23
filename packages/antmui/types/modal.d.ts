import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface IModalRef {
  show: () => void
  hide: () => void
}

export interface ModalProps extends ANTMUI.IBaseComponent {
  cref: React.MutableRefObject<IModalRef | undefined>
  title: string
  content?: string
  onConfirm: () => void
  confirmText: string
  onCancel?: () => void
  cancelText?: string
}

declare const Modal: ComponentClass<ModalProps>

export { Modal }
