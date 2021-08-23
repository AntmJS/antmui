import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface ListProps extends ANTMUI.IBaseComponent {
  title?: string
  type?: 'list' | 'form'
  children: JSX.Element | JSX.Element[]
}

declare const List: ComponentClass<ListProps>

export { List }
