const should = require('chai').should();
const sinon = require('sinon');

const service = require('../../podcasts/service');
const controller = require('../../podcasts/controller');
const podcastsEpisodes = require('../mocks/podcastEpisodes');

describe('Testando as funções do CONTROLLER', () => {
  describe('Ao chamar o controller de getAll', () => {
    const request = {};
    const response = podcastsEpisodes;
  
    before(() => {
      request.body = {};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
  
      sinon.stub(service, 'getAll').resolves(podcastsEpisodes);
    });
  
    it('é chamado o método "status" passando o código 200', async () => {
      await controller.getAll(request, response);
      response.status.calledWith(200).should.to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await controller.getAll(request, response);
      response.json.calledWith(sinon.match.array).should.to.be.equal(true);
    });

    it('é chamado o método "json" com array de episódios do podcast', async () => {
      await controller.getAll(request, response);
      response.json.calledWith(podcastsEpisodes).should.to.be.equal(true);
    });

    after(() => {
      service.getAll.restore();
    });
  });
});
