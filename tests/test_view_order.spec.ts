import { expect,test,chromium } from "@playwright/test";
import { Home } from "../page/Home";
import { ViewProduct } from "../page/ViewProduct";
import { Collection } from "../page/Collection";
import { DATA } from "../data/product";
import { Cart } from "../page/Cart";
import converString from "../helper/string"
// export const testViewOrder=(data)=>{
    test.describe("test checkout",()=>{
        let home:Home;
        let collection:Collection;
        let viewproduct:ViewProduct;
        let browser;
        let page;
        let cart:Cart;
        let listProduct:any[]=[];
        let listPrice:any[]=[];
        let sum=0;

    test.beforeAll(async()=>{
        browser = await chromium.launch();
         page = await browser.newPage();
         home=new Home("au-abandoned-prodtest.onshopbase.com",page);
        //  await home.gotoHome();
        // collection= await home.gotoCollection("all");
        for(let i=0;i<DATA.length;i++){
            listProduct.push(DATA[i].name);
            listPrice.push(DATA[i].price);
            sum+=DATA[i].price;
            let url=converString(DATA[i].name.toLowerCase())
            viewproduct= await home.gotoProductURL(`products/${url}`)
            cart= await viewproduct.addProductToCart();
            // console.log()
            // await page.waitForTimeout(1000);
            // if(i!==data.length-1){
            //     await page.goBack('load')
            // }
           
        }
     })
     test("test product in cart",async({page})=>{
        let nameProduct=await cart.getInforToCart("//div[@class='product-cart__details']//div[@class='product-cart__name']");
        expect(nameProduct).toEqual(listProduct)
     })
    test("total all product to cart",async({page})=>{
        let totalProduct=await cart.getTotal();
        let total="$"+sum.toFixed(2)
        expect(total).toEqual(totalProduct)
        console.log(totalProduct,total);
    })   
    })
    // test.afterAll(())

// }
// testViewOrder(DATA);


