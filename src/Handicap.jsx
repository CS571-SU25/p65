function Handicap({ scores }) {
  const courseRating = 72;
  const slopeRating = 120;

  const differentials = scores.map(score => ((score - courseRating) * 113) / slopeRating);
  const average = differentials.reduce((sum, val) => sum + val, 0) / differentials.length;
  const handicap = average.toFixed(2);

  return (
    <div style={{ margin: '1rem 0', padding: '1rem', border: '1px solid green' }}>
      <h2>Your Handicap Index</h2>
      <p>Based on {scores.length} rounds: {scores.join(', ')}</p>
      <p><strong>Estimated Handicap Index: {handicap}</strong></p>
    </div>
  );
}

export default Handicap;

