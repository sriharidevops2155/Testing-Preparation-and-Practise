const {test, expect} = require('@playwright/test'); // constant variable

test('Browser context Playwright Test', async ({page})=>   // async function() ,  async ()=> , browser is a global fixture
{
    const productName = "Zara Coat 4"
    const products = page.locator(".cart-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("sriharibandi");
    await page.locator("userPassword").fill("xyspassword");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").last().waitFor();  // It will wait till last element loads. --> first() wait for first element to load
    const tittles = await page.locator(".card-body b").allTextContents();
    console.log(tittles);
    const productCount = await products.count();
    for(let i =0; i < productCount; ++i)
    {
        if (await products.nth(i).locator("b").textContent() === productName);
        {
            // Add to cart 
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

}); 