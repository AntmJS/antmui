import type { FullScreenProps, IFullScreenRef } from '../../../types/fullScreen'
import { View } from '@tarojs/components'
import { useRef, LegacyRef, useState } from 'react'

export default function Index(props: FullScreenProps) {
  const { children, className, cref, ...others } = props
  const fullScreen = useRef<IFullScreenRef>()

  const [isShowFullScreen, setShowFullScreen] = useState(false)

  const actionRef = useRef({
    show: function () {
      setShowFullScreen(true)
    },
    hide: function () {
      setShowFullScreen(false)
    },
  })
  cref.current = actionRef.current

  return (
    <View
      ref={fullScreen as LegacyRef<IFullScreenRef> | undefined}
      className={`antmui-full-screen-dialog ${
        isShowFullScreen ? 'antmui-full-screen-slideup-show' : ''
      } ${className || ''}`}
      {...others}
    >
      {children}
    </View>
  )
}
