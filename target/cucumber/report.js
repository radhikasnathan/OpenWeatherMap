$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("citysearch.feature");
formatter.feature({
  "line": 1,
  "name": "End to End test for Open weather map city search",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2414325574,
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
  "duration": 139230596,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 14700651049,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.openweathermapHomePageIsDisplayedWithLinksAndSearchBox()"
});
formatter.result({
  "duration": 158247685,
  "status": "passed"
});
formatter.after({
  "duration": 98038183,
  "status": "passed"
});
formatter.before({
  "duration": 1144097100,
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
  "duration": 615098,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 18017184944,
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
  "duration": 140659487,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 1978270375,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.noResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 2098181012,
  "status": "passed"
});
formatter.after({
  "duration": 168380043,
  "status": "passed"
});
formatter.before({
  "duration": 1076659501,
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
  "duration": 978328,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 13119131356,
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
  "duration": 146402525,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 15865634887,
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
  "duration": 106935953,
  "status": "passed"
});
formatter.after({
  "duration": 111571428,
  "status": "passed"
});
formatter.before({
  "duration": 1097067072,
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
  "duration": 848079,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 11546185767,
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
  "duration": 135643685,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 2152373885,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.singleOrMultipleCitiesWeatherDetailsShouldBeDisplayed()"
});
formatter.result({
  "duration": 73194194,
  "status": "passed"
});
formatter.after({
  "duration": 142775476,
  "status": "passed"
});
formatter.before({
  "duration": 1110160232,
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
  "duration": 729752,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 18884441642,
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
  "duration": 149310910,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 1431628472,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iChangeTheWeatherSwatchToF()"
});
formatter.result({
  "duration": 1111639707,
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
  "duration": 4110198866,
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
  "duration": 86853671,
  "status": "passed"
});
formatter.after({
  "duration": 95061355,
  "status": "passed"
});
});