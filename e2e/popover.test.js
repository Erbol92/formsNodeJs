import puppeteer from "puppeteer";

describe("e2e", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      executablePath: puppeteer.executablePath(),
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  test("popover_test", async () => {
    await page.goto("http://localhost:8080/");
    await page.waitForSelector("button");
    const buttons = await page.$$("button");
    for (const button of buttons) {
      await button.click();
      const id = await page.evaluate(
        (el) => el.getAttribute("data-id"),
        button,
      );
      await page.waitForSelector(`div[data-id="${id}"]`, { timeout: 5000 });
      const divPopover = await page.$(".popover");
      expect(divPopover).not.toBeNull();
    }
  }, 10000);

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});
