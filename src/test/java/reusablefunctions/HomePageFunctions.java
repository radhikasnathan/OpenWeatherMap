package reusablefunctions;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.asserts.SoftAssert;
import pageobject.HomePageObjectRepo;
import stepdefinition.BrowserDriver;

public class HomePageFunctions {

    //WebDriver driver;

    //public HomePageFunctions(WebDriver driver)
//    {
//        this.driver=driver;
//    }

    HomePageObjectRepo pageobj=new HomePageObjectRepo(BrowserDriver.driver);
    //SoftAssert  sa=new SoftAssert();
    public void verifyHomePage() throws Exception
    {
        Assert.assertTrue(pageobj.logo_Exists(),"Home Page is  Logo not loaded");
        Reporter.log("Home Page Logo is shown");
        Assert.assertTrue(pageobj.weatherWidge_Exists(),"Home Page Weather Widget is missing");
        Reporter.log(" Home page weather widget is loaded");
        Assert.assertTrue(pageobj.weatherGraph_Exists(),"Home page Weather Graph is missing");
        Reporter.log("Home Page Graph is missing");
        /*Assert.assertTrue(pageobj.weatherForecaseList_Exists(),"Home page Weather Forecast list is missing");
        Reporter.log("Home page Weather forecast list is displayed");*/
        if(pageobj.noOfLinksInPage()<=40) {
            Assert.assertTrue(false,"Number of links in the page is a mismatch");
            Reporter.log("Number of links in the page are correct");
        }
    }

    public void verifyNoSearchResultsDisplayed() throws Exception
    {
        Assert.assertEquals(pageobj.noofSearchResults(),0,"Search result is getting displayed for invalid search");
        Reporter.log(" No Search result is displayed for invalid input");
    }

    public void verifySingleSearchResult(String cityName) throws Exception
    {
        Assert.assertEquals(pageobj.searchResultselement().size(),1," There is Zero search results displayed");
        Reporter.log(" There is 1 Search Displayed");
        if(pageobj.searchResultselement().get(0).getText().contains(cityName))
        {
            Reporter.log(" The City Name is present in the Search Results");
        }
        else
        {
            Assert.assertTrue(false," The City name is not present in the Search results");
        }
    }

    public void verifyMultipleSearchResult() throws Exception
    {
        if(pageobj.noofSearchResults()>1)
        {
            Reporter.log("Multiple City Search Results are displayed");
        }
        else
        {
            Assert.assertTrue(false," Multiple Cities not displayed in Search results");
        }
    }

    public void validateTempConversion(String cityName) throws Exception
    {
        if(pageobj.elementCityName().contains(cityName))
        {
            Reporter.log("Result City is correct");
        }
        else{
            Assert.assertTrue(false,"City Name is not displayed on the clicking the Result");
        }

        if(pageobj.elementCityTemp().contains("F"))
        {
            Reporter.log(" Temp is displayed correctly");
        }
        else
        {
            Assert.assertTrue(false,"Temperature is not displayed in Farenheit");
        }
    }

}
