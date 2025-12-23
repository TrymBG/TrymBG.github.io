interface NavigationProps {
  currentPage: 'home' | 'cv';
  onPageChange: (page: 'home' | 'cv') => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="navigation">
      <button
        className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
        onClick={() => onPageChange('home')}
      >
        Home
      </button>
      <button
        className={`nav-button ${currentPage === 'cv' ? 'active' : ''}`}
        onClick={() => onPageChange('cv')}
      >
        CV
      </button>
    </nav>
  );
}
