import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Scorecard({ rounds, setRounds }) {
  const [newCourse, setNewCourse] = useState('');
  const [newScore, setNewScore] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedScore, setEditedScore] = useState('');
  const [filterText, setFilterText] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const handleAddRound = () => {
    if (!newCourse.trim()) {
      setError('Course name is required.');
      setShowError(true);
      return;
    }

    const scoreValue = parseInt(newScore);
    if (isNaN(scoreValue) || scoreValue <= 0) {
      setError('Score must be a positive number.');
      setShowError(true);
      return;
    }

    setRounds([...rounds, { title: newCourse, score: scoreValue }]);
    setNewCourse('');
    setNewScore('');
    setError('');
    setShowError(false);
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

  const scores = rounds.map(r => r.score);
  const best = scores.length > 0 ? Math.min(...scores) : '-';
  const worst = scores.length > 0 ? Math.max(...scores) : '-';
  const average = scores.length > 0
    ? (scores.reduce((sum, s) => sum + s, 0) / scores.length).toFixed(1)
    : '-';

  return (
    <Container className="mt-4">
      <h2 style={{ color: 'white' }}>Add a New Round</h2>

      <Form className="d-flex gap-2 flex-wrap align-items-end justify-content-center mb-4">
        <Form.Group style={{ maxWidth: '200px' }}>
          <Form.Label htmlFor="courseName">Course Name</Form.Label>
          <Form.Control
            id="courseName"
            type="text"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{ maxWidth: '100px' }}>
          <Form.Label htmlFor="score">Score</Form.Label>
          <Form.Control
            id="score"
            type="number"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex align-items-end">
          <Button variant="success" onClick={handleAddRound}>
            Add Score
          </Button>
        </div>
      </Form>

      {showError && (
        <div className="text-danger fw-semibold mt-2 text-center">
          {error}
        </div>
      )}

      <Form className="mt-4 mb-2">
        <Form.Group>
          <Form.Label htmlFor="filter">Filter by Course Name</Form.Label>
          <Form.Control
            id="filter"
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Button
        variant="secondary"
        className="mb-3"
        onClick={() => setSortAsc(!sortAsc)}
      >
        Sort by Score: {sortAsc ? 'Ascending' : 'Descending'}
      </Button>

      <Card
        className="mb-4"
        style={{ backgroundColor: '#2e7d32', color: 'white' }}
      >
        <Card.Body>
          <Card.Title>Score Summary</Card.Title>
          <Card.Text>Best Score: {best}</Card.Text>
          <Card.Text>Worst Score: {worst}</Card.Text>
          <Card.Text>Average Score: {average}</Card.Text>
        </Card.Body>
      </Card>

      <div>
        {rounds
          .filter(round => round.title.toLowerCase().includes(filterText.toLowerCase()))
          .sort((a, b) => sortAsc ? a.score - b.score : b.score - a.score)
          .map((round, index) => (
            <Card key={index} bg="dark" text="light" className="mb-3">
              <Card.Body>
                <Card.Title>{round.title}</Card.Title>
                {editIndex === index ? (
                  <>
                    <Form.Group className="mb-2">
                      <Form.Label htmlFor={`editScore-${index}`}>Edit Score</Form.Label>
                      <Form.Control
                        id={`editScore-${index}`}
                        type="number"
                        value={editedScore}
                        onChange={(e) => setEditedScore(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" onClick={() => handleSave(index)} className="me-2">
                      Save
                    </Button>
                  </>
                ) : (
                  <Card.Text>Shot {round.score}</Card.Text>
                )}
                <Button variant="danger" onClick={() => handleDelete(index)} className="me-2">
                  Remove
                </Button>
                {editIndex !== index && (
                  <Button variant="warning" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
      </div>
    </Container>
  );
}

export default Scorecard;

