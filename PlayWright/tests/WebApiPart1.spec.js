const {test, expect, request} = require('@playwright/test');
const {ApiUtils} = require('./utils/ApiUtils');
const LoginPayLoad = {userEmail:"srihariXYZ",userPassword:"SomeXYZ"}
const orderPayLoad = {orders:[{country:'Cuba',productOrderedID:""}]}

let token; // When we decalre consta we have to decalre value also for that 
let orderId; // let will be delaclred when it doesn't have value right now i.e inisitlation is not done right now when it is declared
let response;

test.beforeAll( async ()=>  // => is know to be fat operator -- It will execute once once before all the tests get executed
{
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, LoginPayLoad);
    response = await apiUtils.createOrder(orderPayLoad);

});

test.beforeEach(()=> 
{

});

//test 1, test 2, test 3

test('Place the order', async ({page})=>   // async function() ,  async ()=> , browser is a global fixture
{
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    },response.token);
    const productName = "Zara Coat 4"
    await page.goto("https://rahulshettyacademy.com/client/");
    const products = page.locator(".cart-body");
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
    const OrderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(OrderID);
    await page.locator("button[routerlink*='myorders']").click()
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");
    for(i=0; i<await rows.count(); i++)
    {
        const rowOrderId = rows.nth(i).locator("th").textContent();
        if (OrderID.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
        }
    }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(OrderID.includes(orderIdDetails)).toBeTruthy();
}); 
   
