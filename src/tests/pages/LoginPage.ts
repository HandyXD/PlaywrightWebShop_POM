import { Locator, Page } from "@playwright/test";
import BasePage from "../utils/BaseUtils";

export default class LoginPage extends BasePage {

    private email: Locator;
    private password: Locator;
    private buttonLogin: Locator;

    constructor(page: Page){
        super(page);
        this.email = page.getByRole('textbox', {name: 'Email:' })
        this.password = page.getByRole('textbox', {name: 'Password:', exact: true})
        this.buttonLogin = page.getByRole('button', { name: 'Log in' });
    }

    async authentication(email:string, password:string): Promise<void>{
        await this.email.fill(email);
        await this.password.fill(password);
        await this.buttonLogin.click();
    }
}
