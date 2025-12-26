import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './components/Layout.jsx';

export default function App() {
  return (
     <Routes>
    <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  )
}
