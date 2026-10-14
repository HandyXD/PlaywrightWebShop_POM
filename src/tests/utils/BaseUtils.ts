import { expect } from "@playwright/test";
import { Locator, Page } from "playwright";

export default class BasePage {
    
    readonly page: Page;

    constructor (page: Page){
        this.page = page;
    }

    async navigate(path: string): Promise<void>{
        await this.page.goto(path);
    }

    async getByText(message: string){
        await expect(this.page.getByText(message, { exact: true })).toBeVisible();
    }

    async toHaveTitle(message: string): Promise<void>{
        await expect(this.page).toHaveTitle(message);
    }

    async toHaveValue(locator: Locator, message: string): Promise<void>{
        await expect(locator).toHaveValue(message);
    }

}