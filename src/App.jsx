{/* sudah selesai, AllProviders next */}
import { Routes, Route } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import WorkGraph from './pages/WorkGraph.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/graph" element={<WorkGraph />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
