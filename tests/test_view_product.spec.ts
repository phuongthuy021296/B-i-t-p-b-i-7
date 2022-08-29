import {test,expect, chromium} from "@playwright/test";
import { Home } from "../page1/Home";
import { Collection } from "../page1/Collection";
import { ViewProduct } from "../page1/ViewProduct";
import { DATA } from "../data/product";
// export const testViewProduct=(DATA)=>{
test.describe("check view product",()=>{
    let home:Home;
    let collection:Collection;
    let viewproduct:ViewProduct;
    let browser;
    let page;
    test.beforeAll(async()=>{
       browser = await chromium.launch();
        page = await browser.newPage();
        home=new Home("au-abandoned-prodtest.onshopbase.com",page);
        await home.gotoHome();
       collection= await home.gotoCollection("all");
    })
   
    test(`View detail product`,async()=>{
        for(let i=0;i<DATA.length;i++){
            viewproduct= await collection.gotoProductItem(DATA[i].name);
            let nameProduct=await viewproduct.getText();
            DATA[i].name=DATA[i].name.toUpperCase();
            expect(nameProduct).toEqual(DATA[i].name);
            await page.goBack('load')
        }
    });
    
})
// }

// testViewProduct(DATA);
// import {expect} from "@playwright/test";
// import test from "../fixture/page";
//     test(`fixture`,async({page})=>{
//        await expect(page.locator("//input[@id='ctl00_ucRight1_btnLogin']")).toBeVisible()
      
//     });