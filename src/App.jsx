import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './components/Layout.jsx'
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="concact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
