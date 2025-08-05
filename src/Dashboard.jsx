import augustaImg from './assets/augusta.jpg';
import { Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container
      className="text-center py-4"
      style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        minHeight: 'calc(100vh - 120px)', // adjusted to account for header/footer
      }}
    >
      <h1>Welcome to the Golf Handicap Tracker</h1>
      <p>This app helps you track rounds and estimate your golf handicap.</p>
      <img
        src={augustaImg}
        alt="Augusta National golf course with trees and flowers"
        style={{
          width: '100%',
          maxWidth: '800px',
          marginTop: '20px',
          borderRadius: '8px',
        }}
      />
    </Container>
  );
}

export default Dashboard;

