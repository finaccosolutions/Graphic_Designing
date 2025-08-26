import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Login from './pages/Login';
import LogoDesign from './pages/services/LogoDesign';
import PosterDesign from './pages/services/PosterDesign';
import ArabicCalligraphy from './pages/services/ArabicCalligraphy';
import Mockups from './pages/services/Mockups';
import Branding from './pages/services/Branding';
import BusinessCards from './pages/services/BusinessCards';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services/logo-design" element={<LogoDesign />} />
              <Route path="/services/poster-design" element={<PosterDesign />} />
              <Route path="/services/arabic-calligraphy" element={<ArabicCalligraphy />} />
              <Route path="/services/mockups" element={<Mockups />} />
              <Route path="/services/branding" element={<Branding />} />
              <Route path="/services/business-cards" element={<BusinessCards />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;