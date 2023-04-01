import { By } from "selenium-webdriver";
import { BasePage } from './basePage'

export class pageObjects extends BasePage {

    constructor() {
        super({url: 'https://builtin.com/'})
    }
    
    async tabSwitch() {
        let myTabs = await this.driver.getAllWindowHandles()
        await this.driver.switchTo().window(myTabs[1])
        await this.driver.sleep(1000)
        await this.driver.close()
        await this.driver.switchTo().window(myTabs[0])
    }
    
    }