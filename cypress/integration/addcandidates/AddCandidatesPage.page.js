import 'cypress-file-upload'

const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
const USERNAME = '[name="username"]'
const PASSWORD = '[name="password"]'
const LOGIN = 'button[type="submit"]'

const FIRST_NAME = '[name="firstName"]'
const MIDDLE_NAME = '[name="middleName"]'
const LAST_NAME = '[name="lastName"]'
const IMAGE = 'button.oxd-icon-button.oxd-icon-button--solid-main.employee-image-action'

const INPUT_ACTIVE = 'input[data-v-1f99f73c]' // EMPLOYEE ID [4], USERNAME[5], PASSWORD[6], CONFIRM PASSWORD[7]
const SAVE = 'button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'

const REQUIRED ='span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message'

export default class AddCandidatesPage {
    static Login () {
        cy.visit(URL)

        //fill username
        cy.get(USERNAME).clear()
        cy.get(USERNAME).type('Admin')

        //fill password
        cy.get(PASSWORD).clear()
        cy.get(PASSWORD).type('admin123')

        //click button
        cy.get(LOGIN).click()
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
        .should('contain', 'Dashboard')
    }

    static navigateAddPage(){
        //PIM Navbar
        cy.contains('span.oxd-text.oxd-text--span.oxd-main-menu-item--name', 'PIM').click()
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain','PIM')

        cy.get('button.oxd-button--secondary').contains('Add').click()
        cy.get('h6.oxd-text.oxd-text--h6.orangehrm-main-title').should('contain','Add Employee')
    }

    static emptyFirstName() {
        cy.get(FIRST_NAME).clear()
    }

    static emptyMiddleName() {
        cy.get(MIDDLE_NAME).clear()
    }
    
    static emptyLasttName() {
        cy.get(LAST_NAME).clear()
    }

    static emptyEmployeeID(){
        cy.get(INPUT_ACTIVE).eq(4).clear()
    }

    static fillFirstName(first_name){
        cy.get(FIRST_NAME).clear()
        cy.get(FIRST_NAME).type(first_name)
    }

    static fillMiddleName(middle_name){
        cy.get(MIDDLE_NAME).clear()
        cy.get(MIDDLE_NAME).type(middle_name)
    }

    static fillLastName(last_name){
        cy.get(LAST_NAME).clear()
        cy.get(LAST_NAME).type(last_name)
    }

    static fillEmployeeID(employee_id){
        cy.get(INPUT_ACTIVE).eq(4).clear()
        cy.get(INPUT_ACTIVE).eq(4).type(employee_id)
    }

    static uploadImage(image){
        cy.wait(5000)
        cy.get('input[type="file"]')
            .selectFile(image, { force: true })
    }

    static clickSave(){
        cy.get(SAVE).click()
    }

    static requiredValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Required')
    }

    static invalidNameFormatValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
    }

    static idAlreadyExistValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Employee Id already exists')
    }

    static sizeExceededValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Attachment Size Exceeded')
    }

    static fileTypeValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','File type not allowed')
    }

    static personalDetailsPage(){
        cy.get('h6.oxd-text.oxd-text--h6.orangehrm-main-title')
        .should('contain', 'Personal Details')
    }

    static switchLoginDetails(){
        cy.get('span.oxd-switch-input.oxd-switch-input--active.--label-right').click()
    }

    static emptyUsername(){
        cy.get(INPUT_ACTIVE).eq(5).clear()
    }

    static emptyPassword(){
        cy.get(INPUT_ACTIVE).eq(6).clear()
    }

    static emptyConfirmPassword(){
        cy.get(INPUT_ACTIVE).eq(7).clear()
    }

    static fillUsername(username){
        cy.get(INPUT_ACTIVE).eq(5).clear()
        cy.get(INPUT_ACTIVE).eq(5).type(username)
    }

    static fillPassword(password){
        cy.get(INPUT_ACTIVE).eq(6).clear()
        cy.get(INPUT_ACTIVE).eq(6).type(password)
    }

    static fillConfirmPassword(confirm_password){
        cy.get(INPUT_ACTIVE).eq(7).clear()
        cy.get(INPUT_ACTIVE).eq(7).type(confirm_password)
    }

    static usernameMinimumValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Should be at least 5 characters')
    }

    static usernameExistValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Username already exists')
    }

    static passwordMinimumValidation(){
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Should have at least 7 characters')
    }

    static passwordNumberValidation(){
        cy.wait(2000)
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Your password must contain minimum 1 number')
    }

    static passwordLetterValidation(){
        cy.wait(2000)
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Your password must contain minimum 1 lower-case letter')
    }

    static confirmPasswordValidation(){
        cy.wait(2000)
        cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('be.visible')
        .and('contain','Passwords do not match')
    }



}