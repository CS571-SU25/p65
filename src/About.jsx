import tigerImg from './assets/tigerwoods.jpg';

function About() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p>This app helps you track rounds and estimate your golf handicap.</p>
      <img
        src={tigerImg}
        alt="Tiger Woods swing sequence"
        style={{
          width: '100%',
          maxWidth: '800px',
          marginTop: '20px',
          borderRadius: '8px',
        }}
      />
    </div>
  );
}

export default About;

