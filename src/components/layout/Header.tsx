import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-iidx-black/80 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-display font-bold text-gradient leading-tight">
              IIDX HOTOKE ARENA SEASON2
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-white hover:text-iidx-blue transition-colors"
            >
              イベント概要
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-iidx-blue transition-colors"
            >
              お問い合わせ
            </Link>
            <Link to="/contact">
              <Button size="sm">参加はこちら</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-white/10">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-white hover:text-iidx-blue transition-colors py-2"
            >
              イベント概要
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left text-white hover:text-iidx-blue transition-colors py-2"
            >
              お問い合わせ
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full" size="sm">
                参加はこちら
              </Button>
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
