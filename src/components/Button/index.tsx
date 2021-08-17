import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  children?: JSX.Element | string
  icon?: JSX.Element
  backgroundColor?: string
  width?: string
  height?: string
}

export const Button = ({
  children,
  icon,
  width,
  height,
  backgroundColor,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.Button
      width={width}
      height={height}
      hasIcon={!!icon}
      backgroundColor={backgroundColor}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Button>
  )
}
