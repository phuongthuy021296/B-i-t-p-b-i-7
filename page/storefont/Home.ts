import { Page } from "@playwright/test";
import { CommonPage } from "./Page";
import {ViewProduct} from "./ViewProduct"
export class Home extends CommonPage{
    constructor(domain:string,page:Page){
        super(domain,page);
    }
    async gotoHome(){
        //https://phuongthuy0212.onshopbase.com/
        await this.gotoPath("?digest=c7a2e020702e65c94c632236753934636105ac8706fd4900891b0856e4801ed9");
        await this.page.waitForNavigation();
    }
    
    async gotoDetailProduct(collection:string,name_product:string){
            await this.page.goto(`https://${this.domain}/collections/${collection}/products/${name_product}`)
            await this.page.waitForNavigation();
            return new ViewProduct(this.domain,this.page)
        }
 
}