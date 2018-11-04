package stepdefinition;

import cucumber.api.java.en.And;
import pageobject.HomePageObjectRepo;
import reusablefunctions.HomePageFunctions;
import utilities.WaitMethods;


public class HomePageSteps {

    HomePageObjectRepo pageObj= new HomePageObjectRepo(BrowserDriver.driver);
    HomePageFunctions pageFunctions=new HomePageFunctions();
    WaitMethods wait=new WaitMethods(BrowserDriver.driver);

    @And("^I click on \"([^\"]*)\" City name$")
    public void iClickOnCityName(String cityName)  throws Exception {

        pageObj.clickCityName(cityName);
    }



    @And("^I change the weather swatch to F$")
    public void iChangeTheWeatherSwatchToF() throws Exception {
        wait.waitForElementVisible(pageObj.searchResultselement().get(0),5,1000);
        pageObj.click_DF();

    }



}
