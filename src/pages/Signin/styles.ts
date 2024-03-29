import { styled } from 'styled-components'

export const InputContainerForPassword = styled.div`
  position: relative; /* Alterado para relative */
  margin-top: 4px;
`

export const IconPassword = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`

// -------------------

export const ContainerForAll = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-color: #e6f2ff;
`
export const Container = styled.div`
  width: 80%;
  height: 70vh;
  display: flex;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.212);
`

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
`

export const FormImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fde3a7d7;
  padding: 1rem;
`

export const FormHeader = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  font-size: 3rem;
`
export const Title = styled.div`
  position: relative;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
`

export const TitleUnderline = styled.div`
  content: '';
  display: block;
  width: 5rem;
  height: 0.3rem;
  background-color: #046ee5;
  margin: 0 auto;
  position: absolute;
  border-radius: 10px;
`

export const InputGroup = styled.div`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
`

export const RegisterButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 2.5rem;
  border: none;
  background-color: #046ee5;
  padding: 0.62rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.93rem;
  font-weight: 500;
  color: #fff;
  text-align: center;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: none;
  }
`

export const Img = styled.img`
  width: 39rem;
`

export const ContainerUnderScreen = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 10px;
  justify-content: center;
`

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;

    &:hover {
      color: #00050a;
    }
  }
`

export const ContainerForIcon = styled.div`
  position: absolute;
  top: 35%;
  left: 8px;
  transform: translateY(10%);
  border-right: 1px solid lightgray;
  padding-right: 4px;
  color: gray;
  box-sizing: border-box;
`
