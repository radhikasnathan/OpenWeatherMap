$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("citysearch.feature");
formatter.feature({
  "line": 1,
  "name": "End to End test for Open weather map city search",
  "description": "",
  "id": "end-to-end-test-for-open-weather-map-city-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2263045979,
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
  "duration": 127877613,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 23385204783,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.openweathermapHomePageIsDisplayedWithLinksAndSearchBox()"
});
formatter.result({
  "duration": 167242629,
  "status": "passed"
});
formatter.after({
  "duration": 103033061,
  "status": "passed"
});
formatter.before({
  "duration": 1222951906,
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
  "duration": 1279691,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 33219970719,
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
  "duration": 160808249,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 1513667639,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.noResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 2056905398,
  "status": "passed"
});
formatter.after({
  "duration": 112210982,
  "status": "passed"
});
formatter.before({
  "duration": 1055451819,
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
  "duration": 1467420,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 29040951841,
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
  "duration": 157144302,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 1392514296,
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
  "duration": 112986846,
  "status": "passed"
});
formatter.after({
  "duration": 88922267,
  "status": "passed"
});
formatter.before({
  "duration": 1138561922,
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
  "duration": 1675095,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 44840278252,
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
  "duration": 159036461,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 25724832160,
  "status": "passed"
});
formatter.match({
  "location": "ValidationSteps.singleOrMultipleCitiesWeatherDetailsShouldBeDisplayed()"
});
formatter.result({
  "duration": 65135131,
  "status": "passed"
});
formatter.after({
  "duration": 139068508,
  "status": "passed"
});
formatter.before({
  "duration": 1082574747,
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
  "duration": 1419113,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iNavigateToTheOpenweathermapHomePage()"
});
formatter.result({
  "duration": 32862997907,
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
  "duration": 153160934,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 1396461006,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iChangeTheWeatherSwatchToF()"
});
formatter.result({
  "duration": 2050119501,
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
  "duration": 1659356927,
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
  "duration": 99324199,
  "status": "passed"
});
formatter.after({
  "duration": 110918205,
  "status": "passed"
});
});