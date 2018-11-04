$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("citysearch.feature");
formatter.feature({
  "line": 1,
  "name": "End to End test for Open weather map city search",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 23527541158,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify home page of Open Weather Map",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search;verify-home-page-of-open-weather-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Web browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the Openweathermap home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Openweathermap home page is displayed with links and search box",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.webBrowserIsLaunched()"
});
formatter.result({
  "duration": 140049099,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 20661110232,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.openweathermapHomePageIsDisplayedWithLinksAndSearchBox()"
});
formatter.result({
  "duration": 5539229158,
  "status": "passed"
});
formatter.after({
  "duration": 477502435,
  "status": "passed"
});
formatter.before({
  "duration": 12253391026,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Invalid City Search",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search;invalid-city-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Web browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I navigate to the Openweathermap home page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"hkjhk\" in the search",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "No Results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.webBrowserIsLaunched()"
});
formatter.result({
  "duration": 1257293,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 8208955919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hkjhk",
      "offset": 9
    }
  ],
  "location": "CommonSteps.iEnterInTheSearch(String)"
});
formatter.result({
  "duration": 2002687666,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 4114608514,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.noResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 4050710622,
  "status": "passed"
});
formatter.after({
  "duration": 424229821,
  "status": "passed"
});
formatter.before({
  "duration": 11923410036,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Valid City Search",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search;valid-city-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Web browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to the Openweathermap home page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter \"Mumbai\" in the search",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "\"Mumbai\" weather details should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.webBrowserIsLaunched()"
});
formatter.result({
  "duration": 967599,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 8402221575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 9
    }
  ],
  "location": "CommonSteps.iEnterInTheSearch(String)"
});
formatter.result({
  "duration": 2099775855,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 933230298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 1
    }
  ],
  "location": "ValidationSteps.weatherDetailsShouldBeDisplayed(String)"
});
formatter.result({
  "duration": 4969492289,
  "status": "passed"
});
formatter.after({
  "duration": 463138216,
  "status": "passed"
});
formatter.before({
  "duration": 12569877669,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Zipcode Search",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search;zipcode-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Web browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I navigate to the Openweathermap home page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter \"53072\" in the search",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Single or Multiple Cities weather details should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.webBrowserIsLaunched()"
});
formatter.result({
  "duration": 819283,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 9046836291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "53072",
      "offset": 9
    }
  ],
  "location": "CommonSteps.iEnterInTheSearch(String)"
});
formatter.result({
  "duration": 2624269492,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 3015610467,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.singleOrMultipleCitiesWeatherDetailsShouldBeDisplayed()"
});
formatter.result({
  "duration": 1737148206,
  "status": "passed"
});
formatter.after({
  "duration": 462988812,
  "status": "passed"
});
formatter.before({
  "duration": 11141338960,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Change temperature display from C to F",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search;change-temperature-display-from-c-to-f",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Web browser is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I navigate to the Openweathermap home page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I enter \"Mumbai\" in the search",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I change the weather swatch to F",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \"Mumbai\" City name",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "\"Mumbai\" City weather should be displayed in Farenheit",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.webBrowserIsLaunched()"
});
formatter.result({
  "duration": 732314,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 9293155360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 9
    }
  ],
  "location": "CommonSteps.iEnterInTheSearch(String)"
});
formatter.result({
  "duration": 2094765687,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 3101904266,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iChangeTheWeatherSwatchToF()"
});
formatter.result({
  "duration": 6786802399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 12
    }
  ],
  "location": "HomePageSteps.iClickOnCityName(String)"
});
formatter.result({
  "duration": 4654594326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 1
    }
  ],
  "location": "ValidationSteps.cityWeatherShouldBeDisplayedInFarenheit(String)"
});
formatter.result({
  "duration": 2683811715,
  "error_message": "java.lang.AssertionError: Temperature is not displayed in Farenheit expected [true] but found [false]\n\tat org.testng.Assert.fail(Assert.java:94)\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\n\tat org.testng.Assert.assertTrue(Assert.java:42)\n\tat reusablefunctions.HomePageFunctions.validateTempConversion(HomePageFunctions.java:85)\n\tat stepdefinition.ValidationSteps.cityWeatherShouldBeDisplayedInFarenheit(ValidationSteps.java:58)\n\tat ✽.Then \"Mumbai\" City weather should be displayed in Farenheit(citysearch.feature:42)\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://openweathermap.org/city/1275339");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 7019100952,
  "status": "passed"
});
});