import { Locator, Page } from "playwright";
import BasePage from "../utils/BaseUtils";

export default class ShoppingCart extends BasePage{

    private checkTermOfService: Locator;
    private btnCheckout: Locator;

    constructor(page: Page){
        super(page);
        this.checkTermOfService = page.locator('#termsofservice');
        this.btnCheckout = page.getByRole('button', { name: 'Checkout' });
    }

    async goToCheckout() {
        await this.checkTermOfService.check();
        await this.btnCheckout.click();
    }

}