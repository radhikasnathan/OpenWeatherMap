package stepdefinition;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class BrowserDriver {

    public static WebDriver driver;
    //Sauce lab integration
    public static final String USERNAME = "rads.basu";
    public static final String ACCESS_KEY = "dc4f46fb-bcb0-45c1-a670-36789ab103fe";
    public static final String SAUCE_LABS_URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";

    public boolean useSauceLabsHub = false;


    @Before
    /* To open browser using Sauce lab or in local. Just make the useSauceLab as false*/
    public void openBrowser(Scenario scenario) throws MalformedURLException {

         if (useSauceLabsHub) {


            DesiredCapabilities caps = DesiredCapabilities.safari();
             caps.setCapability("platform", "macOS 10.12");
             caps.setCapability("version", "11.0");
            caps.setCapability("build", scenario.getName() + "__" + System.getenv("BUILD_NUMBER"));
            driver = new RemoteWebDriver(new URL(SAUCE_LABS_URL), caps);
            driver.manage().window().maximize();
            //Sauce labs reporting
            String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",
                    (((RemoteWebDriver) driver).getSessionId()).toString(), System.getenv("JOB_NAME"));
            System.out.println(message);
        }


         else {

            driver = new ChromeDriver();

            //driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
        }

    }


    @After
    /**
     * Embed a screenshot in test report if test is marked as failed
     */
    public void embedScreenshot(Scenario scenario) {

        if (scenario.isFailed()) {
            try {
                scenario.write("Current Page URL is " + driver.getCurrentUrl());
//            byte[] screenshot = getScreenshotAs(OutputType.BYTES);
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException somePlatformsDontSupportScreenshots) {
                System.err.println(somePlatformsDontSupportScreenshots.getMessage());
            }

        }
        driver.quit();
    }





}