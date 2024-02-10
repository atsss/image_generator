import puppeteer from 'puppeteer';

const width = 1680;
const height = 1680;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width, height });

  const targetElementSelector = '#puppeteer_screenshot_id'

  await page.goto('http://127.0.0.1:3001/')

  await page.screenshot({path: `./puppeteer/tmp/${Date.now()}_original.png`})

  const clip = await page.evaluate(s => {
    const el = document.querySelector(s)
    const paddingSize = 4;

    const { width, height, top: y, left: x } = el.getBoundingClientRect()
    return { width: width + paddingSize*2, height: height + paddingSize*2, x: x-paddingSize, y: y-paddingSize }
  }, targetElementSelector)

  await page.screenshot({ clip, path: `./puppeteer/tmp/${Date.now()}_clipped.png` })

  browser.close();
})();
