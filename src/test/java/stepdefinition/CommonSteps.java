/*
The Steps that are shared by all the Steps in Scenarios
 */
package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import pageobject.HomePageObjectRepo;
import utilities.PropFileReader;
import utilities.WaitMethods;

import java.util.concurrent.TimeUnit;

public class CommonSteps {

    //stepdefinition.BrowserDriver browserDriver= new stepdefinition.BrowserDriver();
    PropFileReader propReader= new PropFileReader();
    HomePageObjectRepo pageObj= new HomePageObjectRepo(BrowserDriver.driver);
    WaitMethods wait=new WaitMethods(BrowserDriver.driver);
    @Given("^Web browser is launched$")
    public void webBrowserIsLaunched() throws Exception
    {
        //browserDriver.openBrowser();
        //wait.setImplicitWait(10, TimeUnit.SECONDS);
        //System.out.println(stepdefinition.BrowserDriver.driver);
        //stepdefinition.BrowserDriver.driver.get("http://www.google.com");

    }

    @When("^I navigate to the Openweathermap home page$")
    public void iNavigateToTheOpenweathermapHomePage() throws Exception
    {

        BrowserDriver.driver.get(propReader.getUrl());
        wait.setImplicitWait(10, TimeUnit.SECONDS);
    }

    @And("^I enter \"([^\"]*)\" in the search$")
    public void iEnterInTheSearch(String itemValue) throws Exception
    {
        wait.waitForElementVisible(pageObj.getInput_Search_Box(),5,1000);
        pageObj.setInput_Search_Box(itemValue);

    }

    @And("^I click on Search$")
    public void iClickOnSearch() throws Exception
    {
        pageObj.click_Search_Button();
    }



}
