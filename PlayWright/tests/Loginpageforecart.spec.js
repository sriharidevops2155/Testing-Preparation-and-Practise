const {test, expect} = require('@playwright/test'); // constant variable

test('Browser context Playwright Test', async ({browser})=>   // async function() ,  async ()=> , browser is a global fixture
{
    // chrome - plugins / cookies 
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const password = page.locator("[type='Password']");
    const signin = locator("#signINBtn");
    const carttittles = page.locator(".card-body a");
    await page.goto("https://github.com/sriharidevops2155");
    //css type, fill --> From latest versions they depricated type, Also fill can clear if any default text preset in textfield too 
    await page.userName().fill("sriharibandi");
    await page.password().fill("somexyz"); 
    await page.signin().click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill(""); // it wipes of the deault text present in text filed and it's like clearning entire text in the textbox
    await userName.fill('sriharibanditesting')
    await signin.clik();
    await carttittles.first().textContent();
    await carttittles.nth(1).textContent();
    const alltittles = await carttittles.allTextContents();
    console.log(alltittles);
});

test.only('First Playwright Test', async ({page})=> // Hardly we have four fixtures browser, page , test.only --> It will run only this test case and will skip all the remaning test in the current spec
{
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
});
