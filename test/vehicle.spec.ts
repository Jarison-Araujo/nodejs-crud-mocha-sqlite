import  app  from '../src/server';
import chaiHttp = require('chai-http');
import chai from 'chai';
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;


describe('POST /veiculos', () => {
  it('cadastra um novo veiculo', () => {
    return chai.request(app)
      .get('/veiculos')
      .type('form')
      .send({
        'placa': 'ABC-1010',
        'chassi': '123456789',
        'renavam': 'ABC123456789',
        'modelo': 'Corolla',
        'marca': 'Toyota',
        'ano': '2019'
      })
      .then(res => {
        chai.expect(res.status).to.equal(200);
      });
  });
});

 describe('GET /veiculos', () => {
  it('retorna lista de veiculos', () => {
    return chai.request(app)
      .get('/veiculos')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      });
  });
});



