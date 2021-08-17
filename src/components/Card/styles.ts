import styled, { css } from 'styled-components'

export const StyledCard = styled.div`
  ${({ theme }) => css`
    min-width: 280px;
    max-width: 280px;
    position: relative;
    height: 250px;
    border-radius: 5px;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    border-top: 3px solid ${theme.darkBlue};
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      font-size: 1.1em;
      width: 100%;
      padding: 10px;
      img {
        margin-left: 5px;
      }
    }
    .content {
      padding-left: 10px;
    }
    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      background-color: #eeeeee;

      button {
        margin-right: 1rem;
        color: #ffffff;
      }
    }
  `}
`
