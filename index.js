const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const listaPessoas = [{
        id: 1,
        nome: 'João',
    },
    {
        id: 2,
        nome: 'Maria',
    },
    {
        id: 3,
        nome: 'José'
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/home', (req, res) => {
    res.send('Hello World!');
})

//GET - Buscar informações  -- req.query
//Post - Criar informações  -- req.body
//Put - Alterar informações  -- req.body
//Delete - Deletar informações  -- req.params
//Options - Informações que o servidor pode responder

app.get('/api/pessoas', (req, res) => {
    res.json(listaPessoas);
})

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
})

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas[index] = pessoa;
    res.json(pessoa);
})

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.json(pessoa);
})


app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(listaPessoas);
})

app.listen(port, () => {
    console.log("Porta #3000")
})