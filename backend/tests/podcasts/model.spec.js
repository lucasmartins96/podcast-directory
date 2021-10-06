const should = require('chai').should();
const model = require('../../podcasts/model');

describe('Testando as funções do MODEL', () => {
  describe('Testando a função getAll', () => {
    it('retorna um array', async () => {
      const response = await model.getAll();
      response.should.be.a('array');
    });

    it('verifica que em cada objeto contém as chaves "episodeTitle", "publicationDate" e "href"', async () => {
      const response = await model.getAll();
      response.forEach((res) => {
        res.should.to.have.all.keys('episodeTitle', 'publicationDate', 'href');
      });
    });
  });
});
