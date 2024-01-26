import {
  ContainerLogoName,
  ContainerMenu,
  Content,
  NameCompany,
} from './styles.ts'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { SidebarItem } from '../../components/MenuItem'
import { useNavigate, useLocation } from 'react-router'

export function Menu() {
  const navigate = useNavigate()
  const location = useLocation()
  const handleHome = () => {
    navigate(`/home`)
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
          Icon={FaUserAlt}
          Text="Users"
          onClick={handleHome}
          isActive={
            location.pathname === '/register' || location.pathname === '/list'
          }
        />
      </Content>
    </ContainerMenu>
  )
}
