import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="landing-page" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'var(--bg-gradient, linear-gradient(180deg,#fffaf0,#fff))'
    }}>
      <div style={{textAlign: 'center', maxWidth: 720}}>
        <h1 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Thank you for reaching out</h1>
        <p style={{color: 'var(--muted,#666)', marginBottom: '1.25rem'}}>We received your message and will get back to you shortly.</p>
        <button
          onClick={() => navigate('/home')}
          className="btn primary"
          style={{padding: '0.75rem 1.25rem', fontSize: '1rem'}}
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default LandingPage
