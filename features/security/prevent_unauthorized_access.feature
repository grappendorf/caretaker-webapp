Feature: Prevent unauthorized access
  In order to prevent unauthorized access to the Caretaker app
  As a Caretaker administrator
  I want the login dialog to be shown to unauthorized users

  Scenario:
    When I visit "#"
    Then I should see "Please log in"
    Then I am authenticated as adminiatrator
