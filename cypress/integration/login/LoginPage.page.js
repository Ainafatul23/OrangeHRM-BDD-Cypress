const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
const USERNAME = '[name="username"]'
const PASSWORD = '[name="password"]'
const LOGIN = 'button[type="submit"]'

export default class LoginPage{
    static visit() {
        cy.visit(URL)
    }

    static clearUsername(){
        cy.get(USERNAME).clear()
    }

    static clearPassword() {
        cy.get(PASSWORD).clear()
    }

    static fillUsername(username) {
        cy.get(USERNAME).type(username)
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }

    static clickLogin(){
        cy.get(LOGIN).click()
    }

    static requiredValidation(){
        cy.get('span.oxd-input-field-error-message').should('be.visible').and('have.text', 'Required')
    }

    static invalidCredentialValidation(){
        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').should('be.visible').and('have.text', 'Invalid credentials')
    }
    
    static dashboard(){
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard')
    }
}