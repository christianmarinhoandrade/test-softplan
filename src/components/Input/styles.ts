import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  label: {
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
  }
`
type InputProps = {
  error: boolean
}

export const Input = styled.input<InputProps>`
  ${({ theme, error, disabled }) => css`
    border: 1px solid ${error ? 'red' : '#eee'};
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background-color: #eee;
    transition: 0.2s;

    ${
      disabled &&
      css`
    &:disabled {
      opacity: 0.5;
      `
    }}

    ${
      !disabled &&
      css`
        & :focus,
        :hover {
          outline: none;
          background: #fff;
          border-color: ${theme.lightBlue};
        }
      `
    }
  `}
`
export const Error = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
