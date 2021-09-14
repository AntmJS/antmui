export type ButtonProps = {
  //
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  plain?: boolean
  square?: boolean
  round?: boolean
  hairline?: boolean
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingText?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
  style?: React.CSSProperties
  icon: string
  children: React.ReactNode
}
