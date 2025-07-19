import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2e7d32', // dark green
      color: '#ffffff',
      padding: '15px',
      textAlign: 'center',
      fontWeight: 'bold'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        <Link to="/handicap" style={{ color: 'white', textDecoration: 'none' }}>Handicap</Link>
        <Link to="/scorecards" style={{ color: 'white', textDecoration: 'none' }}>Scorecards</Link>
      </div>
    </nav>
  );
}

export default Navbar;

