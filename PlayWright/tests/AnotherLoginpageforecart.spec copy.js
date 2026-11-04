const {test, expect} = require('@playwright/test'); // constant variable

test('Browser context Playwright Test', async ({page})=>   // async function() ,  async ()=> , browser is a global fixture
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("sriharibandi");
    await page.locator("userPassword").fill("xyspassword");
    await page.locator("[value='Login']").click();
    // await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").last().waitFor();  // It will wait till last element loads. --> first() wait for first element to load
    const tittles = await page.locator(".card-body b").allTextContents();
    console.log(tittles);
    

});

test('Dropdown test case', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const dropdown = page.locator("select.form-control");
    const documentlink = page.locator("[href*='documents-request]");
    await dropdown.selectOption("consult");
    //await page.pause();
    await page.locator("radiotextsty").last().click; //.nth(2);
    await page.locator("#okayBtn").click();
    await expect(page.locator("radiotextsty").last()).toBeChecked();  
    console.log(await page.locator("radiotextsty").last().isChecked());
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute("Class","blinkingText");
})

test('Child window or new window test', async ({page})=> {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const userName = page.locator("#username");
    const password = page.locator("[type='Password']");
    const signin = locator("#signINBtn");
    const dropdown = page.locator("select.form-control");
    const documentlink = page.locator("[href*='documents-request]");
    
})