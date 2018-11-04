Feature: End to End test for Open weather map city search


  Scenario: Verify home page of Open Weather Map
    Given Web browser is launched
    When  I navigate to the Openweathermap home page
    Then  Openweathermap home page is displayed with links and search box


  Scenario: Invalid City Search
    Given Web browser is launched
    When I navigate to the Openweathermap home page
    And I enter "hkjhk" in the search
    And I click on Search
    Then No Results should be displayed


  Scenario:Valid City Search
    Given Web browser is launched
    When I navigate to the Openweathermap home page
    And I enter "Mumbai" in the search
    And I click on Search
    Then "Mumbai" weather details should be displayed



  Scenario: Zipcode Search
    Given Web browser is launched
    When I navigate to the Openweathermap home page
    And I enter "53072" in the search
    And I click on Search
    Then Single or Multiple Cities weather details should be displayed


  Scenario: Change temperature display from C to F
    Given Web browser is launched
    When I navigate to the Openweathermap home page
    And I enter "Mumbai" in the search
    And I click on Search
    And I change the weather swatch to F
    And I click on "Mumbai" City name
    Then "Mumbai" City weather should be displayed in Farenheit
