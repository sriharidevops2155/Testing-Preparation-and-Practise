import { test, expect } from '@playwright/test';
 
test ('Playwright Special locators', async ({page}) =>{
    test.setTimeout(6000); // This test should complete/run the execution within 1 minute
    await page.goto("https://rahulshettyacademy.com/angularpractice");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();  // Check box or Radio button we can use check
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");

    await page.getByRole("button",{name: 'Submit'}).click({timeout: 15000});
    await page.getByText("Success! The Form has been submitted sucessfully!.").isVisible();
    // 5 Sec default timeouts will be avilable for expect asserstions and you can override deafult timeout with .toBeVisible({ timeout:10_000});
    await expect(page.getByText("Success! The Form has been submitted sucessfully!.")).toBeVisible({ timeout:10_000});

    await page.getByRole("link" , {name: "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

});


test ('Playwright Test level timeout', async ({page}) =>{
    test.setTimeout(6000);
    page.setDefaultTimeout(1000);  // Page level action timeout
    const slowExpect = expect.configure({timeout:'9000'})
    await page.goto("https://rahulshettyacademy.com/angularpractice");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();  // Check box or Radio button we can use check
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button",{name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted sucessfully!.").isVisible();
    await slowExpect(page.getByText("Success! The Form has been submitted sucessfully!.")).toBeVisible();
    await page.getByRole("link" , {name: "Shop"}).click();
    slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
});