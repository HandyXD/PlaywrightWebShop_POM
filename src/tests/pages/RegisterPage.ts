import { Locator, Page } from "@playwright/test";
import BasePage from "../utils/BaseUtils";

export default class RegisterPage extends BasePage {

    private gender: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private password: Locator;
    private confirmPassword: Locator;
    private buttonRegister: Locator;

    constructor(page: Page){
        super(page);
        this.gender = page.getByRole('radio', {name: 'Female', exact: true})
        this.firstName = page.getByRole('textbox', {name: 'First name:'})
        this.lastName = page.getByRole('textbox', {name: 'Last name:'})
        this.email = page.getByRole('textbox', {name: 'Email:' })
        this.password = page.getByRole('textbox', {name: 'Password:', exact: true})
        this.confirmPassword = page.getByRole('textbox', {name: 'Confirm password:'})
        this.buttonRegister = page.getByRole('button', { name: 'Register' });
    }

    async register(firstName:string ,lastName:string,email:string,password:string,confirmPassword: string): Promise<void>{
        await this.gender.check();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.buttonRegister.click();
    }
 
    verifySuccessMessage(successMessage: string){
        this.getByText(successMessage);
    }
}