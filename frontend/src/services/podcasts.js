const url = 'http://localhost:3000/podcasts';

export default async function getPodcastData() {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
