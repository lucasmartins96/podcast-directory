import React from 'react';

function Table({ podcastData }) {
  return (
    <table>
      <thead>
        <tr className="tr caption-table">
          <th>Título do episódio</th>
          <th>Data de publicação</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {podcastData.map(({ episodeTitle, publicationDate, href }) => (
          <tr className="tr" key={episodeTitle}>
            <td className="justify-self-start">{episodeTitle}</td>
            <td>{publicationDate}</td>
            <td>
              <a
                className="button"
                href={href}
                target="_blank"
                without="true"
                rel="noreferrer"
              >
                ver detalhes
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
