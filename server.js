const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/app/static'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'app/static/index.html');
});

app.get('/api/hoges', (req, res) => {
  let data = [
    { id: 1, hoge: 'old hoge' },
    { id: 2, hoge: 'future hoge' },
    { id: 3, hoge: 'uncle hoge' },
    { id: 4, hoge: 'not hoge' },
  ];
  res.json(data);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000);
