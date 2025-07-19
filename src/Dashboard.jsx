import augustaImg from './assets/augusta.jpg';

function Dashboard() {
  return (
    <div style={{ padding: '1rem', textAlign: 'center', color: 'white' }}>
      <h1>Welcome to the Golf Handicap Tracker</h1>
      <p>This app helps you track rounds and estimate your golf handicap.</p>
      <img 
        src={augustaImg} 
        alt="Augusta National" 
        style={{ width: '100%', maxWidth: '800px', marginTop: '20px', borderRadius: '8px' }} 
      />
    </div>
  );
}

export default Dashboard;

