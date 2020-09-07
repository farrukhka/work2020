import{browser,by,element}from "protractor";
import { calculator } from "./pageObject/calculators";
import { angularHome } from './pageObject/angularHome';

describe('Chain Locators Demo', function(){
    browser.waitForAngularEnabled(false)
    let calc = new calculator();
    let ah = new angularHome();

it("Locators", async()=>{
  

    await browser.waitForAngularEnabled(false)
    await browser.get("https://juliemr.github.io/protractor-demo/");
    await calc.firstEditBox.sendKeys("3");
    await calc.secondEditBox.sendKeys("5");
    await calc.go.click();
    await browser.sleep(2000);
    calc.getResult.getText().then(function(text){
    console.log(text);

   
    });
});


it('Angular Home Page title verification',async()=>{

    await browser.get("https://angularjs.org/");
    await ah.angularLink.click();
    await browser.sleep(3000);
    await ah.search.sendKeys("hello");


});

});

