import { Routes, Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import useAuth from './hooks/useAuth'
import { Signup } from './pages/Signup'
import { Error404 } from './pages/Error404'
import { Register } from './pages/User/Register'
import { Update } from './pages/User/Update'
import { Menu } from './pages/Menu'
import { List } from './pages/User/List'

import {
  ContainerApp,
  ContainerMiddle,
  GlobalStyle,
  TopBarExternal,
} from './pages/User/List/styles.tsx'
import { RiKey2Line } from 'react-icons/ri'
import { CiLogout } from 'react-icons/ci'
import { PasswordChangeModal } from './components/ChangePasswordModal'
import { User } from './pages/User/interface.ts'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { FC, useState } from 'react'
import { Home } from './pages/Home'

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
        <Route path="*" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    )
  }
  return (
    <ContainerApp>
      <GlobalStyle />
      <TopBarExternal>
        <div className="icon-container">
          <RiKey2Line onClick={handlePasswordChangeClick} />
          {/* Ícone de mudar senha */}
          <CiLogout onClick={() => handleLogout()} /> {/* Ícone de deslogar */}
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

          {/* <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} /> */}
          <Route path="/update/:id" element={<Private Item={Update} />} />

          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </ContainerMiddle>
    </ContainerApp>
  )
}
