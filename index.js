const express = require('express');
const app = express();
const port = 3000;

// Middleware per il parsing del corpo delle richieste in formato JSON
app.use(express.json());

// Endpoint API per ottenere tutti gli esempi
app.get('/examples', (req, res) => {
  const examples = [
    { id: 1, name: 'Example 1' },
    { id: 2, name: 'Example 2' },
    { id: 3, name: 'Example 3' },
  ];
  res.json(examples);
});

// Endpoint API per ottenere un singolo esempio per ID
app.get('/examples/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const example = { id: id, name: `Example ${id}` };
  res.json(example);
});

// Endpoint API per creare un nuovo esempio
app.post('/examples', (req, res) => {
  const { name } = req.body;
  const newExample = { id: 4, name: name }; // Esempio statico di creazione di un nuovo esempio
  res.json(newExample);
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
