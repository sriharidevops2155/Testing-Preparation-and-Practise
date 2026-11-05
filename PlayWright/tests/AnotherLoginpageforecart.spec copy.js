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

test('Child window or new window test', async ({browser})=> {
    const context = browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const userName = page.locator("#username");
    const documentlink = page.locator("[href*='documents-request]");

    const [newPage] = Promise.all(  // We should store the return value in array as it may open the multiple pages - [newPage]

    [context.waitForEvent('page'), // It will listen if any new page opens
    documentlink.click(),])// new page will open here 
    
    const text = await newPage.locator(".red").textContent();
    const array = text.split("@");
    const domain = arrayText[1].split("")[0]
    console.log(domain);
    await page.userName().type(domain);
    page.pause();
    //console.log(await page.userName().textContent()); --> textContent() Output will be nothing as the text we enetered is dynamic and not present in DOM i.e DOM has already opened and hence then no value in hmtl
    console.log(await page.userName().inputValue());  // inputValue() is to get only the dynamic data that we enetered in text box
})