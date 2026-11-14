class ApiUtils  // file name class name must be same
{
 constructor(apiContext,LoginPayLoad)
    {
        this.apiContext = apiContext;  // this refers to current class
        this.LoginPayLoad = LoginPayLoad;
    }

    async getToken()
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/client/#/auth/login",{data:LoginPayLoad})
        {
            data:this.LoginPayLoad
        }
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log(token);
        return token;
    }
    async createOrder(orderPayLoad){
        let response = {};
        response.token = this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayLoad,
                headers: {
                    'AutihAorization' : response.token, 
                    'content-Type' : 'application/json'
                },
            })
            const orderResponseJson = await orderResponse.json();
            console.log(orderResponseJson);
            const orderId = orderResponseJson.order[0];
            resoponse.orderId = orderId();
            return response;
        
        };
}

module.export = {ApiUtils};