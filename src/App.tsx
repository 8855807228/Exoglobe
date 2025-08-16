import './App.css'
import {Link, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import CertificationsPage from './pages/CertificationsPage'

import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
        <Router basename={import.meta.env.BASE_URL || '/'}>
          <AppInner />
        </Router>
    </>
  )
}

function AppInner() {
  const location = useLocation()
  const isLanding = location.pathname === '/' 

  return (
    <>
      {!isLanding && (
        <header className="main-header">
          <div className="site-container">
            <Link className="brand" to="/">Exoglobe India Pvt Ltd</Link>
            <nav>
              <ul className="nav-list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
              </ul>
            </nav>
          </div>
        </header>
      )}

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          
        </Routes>
      </main>

      {!isLanding && (
        <footer className="site-footer">
          <div className="site-container">
            <div>© {new Date().getFullYear()} Exoglobe India Private Limited</div>
            <div>Delivering Indian spices worldwide</div>
          </div>
        </footer>
      )}
    </>
  )
}

export default App
