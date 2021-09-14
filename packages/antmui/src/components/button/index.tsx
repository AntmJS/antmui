import classNames from 'classnames'
import Loading from '../loading/index'
import { ButtonProps } from './types'

const classPrefix = 'antmui-button'

export default function Button({
  type = 'default',
  size = 'middle',
  loading = false,
  square = false,
  round = false,
  disabled = false,
  plain = false,
  hairline = false,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={props.onClick}
      className={classNames(classPrefix, `${classPrefix}-${type}`, {
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-mini`]: size === 'mini',
        [`${classPrefix}-small`]: size === 'small',
        [`${classPrefix}-large`]: size === 'large',
        [`${classPrefix}-loading`]: loading,
        [`${classPrefix}-square`]: square,
        [`${classPrefix}-round`]: round,
        [`${classPrefix}-plain`]: plain,
        [`${classPrefix}-hairline`]: hairline,
      })}
      disabled={disabled}
    >
      {loading ? (
        <>
          <div className={`${classPrefix}-loading-wrapper`}>
            <Loading />
            {props.loadingText}
          </div>
        </>
      ) : (
        props.children
      )}
    </button>
  )
}
