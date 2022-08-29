import { Page } from "@playwright/test";
import { CommonPage } from "./page";
import { Dashboard } from "./Dashboard";
export type InforLogin={
    email: string;
    password: string;
}
export class Login extends CommonPage{
    constructor(domain: string, page: Page){
        super(domain, page);
    }
async logIn(infor:InforLogin) {
    await this.gotoPath("sign-in");
    await this.page.locator("//input[@id='email']").fill(infor.email);
    await this.page.locator("//input[@id='password']").fill(infor.password);
    await this.page.locator("//span[contains(text(), 'Sign in')]").click();
    await this.page.waitForSelector("//p[contains(text(), 'Select a shop')]")
    await this.page.locator("//span[contains(text(), 'phuongthuy0212.onshopbase.com')]").click();
    await this.page.waitForNavigation();
    return new Dashboard(this.domain, this.page)
}
}
    