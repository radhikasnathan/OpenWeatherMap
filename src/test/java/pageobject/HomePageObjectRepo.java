/*
Page object Model using Page factory to reuse the Object repo
 */

package pageobject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;

import java.util.ArrayList;
import java.util.List;

public class HomePageObjectRepo {

    public HomePageObjectRepo(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

        @FindBy(how = How.XPATH,using="//div[@class='form-group search-cities__block']//input[@id='q']")
        private WebElement input_Search_Box;

        @FindBy(how= How.XPATH,using="//button[@type='submit' and @class='btn btn-orange']")
        private WebElement button_Search;

        @FindBy(how=How.XPATH,using="//img[contains(@src,'logo_OpenWeatherMap_orange.svg')]")
        private WebElement element_Logo;

        @FindBy(how= How.ID,using="imperial")
        private WebElement  swatch_DegreeF;

        @FindBy(how=How.ID,using="metric")
        private WebElement swatch_DegreeC;

        @FindBy(how=How.ID,using="weather-widget")
        private WebElement element_Weather_Widget;


        @FindBy(how=How.CLASS_NAME,using="widget__graphic")
        private WebElement element_Weather_Graphic;

        @FindBy(how=How.CLASS_NAME,using="weather-forecast-list")
        private WebElement element_Weather_List;

        @FindBy(how=How.TAG_NAME,using="li")
        private List <WebElement> links_List ;

        //@FindBy(how=How.TAG_NAME,using="tr")
        //private List <WebElement> element_Search_Results= new ArrayList<WebElement>();

        @FindBy(how=How.XPATH,using="//a[contains(@href,'city/')]")
        private List<WebElement> links_CityName;

        @FindBy(how=How.XPATH,using="//h3[@class='weather-widget__temperature']")
        private WebElement element_CityTemp;

        @FindBy(how=How.CLASS_NAME,using="weather-widget__city-name")
        private WebElement element_CityName;

        @FindBy(how=How.XPATH,using="//h3[contains(text(),'Search engine is very flexible. How it works:')]")
        private WebElement element_NoSearchResult;


        public void setInput_Search_Box(String mstrValue)
        {
            input_Search_Box.sendKeys(mstrValue);
        }

        public WebElement getInput_Search_Box()
        {
            return input_Search_Box;
        }

        public void click_Search_Button()
        {
            button_Search.click();
        }


        public boolean logo_Exists()
        {
            return element_Logo.isEnabled();
        }

        public boolean weatherWidge_Exists()
        {
            return element_Weather_Widget.isDisplayed();
        }

        public boolean weatherGraph_Exists()
        {
            return element_Weather_Graphic.isDisplayed();
        }


        public boolean weatherForecaseList_Exists()
        {
            return  element_Weather_List.isDisplayed();
        }

        public WebElement noSearchResults()
        {
            return element_NoSearchResult;
        }

        public List<WebElement> searchResultselement()
    {
        System.out.println("Here");
        System.out.println(""+ links_CityName.size());
        return links_CityName;
    }

        public int noOfLinksInPage()
        {
            return links_List.size();
        }

        public int noofSearchResults()

        {
            return links_CityName.size();
        }

        public void click_DF()
        {
            swatch_DegreeF.click();
        }

        public void click_DC()
        {
        swatch_DegreeC.click();
        }

        public void clickCityName(String CityName)
        {
            for (WebElement cn:links_CityName)
            {
            if(cn.getText().contains(CityName))
            {
                cn.click();
            }
            }
        }

        public String elementCityName()
        {
            return element_CityName.getText();
        }


        public String elementCityTemp()
        {
            return element_CityTemp.getText();
        }

    public WebElement elementCityTempExists()
    {
        return element_CityTemp;
    }






}
