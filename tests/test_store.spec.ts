import {expect} from "@playwright/test";

import test from "../fixture/LogIn";
import {DATA} from "../data/data_product";
import {RealTimeVisitors} from "../page/RealTimeVisitors";

import {Home} from "../page/storefont/Home"
test ('store front', async({dashboard, page}) => {
     let home: Home;
     let realTimeVisitors: RealTimeVisitors;
     realTimeVisitors = await dashboard.GotoRealTimeVisitors();
     let status = await realTimeVisitors.onOffFeature();
     home = await dashboard.openYourSite();
     if(status === 'on'){
        for(let i = 0; i < DATA.length; i++) {
            home.gotoDetailProduct(DATA[i].collection,DATA[i].product)
            await expect(page.locator(".copt-mt16.copt-realtime-visitors")).toBeVisible();
        }
    } 
     else {
        for(let i = 0; i < DATA.length; i++){
            home.gotoDetailProduct(DATA[i].collection,DATA[i].product)
            await expect(page.locator(".copt-mt16.copt-realtime-visitors")).not.toBeVisible();
        }
    }
})
