import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { Register } from './pages/Register'
import { List } from './pages/List'
import { Update } from './pages/Update'
import { Signin } from './pages/Signin'
import useAuth from './hooks/useAuth'
import { Signup } from './pages/Signup'
import { Error404 } from './pages/Error404'

const Private = ({ Item }: { Item: React.ComponentType }) => {
  const auth = useAuth()

  const signed = auth ? auth.signed : false

  return signed ? <Item /> : <Signin />
}

export function Router() {
  return (
    <Fragment>
      <Routes>
        <Route path="/list" element={<Private Item={List} />} />
        <Route path="/register" element={<Private Item={Register} />} />

        {/* <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} /> */}
        <Route path="/update/:id" element={<Private Item={Update} />} />
        <Route path="/" element={<Signin />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </Fragment>
  )
}
