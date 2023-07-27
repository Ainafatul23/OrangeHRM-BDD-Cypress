import LoginPage from './LoginPage.page.js'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const invalid_data ='invalid'
const username ="Admin"
const password ="admin123"

Given('I open login page', () => {
    LoginPage.visit()
}) 

When('I clear the username field', () => {
    LoginPage.clearUsername()
})

And('I input invalid username', () =>{
    LoginPage.fillUsername(invalid_data)
})

And('I input valid username', () =>{
    LoginPage.fillUsername(username)
})

And('I clear the password field', () => {
    LoginPage.clearPassword()
})

And('I input invalid password', () =>{
    LoginPage.fillPassword(invalid_data)
})

And('I input valid password', () =>{
    LoginPage.fillPassword(password)
})

And('I click login button', () => {
    LoginPage.clickLogin()
})

Then('I should see an error message indicating required fields', () => {
    LoginPage.requiredValidation()
})

Then('I see an error message indicating invalid credentials', () => {
    LoginPage.invalidCredentialValidation()
})

Then('I should see dashboard', () => {
    LoginPage.dashboard()
})

