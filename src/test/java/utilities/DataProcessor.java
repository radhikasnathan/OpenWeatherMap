/*
This utility is built to handle multiple vallues for the scenario
 */
package utilities;

import java.io.FileInputStream;
import java.util.HashMap;
import java.util.List;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class DataProcessor {

    public static List<HashMap<String,String>> data()
    {


        List<HashMap<String,String>> mydata = null;
        try
        {

            FileInputStream fs = new FileInputStream("OpenWeatherMap/src/test/resources/datafiles/OpenWeatherMap.xlsx");
            XSSFWorkbook workbook = new XSSFWorkbook(fs);
            XSSFSheet sheet = workbook.getSheet("Sheet1");
            Row HeaderRow = sheet.getRow(0);

            for(int i=1;i<sheet.getPhysicalNumberOfRows();i++)
            {
                Row currentRow = sheet.getRow(i);
                HashMap<String,String> currentHash = new HashMap<String,String>();
                for(int j=0;j<currentRow.getPhysicalNumberOfCells();j++)
                {
                    Cell currentCell = currentRow.getCell(j);

                            System.out.print(currentCell.getStringCellValue() + "\t");

                            currentHash.put(HeaderRow.getCell(j).getStringCellValue(), currentCell.getStringCellValue());


                }
                mydata.add(currentHash);
            }

            fs.close();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }

        return mydata;

    }



}
