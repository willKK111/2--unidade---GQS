const request = require('supertest');
const app = require('./app');

describe('teste com pedidos', ()=>{
    it('se a lista estiver vazia', async ()=>{
        const res = await request(app).get('/listarPedidos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    })

    it('Criar um produto', async ()=>{
        const pedido = {endereco, longitude, latitude, produto, quantidade};
        const res = await request(app).post('/criarPedido').send(pedido);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.endereco).toEqual(pedido.endereco);
        expect(res.body.latitude).toEqual(pedido.latitude);
        expect(res.body.longitude).toEqual(pedido.longitude);
        expect(res.body.produto).toEqual(pedido.produto);
        expect(res.body.quantidade).toEqual(pedido.quantidade);
    })

})

describe('Teste com rotas', ()=>{
    it('se a lista', async ()=>{
        const res = await request(app).get('/listarRotas');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    })

    it('criar uma rota', async ()=>{
        const rota = {latitude, longitude};
        const res = (await request(app).post('/criarRotas')).setEncoding(rota);
        expect(res.statusCode).toEqual(201);
        expect(res.body.latitude).toEqual(rota.latitude);
        expect(res.body.longitude).toEqual(rota.longitude);
    })


})