import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Artist Name</h1>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-6">
              <NavLinks mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  return (
    <>
      {["gallery", "about", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className={`group relative ${
            mobile ? "block py-2 text-lg" : ""
          } hover:text-primary transition-colors`}
        >
          <span className="capitalize">{item}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      ))}
    </>
  );
};

const ThemeToggle = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => (
  <Button
    variant="ghost"
    size="icon"
    onClick={toggleTheme}
    className="rounded-full"
  >
    {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
  </Button>
);

export default Navbar;