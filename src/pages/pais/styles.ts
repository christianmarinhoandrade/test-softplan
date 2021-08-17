import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-top: 5px;
  }
`

export const FormFilter = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  button {
    margin-top: 6px;
  }
`

export const Form = styled.form`
  button + button {
    margin-top: 6px;
  }
`
