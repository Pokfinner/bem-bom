describe("item management", () => {

    it("should create an item with the API", () => {


        let token = ""

        cy.request({
            method: 'POST',
            url: 'http://149.100.138.125:6001/auth/login',
            body: {
                email: "teste@teste.com",
                password: "Teste1234!"
            }
        }).then((response) => {
            // Handle the response as needed

            token = response.body.authToken

            cy.request({
                method: 'GET',
                url: 'http://149.100.138.125:6001/items',
                headers: {
                    Authorization: "Bearer " + token,
                    accept: "application/json"
                }
            }).then((response) => {
    
                console.log(response.body)
    
            })

        });



       






    })


})