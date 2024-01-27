import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #01308a;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 0 0px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`
