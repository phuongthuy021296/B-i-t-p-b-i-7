import { Page } from "@playwright/test";
import { CommonPage } from "./page";
import {RealTimeVisitors} from "../page/RealTimeVisitors";
import { Home } from "./storefont/Home";
export class Dashboard extends CommonPage{
    constructor(domain: string, page: Page){
        super(domain, page);
    }
async GotoRealTimeVisitors()  {
    await this.gotoPath(`apps/boost-convert/ctool/realtime-visitors`)
    return new RealTimeVisitors(this.domain, this.page)
}
async openYourSite(){
    await this.page.locator(".thumb-sm.avatar.pull-left.m-r-sm").click();
    await this.page.waitForSelector(".s-dropdown-menu.drop-down-user-style");
    await this.page.locator("//div[@class='s-dropdown-menu drop-down-user-style']//div[text()='Open your site']").click();
    await this.page.waitForLoadState("networkidle");
    return new Home(this.domain,this.page)
}
}

    