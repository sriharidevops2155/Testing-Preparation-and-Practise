const {test, expect} = require('@playwright/test'); // constant variable

test('Browser context Playwright Test', async ({page})=>   // async function() ,  async ()=> , browser is a global fixture
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("sriharibandi");
    await page.locator("userPassword").fill("xyspassword");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle')
    const tittles = await page.locator(".card-body b").allTextContents();
    console.log(tittles);
    

});