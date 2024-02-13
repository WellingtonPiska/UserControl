import { Routes, Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import useAuth from './hooks/useAuth'
import { Signup } from './pages/Signup'
import { Error404 } from './pages/Error404'
import { Register } from './pages/User/Register'
import { Update } from './pages/User/Update'
import { Menu } from './pages/Menu'
import { List } from './pages/User/List'
import { User } from './pages/MyPersonalData/interface.ts'

import {
  ContainerApp,
  ContainerMiddle,
  ContainerNameTopBar,
  TopBarExternal,
} from './pages/User/List/styles.tsx'
import { RiKey2Line } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'
import { PasswordChangeModal } from './components/ChangePasswordModal'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { FC, useState } from 'react'
import { Home } from './pages/Home'
import { MyPersonalData } from './pages/MyPersonalData'
import { Company } from './pages/Company/List'
import { CompanyRegister } from './pages/Company/Register'

export interface Root {
  name: string
  lastName: string
}

const Private = ({ Item }: { Item: FC }) => {
  const auth = useAuth()

  const signed = auth ? auth.signed : false

  return signed ? <Item /> : <Signin />
}

export function Router() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const navigate = useNavigate() // Use o navigation para redirecionar após a atualização
  const handlePasswordChangeClick = () => {
    setIsPasswordModalOpen(true)
  }

  const getUserLogged = () => {
    const usersDb = localStorage.getItem('users_db')
    const userToken = localStorage.getItem('user_token')
    if (usersDb && userToken) {
      const usersDbArray: User[] = JSON.parse(usersDb)
      const userTokenObj = JSON.parse(userToken)
      const userArrayIndex = usersDbArray.findIndex(
        (user) => user.email === userTokenObj.email,
      )

      if (userArrayIndex !== -1) {
        const userData = usersDbArray[userArrayIndex]
        const personalNameData: Root = {
          name: userData.name,
          lastName: userData.lastName,
        }

        return personalNameData
      }
    }
  }

  const personalNameData = getUserLogged()

  const handleLogout = () => {
    localStorage.removeItem('user_token')
    auth?.signout()
    navigate('/')
  }
  const auth = useAuth()
  const signed = auth ? auth.signed : false

  const handlePassword = (
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
  ) => {
    const usersDb = localStorage.getItem('users_db')

    const userToken = localStorage.getItem('user_token')

    if (usersDb && userToken) {
      const usersDbArray: User[] = JSON.parse(usersDb)
      const userTokenObj = JSON.parse(userToken)
      const usersArrayIndex = usersDbArray.findIndex(
        (user) => user.email === userTokenObj.email,
      )

      if (usersArrayIndex !== -1) {
        if (usersDbArray[usersArrayIndex].password === currentPassword) {
          usersDbArray[usersArrayIndex].password = newPassword
          localStorage.setItem('users_db', JSON.stringify(usersDbArray))

          toast.success('Senha alterada com sucesso!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        } else if (newPassword !== confirmNewPassword) {
          toast.error('As senhas precisam ser iguais!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        } else {
          toast.error('A senha atual está incorreta', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          })
        }
      }
    }
  }

  if (!signed) {
    return (
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    )
  }
  return (
    <ContainerApp>
      <TopBarExternal>
        <div className="icon-container">
          <div>
            <div style={{ marginRight: '40px' }}>
              <ContainerNameTopBar>
                {personalNameData
                  ? `${personalNameData.name} ${personalNameData.lastName}`
                  : ''}
              </ContainerNameTopBar>
            </div>
          </div>
          <div style={{ marginRight: '10px' }}>
            <RiKey2Line onClick={handlePasswordChangeClick} />
          </div>
          <CiLogout onClick={() => handleLogout()} />
        </div>
      </TopBarExternal>
      <PasswordChangeModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        onSubmit={handlePassword}
      />
      <ContainerMiddle>
        <Menu />
        <Routes>
          <Route path="/list" element={<Private Item={List} />} />
          <Route path="/register" element={<Private Item={Register} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myPersonalData" element={<MyPersonalData />} />
          <Route path="/update/:id" element={<Private Item={Update} />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/company" element={<Company />} />
          <Route path="/company/register" element={<CompanyRegister />} />
        </Routes>
      </ContainerMiddle>
    </ContainerApp>
  )
}
