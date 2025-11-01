import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { HolographicLogo } from "@/components/HolographicLogo";
import logoDark from "@/assets/onebit-logo.jpg";
import logoLight from "@/assets/onebit-logo-light.jpg";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/products", label: "products" },
    { path: "/partners", label: "partners" },
    { path: "/contact", label: "contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b-4 border-foreground bg-background transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <img src={isDark ? logoDark : logoLight} alt="OneBit AI" className="h-40 w-auto pixelated" />
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <button 
                  className={`px-4 py-2 transition-all duration-300 hover:bg-primary hover:text-background uppercase text-xs ${
                    location.pathname === item.path ? 'bg-primary text-background' : ''
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="ml-2 transition-transform duration-300 hover:rotate-180">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          <div className="md:hidden flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="transition-transform duration-300 hover:rotate-180">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-transform duration-300 hover:scale-110">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t-4 border-foreground bg-card animate-fade-in">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
              <button 
                className={`block w-full text-left px-6 py-4 transition-all duration-300 hover:bg-primary hover:text-background uppercase text-sm ${
                  location.pathname === item.path ? 'bg-primary text-background' : ''
                }`}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
