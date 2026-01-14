import { Routes, Route, Navigate } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import WorkGraph from './pages/WorkGraph.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'

export default function App() {
  useEffect(() => {
    const isNotFound = window.location.pathname !== '/' && 
                       window.location.pathname !== '/work' && 
                       window.location.pathname !== '/work/graph' && 
                       window.location.pathname !== '/contact'
    
    if (isNotFound) {
      document.body.classList.add('no-background')
    } else {
      document.body.classList.remove('no-background')
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/graph" element={<WorkGraph />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}