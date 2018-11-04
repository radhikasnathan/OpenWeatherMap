/*
All the validation steps from cucumber are compiled here
 */

package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import pageobject.HomePageObjectRepo;
import reusablefunctions.HomePageFunctions;
import utilities.WaitMethods;

import java.util.concurrent.TimeUnit;

public class ValidationSteps {

    //PropFileReader propReader= new PropFileReader();
    HomePageObjectRepo pageObj= new HomePageObjectRepo(BrowserDriver.driver);
    HomePageFunctions pageFunctions=new HomePageFunctions();
    WaitMethods wait=new WaitMethods(BrowserDriver.driver);


    @Then("^Openweathermap home page is displayed with links and search box$")
    public void openweathermapHomePageIsDisplayedWithLinksAndSearchBox() throws Exception
    {
        wait.waitForElementVisible(pageObj.getInput_Search_Box(),10,1000);
        pageFunctions.verifyHomePage();


    }

    @Then("^No Results should be displayed$")
    public void noResultsShouldBeDisplayed() throws Exception
    {
        wait.waitForElementVisible(pageObj.noSearchResults(),10,1000);
        pageFunctions.verifyNoSearchResultsDisplayed();

    }

    @Then("^\"([^\"]*)\" weather details should be displayed$")
    public void weatherDetailsShouldBeDisplayed(String cityName) throws Exception
    {
        wait.waitForElementVisible(pageObj.searchResultselement().get(0),10,1000);
        pageFunctions.verifySingleSearchResult(cityName);
        System.out.println("City name"+cityName);

    }

    @Then("^Single or Multiple Cities weather details should be displayed$")
    public void singleOrMultipleCitiesWeatherDetailsShouldBeDisplayed() throws Exception
    {
        wait.waitForElementVisible(pageObj.searchResultselement().get(0),5,1000);
        pageFunctions.verifyMultipleSearchResult();;
    }




    @Then("^\"([^\"]*)\" City weather should be displayed in Farenheit$")
    public void cityWeatherShouldBeDisplayedInFarenheit(String cityName) throws Exception {
    wait.waitForElementVisible(pageObj.elementCityTempExists(),10,1000);
    pageFunctions.validateTempConversion(cityName);

    }
}
