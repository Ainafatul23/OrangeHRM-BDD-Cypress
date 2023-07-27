Feature: Login Functionality

    As user
    I want to log in to the website
    So that I can access my account and use the system

    Scenario: Negative Test - Verify user can't login when leaving username field empty
    Given I open login page
    When I clear the username field
    And I clear the password field
    And I input valid password
    And I click login button
    Then I should see an error message indicating required fields

    Scenario: Negative Test - Verify user can't login when leaving password field empty
    Given I open login page
    When I clear the username field
    And I input valid username
    And I clear the password field
    And I click login button
    Then I should see an error message indicating required fields

    Scenario: Negative Test - Verify user can't login when input invalid username
    Given I open login page
    When I clear the username field
    And I input invalid username
    And I clear the password field
    And I input valid password
    And I click login button
    Then I see an error message indicating invalid credentials

    Scenario: Negative Test - Verify user can't login when input invalid password
    Given I open login page
    When I clear the username field
    And I input valid username
    And I clear the password field
    And I input invalid password
    And I click login button
    Then I see an error message indicating invalid credentials

    Scenario: Positive Test -Verify user can login when input valid data
    Given I open login page
    When I clear the username field
    And I input valid username
    And I clear the password field
    And I input valid password
    And I click login button
    Then I should see dashboard
