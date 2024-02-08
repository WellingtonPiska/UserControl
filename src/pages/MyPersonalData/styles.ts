import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 20px 20px;
  margin-left: 240px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
  padding: 0.8rem;
  margin: 0.6rem 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #0000001c;
  width: 100%;
  font-size: 0.8rem;

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #6c63ff;
  }
`

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  transform: translateY(-10px);
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const LabelFields = styled.label`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 8px;
`
