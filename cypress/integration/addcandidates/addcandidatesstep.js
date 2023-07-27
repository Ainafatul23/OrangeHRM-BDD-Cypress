import AddCandidatesPage from './AddCandidatesPage.page.js'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const first_name= 'Hani'
const middle_name= 'Hana'
const last_name = 'Hilda'
const employee_id = '0038' //0038
const image= ['cypress/downloads/imageJPG_1mb.jpg', 'cypress/downloads/imageJPG_2mb.jpg', 'cypress/downloads/imagePNG.png','cypress/downloads/gif.gif', 'cypress/downloads/pdf_500kb.pdf']

const number_name ='12345'
const symbol_name ='%&*$#'

const username = 'hanahani'
const exist_username = 'hilda'
const short_username = 'hild'
const password ='admin123'
const letter_password ='adminis'
const number_password = '1234567'
const short_password='admin'
const invalid_confirm ='admin122'

Given('I have logged in to OrangeHRM', () => {
    AddCandidatesPage.Login()
    
})

When('I navigates to the Add Candidate page', () => {
    AddCandidatesPage.navigateAddPage()
})

And('I input data with leaving first name field empty',() => {
    AddCandidatesPage.emptyFirstName()
    AddCandidatesPage.fillMiddleName(middle_name)
    AddCandidatesPage.fillLastName(last_name)
})

And('I input data with leaving last name field empty', () => {
    AddCandidatesPage.fillFirstName(first_name)
    AddCandidatesPage.fillMiddleName(middle_name)
    AddCandidatesPage.emptyLasttName()
})

And('I input data with first name, middle name and last name using number', () => {
    AddCandidatesPage.fillFirstName(number_name)
    AddCandidatesPage.fillMiddleName(number_name)
    AddCandidatesPage.fillLastName(number_name)
})

And('I input data with first name, middle name and last name using symbol', () => {
    AddCandidatesPage.fillFirstName(symbol_name)
    AddCandidatesPage.fillMiddleName(symbol_name)
    AddCandidatesPage.fillLastName(symbol_name)
})

And('I input the employee id that already exist',()=> {
    AddCandidatesPage.fillEmployeeID(employee_id)
})

And('I uploaded an image that is larger than 1MB',()=> {
    AddCandidatesPage.uploadImage(image[1])
})

And('I uploaded an upload image besides jpg png gif format', () => {
    AddCandidatesPage.uploadImage(image[4])
})

And('I input data with leaving non required data field empty', () => {
    AddCandidatesPage.fillFirstName(first_name)
    AddCandidatesPage.emptyMiddleName()
    AddCandidatesPage.fillLastName(last_name)
    AddCandidatesPage.emptyEmployeeID()
})

And('I input data with JPG image format', () => {
    AddCandidatesPage.fillFirstName(first_name)
    AddCandidatesPage.fillMiddleName(middle_name)
    AddCandidatesPage.fillLastName(last_name)
    // AddCandidatesPage.fillEmployeeID(employee_id)
    AddCandidatesPage.uploadImage(image[0])
})

And('I input data with PNG image format', () => {
    AddCandidatesPage.fillFirstName(first_name)
    AddCandidatesPage.fillMiddleName(middle_name)
    AddCandidatesPage.fillLastName(last_name)
    // AddCandidatesPage.fillEmployeeID(employee_id)
    AddCandidatesPage.uploadImage(image[2])
})

And('I input data with GIF image format', () => {
    AddCandidatesPage.fillFirstName(first_name)
    AddCandidatesPage.fillMiddleName(middle_name)
    AddCandidatesPage.fillLastName(last_name)
    // AddCandidatesPage.fillEmployeeID(employee_id)
    AddCandidatesPage.uploadImage(image[3])
})

And('I click the Create Login Details toggle switch', () => {
    AddCandidatesPage.switchLoginDetails()
})

And('I input data login details with leaving username field empty', () => {
    AddCandidatesPage.emptyUsername()
    AddCandidatesPage.fillPassword(password)
    AddCandidatesPage.fillConfirmPassword(password)
})

And('I input data login details with leaving password field empty', () => {
    AddCandidatesPage.fillUsername(username)
    AddCandidatesPage.emptyPassword()
    AddCandidatesPage.fillConfirmPassword(password)
})

And('I input data login details with leaving confirm password field empty', () => {
    AddCandidatesPage.fillUsername(username)
    AddCandidatesPage.fillPassword(password)
    AddCandidatesPage.emptyConfirmPassword()
})

And('I input username less than 5 characters', () => {
    AddCandidatesPage.fillUsername(short_username)
})

And('I input the username already exist',() =>{
    AddCandidatesPage.fillUsername(username)
})

And('I input password less than 7 characters', () => {
    AddCandidatesPage.fillPassword(short_password)
})

And('I input password with no lower-case letter', () => {
    AddCandidatesPage.fillPassword(number_password)
})

And('I input password with no number', () => {
    AddCandidatesPage.fillPassword(letter_password)
})

And('I input password and confirm password do not match', () => {
    AddCandidatesPage.fillPassword(password)
    AddCandidatesPage.fillConfirmPassword(invalid_confirm)
})

And('I input login details data', () => {
    AddCandidatesPage.fillUsername(username)
    AddCandidatesPage.fillPassword(password)
    AddCandidatesPage.fillConfirmPassword(password)
})

And('I click the save button', () => {
    AddCandidatesPage.clickSave()
})

Then('I should see an error message indicating required fields',() => {
    AddCandidatesPage.requiredValidation()
})

Then('I should see an error message indicating invalid name format', () => {
    AddCandidatesPage.invalidNameFormatValidation()
})

Then('I should see an error message indicating id already exist',() => {
    AddCandidatesPage.idAlreadyExistValidation()
})

Then('I should see an error message indicating size exceeded',() =>{ 
    AddCandidatesPage.sizeExceededValidation()
})

Then('I should see an error message indicating file type',() => {
    AddCandidatesPage.fileTypeValidation()
})

Then('I should see an error message indicating username minimum character', () => {
    AddCandidatesPage.usernameMinimumValidation()
})

Then('I should see an error message indicating username already exist', () => {
    AddCandidatesPage.usernameExistValidation()
})

Then('I should see an error message indicating password minimum character', () => {
    AddCandidatesPage.passwordMinimumValidation()
})

Then('I should see an error message indicating lower-case letter', () => {
    AddCandidatesPage.passwordLetterValidation()
})

Then('I should see an error message indicating no number', () => {
    AddCandidatesPage.passwordNumberValidation()
})

Then('I should see an error message indicating password and confirm password do not match', () => {
    AddCandidatesPage.confirmPasswordValidation()
})

Then('I should see the page was redirected to Personal Details page', () =>{
    AddCandidatesPage.personalDetailsPage()

})

