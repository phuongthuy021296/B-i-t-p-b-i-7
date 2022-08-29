import { Page } from "@playwright/test";
import { CommonPage } from "./page";

export class RealTimeVisitors extends CommonPage{
    constructor(domain: string, page: Page){
        super(domain, page);
    }
    async fillRandomNumber(random_from: string,random_to: string){
        if(await this.page.locator("//span[contains(text(), 'Change')]").isVisible() == true) {
           await this.page.locator("//span[contains(text(), 'Change')]").click()
        
        }
        if( await this.page.locator("(//input[@class='s-input__inner'])[1]").isVisible()===true){
        await this.page.locator("(//input[@class='s-input__inner'])[1]").fill(random_from)
        await this.page.locator("(//input[@class='s-input__inner'])[2]").fill(random_to)
        await this.page.locator("//span[contains(text(),'Save')]").click();
    }

    }
    async getErrorMessage(message:string){
        let a = await this.page.locator(message)
        const texts = await a.evaluateAll(list => list.map(element => element.textContent));
        return texts;
    }
    async onOffFeature(){
        let status = 'on';
        if(await this.page.locator(".s-switch.s-ml12 input").isChecked()!=true){
            status ='off'
        }
        return status;
    }

}

