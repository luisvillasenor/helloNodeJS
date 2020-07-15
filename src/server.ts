import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(42069, () => console.log('Example app listening on port 42069!'));
