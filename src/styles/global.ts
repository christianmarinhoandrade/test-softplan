import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import OpenSansLightTtf from 'assets/fonts/OpenSans-Light.ttf'
import OpenSansRegularTtf from 'assets/fonts/OpenSans-Regular.ttf'
import OpenSansSemiBoldTtf from 'assets/fonts/OpenSans-SemiBold.ttf'

import 'rc-tooltip/assets/bootstrap.css'
import 'react-toastify/dist/ReactToastify.min.css'

type GlobalStylesProps = {
  any?: string
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  src:  url(${OpenSansLightTtf}) format('truetype'),
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src:  url(${OpenSansRegularTtf}) format('truetype')
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src:  url(${OpenSansSemiBoldTtf}) format('truetype'); 
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
}

  ${({ theme }) => css`
    body {
      padding-top: 4rem;
      font-family: ${theme.fontFamily};
    }
  `}

  .container {
    max-width: 70rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .App {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
  }
  
  .AppBody {
    flex: 1 1;
  }
  
  .title {
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
  }
 ${({ theme }) => css`
   .title::after {
     content: '';
     display: block;
     width: 1.5rem;
     height: 1.5rem;
     background: ${theme.lightBlue};
     position: absolute;
     bottom: 1px;
     left: -5px;
     border-radius: 0.2rem;
     z-index: -1;
   }
 `}
`

export default GlobalStyles
