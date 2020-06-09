import  app  from '../src/server';
import chaiHttp = require('chai-http');
import chai from 'chai';
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;

let rowId: number = 0;

describe('GET /veiculos', () => {
  it('retorna lista de veiculos', () => {
    return chai.request(app)
      .get('/veiculos')
      .then(res => {
        chai.expect(res.status).to.equal(200);
      });
  });
});

describe('POST /veiculos', () => {
  it('cadastra um novo veiculo', () => {
    return chai.request(app)
      .post('/veiculos')
      .set('content-type', 'application/json')
      .send({
        'placa': 'ABC-1010',
        'chassi': '123456789',
        'renavam': 'ABC123456789',
        'modelo': 'Corolla',
        'marca': 'Toyota',
        'ano': '2019'
      })
      .then(res => {
        chai.expect(res.text).to.equal(`{"id":${res.body.id},"placa":"ABC-1010","chassi":"123456789","renavam":"ABC123456789","modelo":"Corolla","marca":"Toyota","ano":"2019"}`);
        rowId = res.body.id;
      });
  });
});

describe('GET /veiculos', () => {
  it('retorna ultimo cadastro', () => {
    return chai.request(app)
      .get('/veiculos/'+rowId)
      .then(res => {
        chai.expect(res.status).to.equal(200);
      });
  });
});


describe('DELETE /veiculos', () => {
  it('deleta um veiculo', () => {
    return chai.request(app)
      .delete('/veiculos/'+rowId)
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



