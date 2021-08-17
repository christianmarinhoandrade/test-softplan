/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { forwardRef, InputHTMLAttributes, Ref } from 'react'
import { DeepMap, FieldError } from 'react-hook-form'

import * as S from './styles'

type InputProps = {
  label: string
  errors?: DeepMap<any, FieldError>
}

const Input = (
  {
    label,
    id,
    errors,
    ...props
  }: InputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <S.Wrapper>
      <label htmlFor={id}>{label}</label>
      <S.Input
        id={id}
        name={id}
        ref={ref}
        error={!!(errors && errors[id!]?.message)}
        {...props}
      />
      {errors && errors[id!]?.message && (
        <S.Error>{errors[id!]?.message}</S.Error>
      )}
    </S.Wrapper>
  )
}

export default forwardRef(Input)
