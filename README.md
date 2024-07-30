1- Instala os pacotes de jest, supertest, express

2- No thunder client, você deve colocar dessa maneira, para testar a API(valores aleatórios):
  Rotas:
  {
    "latitude" : 2,
    "longitude" : 2
  }

  Pedidos:
  {
    "endereco": {
      "longitude": "2",
      "latitude": "2"
      },
    "produto": "TV",
    "quantidade": "2"
  }

3- Esses valores aleatórios também serve como nos testes de criar tanto o pedido e rotas
