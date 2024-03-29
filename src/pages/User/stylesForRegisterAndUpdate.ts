import { styled } from 'styled-components'

export const FormWrapper = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 10px;
`

export const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  background-color: #fbfbfd;

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #6c63ff;
  }
`

export const Button = styled.button`
  margin-top: 2.5rem;
  border: none;
  background-color: #046ee5;
  padding: 0.62rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.93rem;
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
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
