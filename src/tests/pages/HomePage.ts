import { Locator, Page } from "playwright";
import BasePage from "../utils/BaseUtils";

export default class HomePage extends BasePage {
    
    private registerLink: Locator;
    private loginLink: Locator;
    private category: Locator;
    private subcategory: Locator;
    private shoppingCart: Locator;

    constructor (page: Page){
        super(page);
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.category = page.getByRole('link', { name: 'Electronics' });
        this.subcategory = page.getByRole('link', { name: 'Cell phones' });
        this.shoppingCart = page.getByRole('link', { name: /Shopping cart/i });

    }

    async goToRegisterPage(): Promise<void> {
        await this.registerLink.click();
    }

    async goToLoginPage(): Promise<void> {
        await this.loginLink.click();
    }

    async asideCategory(): Promise<void> {
        await this.category.first().click();
    }

    async asideSubcategory(): Promise<void> {
        await this.subcategory.first().click();
    }
    
    async goToShoppingCart(): Promise<void> {
        await this.shoppingCart.first().click();
    }
}
