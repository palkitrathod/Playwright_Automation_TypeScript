//Problem Statement : we need to find Helen Bennett's data or information

import {test,expect} from '@playwright/test';
{
    test("Verify the hellen's data", async ({page})=>
    {
        await page.goto ("https://awesomeqa.com/webtable.html")

        //Xpath = //table[@id="customers"]/tbody/tr[]/td[]

        const firstPath = "//table[@id='customers']/tbody/tr["
        const secondPath = "]/td["
        const thirdPath = "]"

        //Counting number of rows and columns
        const rowsCount = await page.locator("//table[@id='customers']/tbody/tr").count()
        const columnsCount = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count()

        console.log("Total number of Rows : " + rowsCount)
        console.log("Total number of Columns : " + columnsCount)

        for (let i =2; i <=7; i++)
        {
            for(let j=1; j<=columnsCount; j++)
            {
                const dynamicPath = `${firstPath}${i}${secondPath}${j}${thirdPath}` //template literals
                console.log(dynamicPath)
                const data = await page.locator(dynamicPath).innerText()
                console.log(data)

                if (data.includes('Helen Bennett'))
                {
                    const countryPath = `${dynamicPath}/following-sibling::td`
                    const countryText = await page.locator(countryPath).innerText()
                    console.log("-------------")
                    console.log("Helen Bennett's Country is : " + countryText)
                }

            }
        }
        //await page.pause()

    })
    
}

