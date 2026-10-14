import { expect, Locator, Page } from "@playwright/test";
import BasePage from "../utils/BaseUtils";

export default class ProductPage extends BasePage {

    private smartphone: Locator;
    private btnAddToCart: Locator;

    constructor(page: Page){
        super(page);
        this.smartphone = page.getByRole('link', { name: 'Smartphone', exact: true });
        this.btnAddToCart = page.locator('#add-to-cart-button-43');
    }

    async addToCart(): Promise<void>{
        await this.smartphone.click();
        const responsePromise = this.page.waitForResponse(
            r => r.url().includes('/addproducttocart') && r.status() === 200
        );
        await this.btnAddToCart.click();
        await responsePromise; 
    }

    async verifySuccessMessage(message: string): Promise<void>{
        const banner = this.page.locator('#bar-notification.success .content');
        await expect(banner).toContainText(message);
    }


}
