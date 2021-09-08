import type { InputProps } from '@tarojs/components/types/Input'
import { ComponentClass } from 'react'
import ANTMUI from './normal'

export interface SearchBarProps
  extends Omit<InputProps, 'style' | 'ref'>,
    ANTMUI.IBaseComponent {
  cref: React.MutableRefObject<HTMLInputElement | undefined>
  onClear?: () => void
  onCancel?: () => void
}

declare const SearchBar: ComponentClass<SearchBarProps>

export { SearchBar }
