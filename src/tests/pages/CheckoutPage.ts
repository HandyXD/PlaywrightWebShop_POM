import { Locator, Page } from "playwright";
import BasePage from "../utils/BaseUtils";

export default class CheckoutPage extends BasePage {

    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private selectCountry: Locator;
    private inputCity: Locator;
    private address1: Locator;
    private zipCode: Locator;
    private phone: Locator;
    private btnBillingContinue: Locator;

    // Shipping
    private btnShippingContinue: Locator;

    // Shipping Method
    private btnShippingMethodContinue: Locator;

    // Payment Method
    private radioCreditCard: Locator;
    private btnPaymentMethodContinue: Locator;

    // Payment Info
    private selectCardType: Locator;
    private cardholderName: Locator;
    private cardNumber: Locator;
    private selectExpireMonth: Locator;
    private selectExpireYear: Locator;
    private cardCode: Locator;
    private btnPaymentInfoContinue: Locator;

    // Confirm
    private btnConfirm: Locator;

    constructor(page: Page){
        super(page);
        // Billing
        this.firstName = page.getByRole('textbox', {name: 'First name:'});
        this.lastName = page.getByRole('textbox', {name: 'Last name:'});
        this.email = page.getByRole('textbox', {name: 'Email:' });
        this.selectCountry = page.getByLabel('Country');
        this.inputCity = page.getByRole('textbox', { name: 'City:'});
        this.address1 = page.getByRole('textbox', { name: 'Address 1:' });
        this.zipCode = page.getByRole('textbox', { name: 'Zip / postal code:' });
        this.phone = page.getByRole('textbox', { name: 'Phone number:' });
        this.btnBillingContinue = page.locator('#billing-buttons-container').getByRole('button', { name: 'Continue' });

        // Shipping Method
        this.btnShippingContinue = page.locator('#shipping-buttons-container').getByRole('button', { name: 'Continue' });
        this.btnShippingMethodContinue = page.locator('#shipping-method-buttons-container').getByRole('button', { name: 'Continue' });
        this.radioCreditCard = page.getByRole('radio', { name: 'Credit Card Credit Card' });
        this.btnPaymentMethodContinue = page.locator('#payment-method-buttons-container').getByRole('button', { name: 'Continue' });

        // Payment Info
        this.selectCardType = page.locator('#CreditCardType');
        this.cardholderName = page.getByRole('textbox', { name: 'Cardholder name' });
        this.cardNumber = page.getByRole('textbox', { name: 'Card number' });
        this.selectExpireMonth = page.getByLabel('Expiration date');
        this.selectExpireYear = page.locator('#ExpireYear');
        this.cardCode = page.getByRole('textbox', { name: 'Card code' });
        this.btnPaymentInfoContinue = page.locator('#payment-info-buttons-container').getByRole('button', { name: 'Continue' });
        this.btnConfirm = page.getByRole('button', { name: 'Confirm' });
    }

    async billingCheckout(firstName:string,lastName:string,email:string,country:string,city: string,
        address1: string,zipCode: string,phone: string
    ) {
        await this.toHaveValue(this.firstName, firstName);
        await this.toHaveValue(this.lastName, lastName);
        await this.toHaveValue(this.email, email);
        await this.selectCountry.selectOption(country);
        await this.inputCity.fill(city);
        await this.address1.fill(address1);
        await this.zipCode.fill(zipCode);
        await this.phone.fill(phone);
        await this.btnBillingContinue.click();
    }

    async selectPaymentMethod() {
        await this.btnShippingContinue.click();
        await this.btnShippingMethodContinue.click();
        await this.radioCreditCard.check();
        await this.btnPaymentMethodContinue.click();
    }

    async fillPaymentInfo(cardType: string,cardholderName: string,cardNumber: string,expireMonth: string,
        expireYear: string,cardCode: string
    ) {
        await this.selectCardType.selectOption(cardType);
        await this.cardholderName.fill(cardholderName);
        await this.cardNumber.fill(cardNumber);
        await this.selectExpireMonth.selectOption(expireMonth);
        await this.selectExpireYear.selectOption(expireYear);
        await this.cardCode.fill(cardCode);
        await this.btnPaymentInfoContinue.click();
        const confirmPromise = this.page.waitForURL('**/checkout/completed/');
        await this.btnConfirm.click();
        await confirmPromise;
    }

    verifySuccessMessage(successMessage: string){
        this.getByText(successMessage);
    }

}