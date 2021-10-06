const sinon = require('sinon');
const should = require('chai').should();
const model = require('../../podcasts/model');
const service = require('../../podcasts/service');
const podcastsEpisodes = require('../mocks/podcastEpisodes');

describe('Testando as funções do SERVICE', () => {
  describe('Testando a função getAll', () => {
    before(() => {
      sinon.stub(model, 'getAll').resolves(podcastsEpisodes);
    });

    it('retorna um array', async () => {
      const response = await service.getAll();
      response.should.be.a('array');
    });

    it('verifica que em cada objeto contém as chaves "episodeTitle", "publicationDate" e "href"', async () => {
      const response = await service.getAll();
      response.forEach((res) => {
        res.should.to.have.all.keys('episodeTitle', 'publicationDate', 'href');
      });
    });

    after(() => {
      model.getAll.restore();
    });
  });
});
