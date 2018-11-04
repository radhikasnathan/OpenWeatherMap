package utilities;

/*
This class file is built to read the property file
 */

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropFileReader {

    private Properties prop = null;

    public PropFileReader() {
        prop = new Properties();
        {
            InputStream input = null;
            try {
                String filename = "propertyfiles/config.properties";
                input = PropFileReader.class.getClassLoader().getResourceAsStream(filename);
                if (input == null) {
                    System.out.println("Sorry, unable to find " + filename);
                    return;
                }
                prop.load(input);
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }

    }


    public String getUrl(){
        return prop.getProperty("URL");
    }

}
