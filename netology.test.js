let page;

beforeEach(async () => {
   page = await browser.newPage();
   await page.goto('https://netology.ru/');
}, 120000);

afterEach(() => {
   page.close();
});

it("Netology The h1 header content'", async () => {
   const firstLink = await page.$('header div div a');
   await firstLink.click();
   await page.waitForSelector('h1');
   const title2 = await page.title();
   expect(title2).toEqual('Нетология — обучение современным профессиям онлайн');
}, 40000);

it('Netology The first link attribute', async () => {
   const actual = await page.$eval('a', link => link.getAttribute('href'));
   expect(actual).toEqual('https://netology.ru/marketing');
}, 20000);

it('Netology. The page contains Sign in button', async () => {
   const btnSelector =
      '#directions > div > div.src-Landings-pages-Main-components-DirectionCards--cards--Elbfa > a:nth-child(2) > div.src-Landings-pages-Main-components-DirectionCards--cardTitle--Elw74';
   await page.waitForSelector(btnSelector, { visible: true });
   const actual = await page.$eval(btnSelector, link => link.textContent);
   expect(actual).toMatch('Программирование');
}, 10000);

describe('Netology page tests', () => {
   beforeEach(async () => {
      await page.goto('https://netology.ru/development');
   }, 120000);

   it("Netology development. The h1 header content'", async () => {
      const firstLink = await page.$('header a + a');
      await firstLink.click();
      await page.waitForSelector('h1');
      const title2 = await page.title();
      expect(title2).toEqual('Медиа Нетологии: об образовании в диджитале');
   }, 30000);

   it('Netology development. The first link attribute', async () => {
      const actual = await page.$eval('a', link => link.getAttribute('href'));
      expect(actual).toEqual('https://netology.ru/marketing');
   }, 30000);

   it('Netology development. The page contains Sign in button', async () => {
      const btnSelector = '[data-testid="header-navigatorBtn"]';
      await page.waitForSelector(btnSelector, { visible: true });
      const actual = await page.$eval(btnSelector, link => link.textContent);
      expect(actual).toMatch('Каталог курсов');
   }, 30000);
});
