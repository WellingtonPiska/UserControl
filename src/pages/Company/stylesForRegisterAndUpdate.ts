import { styled } from 'styled-components'

export const ContainerForAll = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 20px 20px;
  margin-left: 240px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
export const BackLink = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #046ee5;
  border: none;
  color: #fff;
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  &:hover {
    background-color: #0056b3;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 6px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 10px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
`

export const InputBox = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  width: 21%;
  flex-direction: column;
`
