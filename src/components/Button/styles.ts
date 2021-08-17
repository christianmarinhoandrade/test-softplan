import styled, { css } from 'styled-components'
type ButtonProps = {
  backgroundColor?: string
  width?: string
  height?: string
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 1rem;
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, backgroundColor, width, height, hasIcon, disabled }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: ${theme.fontFamily};
    cursor: pointer;
    border: none;
    border-radius: 0.2rem;
    background-color: ${backgroundColor ? backgroundColor : theme.lightBlue};
    color: ${theme.darkBlue};
    width: ${width ? width : '100%'};
    height: ${height};

    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
