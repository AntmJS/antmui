import { Text } from '@tarojs/components'
import { IconProps } from '../../../types/icon'

export default function Index(props: IconProps) {
  const { fontFamily = 'antmuifont', name, className, ...others } = props
  let activeCls = ''
  if (others.onClick) {
    activeCls = 'active'
  }
  return (
    <Text
      className={`antmui-icon ${fontFamily} ${name} ${activeCls} ${
        className || ''
      }`}
      {...others}
    />
  )
}
