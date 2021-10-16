import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import getPodcastData from './services/podcasts';

function App() {
  const [podcastData, setPodcastData] = useState(null);

  async function initializeState() {
    try {
      setPodcastData(await getPodcastData());
    } catch (error) {
      setPodcastData(null);
    }
  }

  useEffect(() => {
    initializeState();
  }, []);

  return (
    <div className="App">
      <header className="header"></header>
      <section className="content">
        <div className="content-center">
          <div className="podcast-title">
            <h2>Hipsters Ponto Tech</h2>
          </div>
          { podcastData && (
            <div className="podcast-episodes-table">
              <Table podcastData={ podcastData }/>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
