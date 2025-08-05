import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Scorecard({ rounds, setRounds }) {
  const [newCourse, setNewCourse] = useState('');
  const [newScore, setNewScore] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedScore, setEditedScore] = useState('');
  const [filterText, setFilterText] = useState('');

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
    <Container className="mt-4">
      <h2 style={{ color: 'white' }}>Add a New Round</h2>
      <Form className="d-flex gap-2 flex-wrap align-items-center">
        <Form.Control
          type="text"
          placeholder="Course Name"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          style={{ maxWidth: '200px' }}
        />
        <Form.Control
          type="number"
          placeholder="Score"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
          style={{ maxWidth: '100px' }}
        />
        <Button variant="success" onClick={handleAddRound}>
          Add Score
        </Button>
      </Form>

      <Form className="mt-4 mb-3">
        <Form.Control
          type="text"
          placeholder="Filter by Course Name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Form>

      <div>
        {rounds
          .filter(round => round.title.toLowerCase().includes(filterText.toLowerCase()))
          .map((round, index) => (
            <Card key={index} bg="dark" text="light" className="mb-3">
              <Card.Body>
                <Card.Title>{round.title}</Card.Title>
                {editIndex === index ? (
                  <>
                    <Form.Control
                      type="number"
                      value={editedScore}
                      onChange={(e) => setEditedScore(e.target.value)}
                      className="mb-2"
                    />
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

