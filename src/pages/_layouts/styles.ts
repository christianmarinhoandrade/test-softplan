import styled, { css } from 'styled-components'
import { Link as LinkReactRouterDom } from 'react-router-dom'

import ReactSpinner from 'react-spinkit'

export const Header = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`
export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
`

export const Link = styled(LinkReactRouterDom)`
  padding: 0.5rem 0;
  img {
    width: 30px;
    height: 30px;
  }
`
export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.darkBlue};
    padding: 3rem 1rem 0 1rem;
    height: 10rem;
    text-align: center;
    color: ${theme.lightBlue};
  `}

  img {
    width: 30px;
    height: 30px;
  }

  p {
    margin-top: 1rem;
  }
`

export const Spinner = styled(ReactSpinner)`
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  z-index: 100;
`
