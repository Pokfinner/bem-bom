

describe('Test e-mail sending', () => {

    it('should login', () => {


        cy.on('uncaught:exception', (err, runnable) => {

            return false

        })

        cy.visit("mail.sapo.pt")


        cy.get('#mailIcon').click()


        cy.get('sapo_widget_login_form input[type="text"]').type("testito")

    })



})