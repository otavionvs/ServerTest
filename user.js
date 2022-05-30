const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const listaP = [{
        id: 1,
        nome: 'Otavio',
    },
    {
        id: 2,
        nome: 'Camilly',
    },
    {
        id: 3,
        nome: 'Vytor'
    }
]

const listaUsuarios = [{
        id: 1,
        nome: 'Otavio',
        user: 'TavinhoDoGRau'
    },
    {
        id: 2,
        nome: 'Camilly',
        user: 'Milly'
    },
    {
        id: 3,
        nome: 'Vytor',
        user: 'Vetor'

    }
]

app.get('/', (req, res) => {
    res.send('Foi po!');
})

app.get('/api/pessoas', (req, res) => {
    res.json(listaP);
})

app.get('/api/usuarios', (req, res) => {
    res.json(listaUsuarios);
})

app.post('/api/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = listaP.length + 1;
    listaP.push(pessoa);
    res.json(pessoa);
})

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaP.findIndex(p => p.id == id);
    listaP[index] = pessoa;
    res.json(pessoa);
})

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = listaP.find(p => p.id == id);
    res.json(pessoa);
})

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaP.findIndex(p => p.id == id);
    listaP.splice(index, 1);
    res.json(listaP);
})

app.post('/api/usuarios', (req, res) => {
    const user = req.body;
    user.id = listaUsuarios.length + 1;
    listaUsuarios.push(user);
    res.json(user)
})

app.put('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    const index = listaUsuarios.findIndex(u => u.id == id)
    listaUsuarios[index] = user;
    res.json(listaUsuarios)
})

app.get('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    res.json(user);
})

app.delete('/api/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const index = listaUsuarios.findIndex(u => u.id == id)
    listaUsuarios.splice(index, 1)
    res.json(listaUsuarios)
})





app.listen(port, () => {
    console.log("Porta #3001")
})