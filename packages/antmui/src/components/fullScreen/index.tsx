import type { FullScreenProps, IFullScreenRef } from '../../../types/fullScreen'
import { View } from '@tarojs/components'

import { useRef, LegacyRef, useState } from 'react'
import Icon from '../icon'

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
      <Icon
        className="antmui-full-screen-close"
        name="antmui-round-arrow-fill"
        onClick={() => actionRef.current.hide()}
      />
      {children}
    </View>
  )
}
