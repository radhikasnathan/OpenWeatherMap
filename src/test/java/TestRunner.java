/*
This is where the test is initiated or called as the Cucumber runner
 */
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/featurefiles",
        format = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue = "stepdefinition",
        tags = {})

public class TestRunner {


}
