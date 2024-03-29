import styled from 'styled-components'
import { Typography } from 'antd'

const { Text } = Typography

export const ContainerMenu = styled.div`
  width: 240px;
  -webkit-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);
  background-color: #4169e1;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`

export const ContainerLogoName = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;

  -webkit-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
  box-shadow: -2px 6px 4px 0px rgba(0, 0, 0, 0.47);
`

export const NameCompany = styled(Text)`
  color: white;
  font-style: italic;
  text-shadow: 0.1em 0.1em 0.2em darkblue;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
`

export const Content = styled.div`
  margin-top: 0px;
`
