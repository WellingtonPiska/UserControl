import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/auth'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
