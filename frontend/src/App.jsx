import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import DocsPage from './pages/DocsPage.jsx'
import Playground from './pages/Playground.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AiTutor from './components/AiTutor/AiTutor.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs/:category/:slug" element={<DocsPage />} />
          <Route path="docs/:slug" element={<DocsPage />} />
          <Route path="playground" element={<Playground />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <AiTutor />
    </>
  )
}
