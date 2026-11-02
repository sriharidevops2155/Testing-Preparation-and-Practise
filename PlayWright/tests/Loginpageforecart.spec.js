const {test, expect} = require('@playwright/test'); // constant variable

test('Browser context Playwright Test', async ({browser})=>   // async function() ,  async ()=> , browser is a global fixture
{
    // chrome - plugins / cookies 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://github.com/sriharidevops2155");

});


test.only('First Playwright Test', async ({page})=> // Hardly we have four fixtures browser, page , test.only --> It will run only this test case and will skip all the remaning test in the current spec
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});
