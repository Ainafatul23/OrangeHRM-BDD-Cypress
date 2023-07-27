Feature: PIM - Add Candidates

    As user
    I want to add an employee candidate
    So that I can access the employee candidate data that I have stored in the system

    Scenario: Negative Test - Verify user can't add candidate when first name field empty
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with leaving first name field empty
    And I click the save button
    Then I should see an error message indicating required fields

    Scenario: Negative Test - Verify user can't add candidate when last name field empty
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with leaving last name field empty
    And I click the save button
    Then I should see an error message indicating required fields

    Scenario: Negative Test - Verify user can't add candidate when first name, middle name and last name using number
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with first name, middle name and last name using number
    And I click the save button
    Then I should see an error message indicating invalid name format

    Scenario: Negative Test - Verify user can't add candidate when first name, middle name and last name using symbol
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with first name, middle name and last name using symbol
    And I click the save button
    Then I should see an error message indicating invalid name format

    Scenario: Negative Test - Verify user can't add candidate if employee id already exist
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input the employee id that already exist
    Then I should see an error message indicating id already exist

    Scenario: Negative Test - Verify user can't upload image when the image larger than 1MB
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I uploaded an image that is larger than 1MB
    Then I should see an error message indicating size exceeded

    Scenario: Negative Test - Verify user can't upload image besides jpg png gif format
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I uploaded an upload image besides jpg png gif format
    Then I should see an error message indicating file type

    Scenario: Positive Test - Verify user can add candidate when leaving all non-required field empty
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with leaving non required data field empty
    And I click the save button
    Then I should see the page was redirected to Personal Details page

    Scenario: Positive Test - Verify user can add candidate with JPG image format
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with JPG image format
    And I click the save button
    Then I should see the page was redirected to Personal Details page

    Scenario: Positive Test - Verify user can add candidate with PNG image format
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with PNG image format
    And I click the save button
    Then I should see the page was redirected to Personal Details page

    Scenario: Positive Test - Verify user can add candidate with GIF image format
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with GIF image format
    And I click the save button
    Then I should see the page was redirected to Personal Details page

    Scenario: Positive Case - Verify user can add candidate with login details
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with JPG image format 
    And I click the Create Login Details toggle switch
    And I input login details data
    And I click the save button
    Then I should see the page was redirected to Personal Details page

    Scenario: Negative Case - Verify user can't add candidate with login details when leaving username field empty
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with JPG image format
    And I click the Create Login Details toggle switch
    And I input data login details with leaving username field empty
    And I click the save button
    Then I should see an error message indicating required fields

    Scenario: Negative Case - Verify user can't add candidate with login details when leaving password field empty
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with JPG image format
    And I click the Create Login Details toggle switch
    And I input data login details with leaving password field empty
    And I click the save button
    Then I should see an error message indicating required fields

    Scenario: Negative Case - Verify user can't add candidate with login details when leaving confirm password field empty
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I input data with JPG image format
    And I click the Create Login Details toggle switch
    And I input data login details with leaving confirm password field empty
    And I click the save button
    Then I should see an error message indicating required fields

    Scenario: Negative Case - Verify user can't input username less than 5 characters
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I click the Create Login Details toggle switch
    And I input username less than 5 characters
    Then I should see an error message indicating username minimum character

    Scenario: Negative Case - Verify user can't input username if username already exist
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I click the Create Login Details toggle switch
    And I input the username already exist
    Then I should see an error message indicating username already exist


    Scenario: Negative Case - Verify user can't input password less than 7 characters
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I click the Create Login Details toggle switch
    And I input password less than 7 characters
    Then I should see an error message indicating password minimum character

    Scenario: Negative Case - Verify user can't input password with no lower-case letter
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I click the Create Login Details toggle switch
    And I input password with no lower-case letter
    Then I should see an error message indicating lower-case letter

    Scenario: Negative Case - Verify user can't input password with no number
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I click the Create Login Details toggle switch
    And I input password with no number
    Then I should see an error message indicating no number

    Scenario: Negative Case - Verify user can't input confirm password if password and confirm password do not match
    Given I have logged in to OrangeHRM
    When I navigates to the Add Candidate page
    And I click the Create Login Details toggle switch
    And I input password and confirm password do not match
    Then I should see an error message indicating password and confirm password do not match
 
    