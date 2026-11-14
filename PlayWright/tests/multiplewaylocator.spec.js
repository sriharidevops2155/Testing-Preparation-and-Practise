const {test, expect} = require('@playwright/test'); // constant variable

test('Browser context Playwright Test', async ({page})=>   // async function() ,  async ()=> , browser is a global fixture
{
    const productName = "Zara Coat 4"
    const products = page.locator(".cart-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("sriharixyz");
    await page.getByPlaceholder("enter your passsword").fill("xyspassword");
    await page.getByRole('button', {name :"login"}).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").last().waitFor();  // It will wait till last element loads. --> first() wait for first element to load

    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name :"Add to Cart"}).click();
    await page.getByRole("listitem").getByRole('button',{name :"CART"}).click();
    // await page.pause();
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();  // Wait for cannot be applied for multiple elements, If it is multiple then we should put .first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    const bool = await page.locator("h3:has-text('productName')").isVisible();
    await page.getByRole("button",{name :"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name :"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText("Thankyou for the Order.")).toBeVisible();
}); 
   