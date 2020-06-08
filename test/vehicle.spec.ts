import  app  from '../src/server';
import chaiHttp = require('chai-http');
import 'chai';
import 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;

 describe('GET /veiculos', () => {
  it('retorna lista de veiculos', () => {
    return chai.request(app)
      .get('/veiculos')
      .then(res => {
        chai.expect(res.text).to.equal('kdkdkd');
      });
  });
});



