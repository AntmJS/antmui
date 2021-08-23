import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface IMessageRef {
  show: (str: string) => void
  hide: () => void
}

export interface MessageProps extends ANTMUI.IBaseComponent {
  cref: React.MutableRefObject<IMessageRef | undefined>
}

declare const Message: ComponentClass<MessageProps>

export { Message }
