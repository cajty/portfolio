import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, Download } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { useDarkMode } from '../../hooks/useDarkMode';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);
      
      // Replace '/path-to-your-cv.pdf' with your actual CV file path
      const response = await fetch('/path-to-your-cv.pdf');
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'mon-cv.pdf'; // French filename
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${hasScrolled 
        ? 'bg-white/90 dark:bg-neutral-900/90 shadow-lg backdrop-blur-lg'
        : 'bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 
                           dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 
                           transition-all group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 
                           transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 
                                 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CV Download Button - Desktop */}
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="group relative flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-primary-600 dark:bg-primary-500 text-white font-medium
                       transition-all hover:bg-primary-700 dark:hover:bg-primary-600 
                       hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70
                       disabled:hover:transform-none disabled:hover:shadow-none"
            >
              <Download 
                size={16} 
                className={`transition-transform ${isDownloading ? 'animate-bounce' : 'group-hover:-translate-y-0.5'}`} 
              />
              <span>{isDownloading ? 'Téléchargement...' : 'Télécharger CV'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Changer le thème"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button and CV Download */}
          <div className="flex items-center gap-4 md:hidden">
            {/* CV Download Button - Mobile */}
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                       bg-primary-600 dark:bg-primary-500 text-white text-sm font-medium
                       disabled:opacity-70"
            >
              <Download 
                size={14} 
                className={isDownloading ? 'animate-bounce' : ''} 
              />
              <span>{isDownloading ? '...' : 'CV'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium
                         text-neutral-600 dark:text-neutral-300 transition-colors
                         hover:bg-neutral-100 hover:text-primary-600 
                         dark:hover:bg-neutral-800 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <button
                onClick={toggle}
                className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300"
              >
                {isDark ? (
                  <>
                    <Sun size={18} />
                    <span>Mode clair</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    <span>Mode sombre</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}