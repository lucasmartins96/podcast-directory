import * as React from 'react';
import '@testing-library/jest-dom';
import App from '../App';
import { act, render, screen, waitFor } from '@testing-library/react';
import podcastEpisodes from './mocks/podcastEpisodes';
import getPodcastData from '../services/podcasts';

jest.mock('../services/podcasts');

describe('Testando o componente App', () => {
  test('Exibe um título contendo "Hipsters Ponto Tech"', async () => {
    act(() => { render(<App />) });
    expect(await screen.findByText('Hipsters Ponto Tech')).toBeInTheDocument();
  });

  test('Após o carregamento da API, uma tabela com os podcasts é exibida na tela', async () => {
    getPodcastData.mockResolvedValue(podcastEpisodes);
    act(() => { render(<App />) });
    await waitFor(async () => expect(await screen.findByRole('table')).toBeInTheDocument());

    const [, ...tBodyRows] = await screen.findAllByRole('row');

    const th = screen.getAllByRole('columnheader');
    expect(th[0]).toHaveTextContent('Título do episódio');
    expect(th[1]).toHaveTextContent('Data de publicação');
    expect(th[2]).toBeEmptyDOMElement();

    const podcastEpisodesLength = podcastEpisodes.length;
    expect(tBodyRows).toHaveLength(podcastEpisodesLength);
    tBodyRows.forEach(row => {
      expect(row.childElementCount).toBe(3);
    });
    expect(screen.getAllByRole('link', { name: 'ver detalhes'})).toHaveLength(podcastEpisodesLength);
  });

});
