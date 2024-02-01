import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://developer.chrome.com/docs/chromium/new-headless');

  await page.screenshot({ path: `./puppeteer/tmp/${Date.now()}.png`});
  await browser.close();

})();
