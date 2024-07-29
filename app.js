const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

let pedidos = [];
let rotas = [];

app.get('/listarPedidos', (req, res)=>{
    res.status(200).json(pedidos)
})

app.post('/criarPedidos', (req, res) => {
    const { endereco, latitude, longitude, produto, quantidade } = req.body;

    const pedido = {
        id: pedidos.length + 1,
        endereco,
        latitude,
        longitude,
        produto,
        quantidade
    };

    pedidos.push(pedido);
    res.status(201).json(pedido);
});

app.get('/listarRotas', (req, res)=>{
    res.status(200).json(rotas)
})

app.post('/criarRotas', (req, res) => {
    const {latitude, longitude} = req.body;
    const rota = {
        latitude,
        longitude
    }

    rotas.push(rota);
    res.status(201).json(rota);
})



app.listen(port, () => {
    console.log(`aplicação rodando em http://localhost:${port}`);
});

module.exports = app;