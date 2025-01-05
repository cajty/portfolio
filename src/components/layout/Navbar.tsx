import { useState } from 'react';
import { Menu, Moon, Sun, X, Download } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import { useDarkMode } from '../../hooks/useDarkMode';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  const handleDownloadCV = () => {
    // Replace this URL with your actual CV file URL
    const cvUrl = '/public/belyamane_ayoub_JAVAANGULAR_JA.pdf (2).pdf';
    window.open(cvUrl, '_blank');
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-neutral-900/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-primary-600 dark:text-primary-400">
                B-Ayoub
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {NAVIGATION_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
                    >
                      {item.label}
                    </a>
                ))}
                <button
                    onClick={handleDownloadCV}
                    className="flex items-center space-x-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </button>
                <button
                    onClick={toggle}
                    className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center rounded-md p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {NAVIGATION_ITEMS.map((item) => (
                      <a
                          key={item.href}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-primary-400"
                      >
                        {item.label}
                      </a>
                  ))}
                  <button
                      onClick={handleDownloadCV}
                      className="flex w-full items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-primary-600 hover:bg-neutral-100 dark:text-primary-400 dark:hover:bg-neutral-800"
                  >
                    <Download size={16}/>
                    <span>Download CV</span>
                  </button>
                  <button
                      onClick={toggle}
                      className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {isDark ? <Sun size={20}/> : <Moon size={20}/>}
                  </button>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
}