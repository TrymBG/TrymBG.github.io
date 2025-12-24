interface NavigationProps {
  currentPage: 'home' | 'cv' | 'projects';
  onPageChange: (page: 'home' | 'cv' | 'projects') => void;
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
      <button
        className={`nav-button ${currentPage === 'projects' ? 'active' : ''}`}
        onClick={() => onPageChange('projects')}
      >
        Projects
      </button>
    </nav>
  );
}
