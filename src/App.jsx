import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import WorkGraph from './pages/WorkGraph.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/graph" element={<WorkGraph />} />
        <Route path="concact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
