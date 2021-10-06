const puppeteer = require('puppeteer-core');
const URL =
  'https://podcasts.google.com/feed/aHR0cHM6Ly9oaXBzdGVycy50ZWNoL2ZlZWQvcG9kY2FzdC8';

const getAll = async () => {
  try {
    const browser = await puppeteer.launch({ channel: 'chrome' });
    const page = await browser.newPage();
    await page.goto(URL);

    let podcastEpisodes = await page.$$eval('a[role="listitem"]', (items) => {
      return items.map(({ href, childNodes }) => {
        const [dateDiv, titleDiv] = childNodes[0].childNodes;
        const publicationDate = dateDiv.innerText;
        const episodeTitle = titleDiv.innerText;
        return {
          episodeTitle,
          publicationDate,
          href,
        };
      });
    });
    browser.close();
    return podcastEpisodes;
  } catch (e) {
    return Promise.reject(e);
  }
};

module.exports = {
  getAll,
};
