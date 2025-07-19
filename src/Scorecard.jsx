import { useState } from 'react';

function Scorecard({ rounds, setRounds }) {
  const [newCourse, setNewCourse] = useState('');
  const [newScore, setNewScore] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedScore, setEditedScore] = useState('');

  const handleAddRound = () => {
    if (!newCourse || isNaN(parseInt(newScore))) return;
    setRounds([...rounds, { title: newCourse, score: parseInt(newScore) }]);
    setNewCourse('');
    setNewScore('');
  };

  const handleDelete = (index) => {
    const updated = rounds.filter((_, i) => i !== index);
    setRounds(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedScore(rounds[index].score);
  };

  const handleSave = (index) => {
    const updated = [...rounds];
    updated[index].score = parseInt(editedScore);
    setRounds(updated);
    setEditIndex(null);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ color: 'white' }}>Add a New Round</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        style={{ marginRight: '8px', padding: '4px' }}
      />
      <input
        type="number"
        placeholder="Score"
        value={newScore}
        onChange={(e) => setNewScore(e.target.value)}
        style={{ marginRight: '8px', padding: '4px' }}
      />
      <button onClick={handleAddRound} style={{ padding: '6px 12px' }}>
        Add Score
      </button>

      <div style={{ marginTop: '2rem' }}>
        {rounds.map((round, index) => (
          <div key={index} style={{
            border: '1px solid gray',
            margin: '10px 0',
            padding: '10px',
            backgroundColor: '#1a1a1a',
            color: 'white'
          }}>
            <h3>{round.title}</h3>
            {editIndex === index ? (
              <div>
                <input
                  type="number"
                  value={editedScore}
                  onChange={(e) => setEditedScore(e.target.value)}
                  style={{ marginRight: '8px', padding: '4px' }}
                />
                <button onClick={() => handleSave(index)} style={{ marginRight: '8px' }}>
                  Save
                </button>
              </div>
            ) : (
              <p>Shot {round.score}</p>
            )}
            <button onClick={() => handleDelete(index)} style={{ marginRight: '8px' }}>
              Remove
            </button>
            {editIndex !== index && (
              <button onClick={() => handleEdit(index)}>
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scorecard;

