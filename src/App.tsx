import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/auth'
import { GlobalStyle } from './themes/global.ts'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Router />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
