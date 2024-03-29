import {
  ContainerLogoName,
  ContainerMenu,
  Content,
  NameCompany,
} from './styles.ts'
import { FaHome, FaUserAlt, FaUsers } from 'react-icons/fa'
import { SidebarItem } from '../../components/MenuItem'
import { useNavigate, useLocation } from 'react-router'
import { IoBusinessOutline } from 'react-icons/io5'

export function Menu() {
  const navigate = useNavigate()
  const location = useLocation()
  const handleHome = () => {
    navigate(`/home`)
  }
  const handlePersonalData = () => {
    navigate(`/myPersonalData`)
  }
  const handleUsers = () => {
    navigate(`/list`)
  }

  const handleCompany = () => {
    navigate(`/company`)
  }

  return (
    <ContainerMenu>
      <ContainerLogoName>
        <NameCompany>UserControl</NameCompany>
      </ContainerLogoName>
      <Content>
        <SidebarItem
          Icon={FaHome}
          Text="Home"
          onClick={handleHome}
          isActive={location.pathname === '/home'}
        />
        <SidebarItem
          Icon={FaUsers}
          Text="Usuários"
          onClick={handleUsers}
          isActive={
            location.pathname === '/register' || location.pathname === '/list'
          }
        />
        <SidebarItem
          Icon={FaUserAlt}
          Text="Dados Pessoais"
          onClick={handlePersonalData}
          isActive={location.pathname === '/myPersonalData'}
        />
        <SidebarItem
          Icon={IoBusinessOutline}
          Text="Empresas"
          onClick={handleCompany}
          isActive={location.pathname === '/company'}
        />
      </Content>
    </ContainerMenu>
  )
}
