import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'run' }));

app.listen(3030, () => {
  console.log('##### Server started #####');
});
