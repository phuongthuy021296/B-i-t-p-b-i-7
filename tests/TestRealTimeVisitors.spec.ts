import {expect} from "@playwright/test";

import test from "../fixture/LogIn";
import { DATA } from "../data/data_test_random_number";
import {RealTimeVisitors} from "../page/RealTimeVisitors"
test ('RealTimeVisitors', async({dashboard,page}) => {
     let realTimeVisitors: RealTimeVisitors;
     realTimeVisitors = await dashboard.GotoRealTimeVisitors()
     await expect(page.locator("//h2[contains(text(), 'Real-time visitors')]")).toBeVisible();
    for(let i=0;i<DATA.length;i++){
          await realTimeVisitors.fillRandomNumber(DATA[i].random_from,DATA[i].random_to);
          await page.waitForTimeout(3000)
          let data=await realTimeVisitors.getErrorMessage("//div[@class='s-form-item__error']");
          console.log(data);
          await expect(DATA[i].expect).toEqual(expect.arrayContaining(data))
    }

})
