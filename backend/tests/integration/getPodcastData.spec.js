const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const sinon = require('sinon');

const server = require('../../server/app');
chai.use(chaiHttp);

describe('Teste de integração - GET /podcasts', () => {
  let response = [];

  describe('Quando é consultado com sucesso', () => {
    before(async () => {
      response = await chai.request(server).get('/podcasts');
    });

    it('retorna o código de status 200', () => {
      response.should.to.have.status(200);
    });

    it('retorna um array no corpo da resposta', () => {
      response.body.should.to.be.a('array');
    });

    it('verifica que em cada objeto do array do corpo da resposta contém as chaves "episodeTitle", "publicationDate" e "href"', async () => {
      response.body.forEach((res) => {
        res.should.to.have.all.keys('episodeTitle', 'publicationDate', 'href');
      });
    });
  });
});
