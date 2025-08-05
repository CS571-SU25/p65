import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'var(--navbar-background)',
      color: 'var(--navbar-text-color)',
      padding: '15px',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link to="/" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/about" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>About</Link>
        <Link to="/handicap" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>Handicap</Link>
        <Link to="/scorecards" style={{ color: 'var(--navbar-text-color)', textDecoration: 'none' }}>Scorecards</Link>
      </div>
    </nav>
  );
}

export default Navbar;

