/*
These are extended form of Selenium Waits
 */

package utilities;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class WaitMethods {
    WebDriver driver;

    public WaitMethods(WebDriver driver)
    {
        this.driver=driver;

    }

    private Wait getWait(long timeOutInSeconds,long pollingEveryInMiliSec) {
        Wait wait = new FluentWait(driver)
                .withTimeout(Duration.ofSeconds(timeOutInSeconds))
            .pollingEvery(Duration.ofMillis(pollingEveryInMiliSec))
            .ignoring(WebDriverException.class);
        return wait;
    }

    public void setImplicitWait(long timeout, TimeUnit unit) {

        driver.manage()
                .timeouts()
                .implicitlyWait(timeout, unit == null ? TimeUnit.SECONDS : unit);
    }

    public void waitForElementVisible(WebElement we, long timeOutInSeconds, long pollingEveryInMiliSec) {
        setImplicitWait(2, TimeUnit.SECONDS);
        Wait wait = getWait(timeOutInSeconds, pollingEveryInMiliSec);
        wait.until(ExpectedConditions.visibilityOf(we));

    }
}
