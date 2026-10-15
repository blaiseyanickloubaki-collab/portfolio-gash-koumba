import React, { useState, useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
  <nav
    className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${
      isScrolled
        ? 'bg-bg/70 backdrop-blur-lg'
        : 'bg-transparent'
    }`}
    style={{ transform: 'translate3d(0, 0, 0)' }}
  >
    <div className="max-w-[1320px] mx-auto px-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Code className="w-6 h-6 text-primary" />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold whitespace-nowrap bg-linear-to-r from-primary to-primary-dark bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            aria-label="home"
          >
            {PERSONAL_INFO.name}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-base font-medium whitespace-nowrap transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-6 py-3.5 bg-primary text-[#1a0b03] font-semibold text-base whitespace-nowrap rounded-[17px] hover:bg-primary-dark transition-all duration-300"
          >
            Me contacter
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-4 text-white hover:text-white/80 transition-colors"
          aria-label="menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </div>

    {/* Mobile Menu*/}
    <div
      className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[28rem] opacity-100 ' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="bg-bg/95 backdrop-blur-lg border-t border-line px-5 py-6 space-y-3">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id
              ? 'text-primary bg-primary/10'
              : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick('contact')}
          className="w-full px-7 py-3.5 bg-primary text-[#1a0b03] font-semibold text-base rounded-[17px] hover:bg-primary-dark transition-all duration-300 mt-2"
        >
          Me contacter
        </button>
      </div>
    </div>

  </nav>
);
}

export default Navbar