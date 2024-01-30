import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background-color: #ffffff;
  height: calc(100vh - 125px);
  margin-top: 20px;
  width: 83%;
  margin-left: 260px;
  border-radius: 5px;
  box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.5);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 12px;
  width: 100%;
`

export const Title = styled.h1`
  display: flex;
  position: absolute;
  top: 120px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

export const LabelFields = styled.label`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`
