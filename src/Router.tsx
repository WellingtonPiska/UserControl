import { Routes, Route } from 'react-router-dom'
import { Register } from './pages/Register'
import { List } from './pages/List'
import { Update } from './pages/Update'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/register" element={<Register />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  )
}
