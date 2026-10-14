import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures';
import BasePage from '../utils/BaseUtils';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import ShoppingCart from '../pages/ShoppingCart';
import CheckoutPage from '../pages/CheckoutPage';

const { Given, When, Then } = createBdd(test);

Given('el usuario ingresa a la aplicacion', async ({ page }) => {
    const basePage = new BasePage(page);
    await basePage.navigate('/');
    await basePage.toHaveTitle('Demo Web Shop');});

When('el usuario da clic en la opción Register', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToRegisterPage();


});

When('ingresa sus datos de registro desde el JSON de prueba', async ({ page, testData }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.register(
        testData.user_info.first_name, 
        testData.user_info.last_name, 
        testData.user_info.email, 
        testData.user_info.password, 
        testData.user_info.password,
    );
});

Then('el sistema debe mostrar el mensaje de registro exitoso', async ({ page, testData }) => {
    const registerPage = new RegisterPage(page);

    registerPage.verifySuccessMessage(testData.order_confirmation.msg_registration);
});



Given('el usuario se autentica con credenciales validas', async ({page, testData}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.goToLoginPage();
    await loginPage.authentication(testData.user_info.email, testData.user_info.password);
});

When('el usuario navega a una categoria y subcategoria si existe', async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.asideCategory();
    await homePage.asideSubcategory();
});

When('selecciona un producto y lo agrega al carrito', async ({page}) => {
    const productPage = new ProductPage(page);

    await productPage.addToCart();
});

Then('el sistema debe mostrar el mensaje de producto agregado', async ({page, testData}) => {
    const productPage = new ProductPage(page);
    
    productPage.verifySuccessMessage(testData.order_confirmation.msg_add_cart);
});

When('el usuario ingresa al carrito y va al Checkout', async ({page}) => {
    const homePage = new HomePage(page);
    const shoppingCart = new ShoppingCart(page);

    await homePage.goToShoppingCart();
    await shoppingCart.goToCheckout();
});

When('ingresa su dirección de envío', async ({page, testData}) => {
        const checkoutPage = new CheckoutPage(page);

    await checkoutPage.billingCheckout(
        testData.user_info.first_name,
        testData.user_info.last_name,
        testData.user_info.email,
        testData.shipping_address.country,
        testData.shipping_address.city,
        testData.shipping_address.address_1,
        testData.shipping_address.zip_postal_code,
        testData.shipping_address.phone_number
    );



});

When('selecciona Credit Card como metodo de pago', async ({page}) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.selectPaymentMethod();
});

When('completa la informacion de pago para confirmar la orden', async ({page, testData}) => {
    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.fillPaymentInfo(
        testData.payment_method.card_type,
        testData.payment_method.cardholder_name,
        testData.payment_method.card_number,
        testData.payment_method.expiration_month,
        testData.payment_method.expiration_year,
        testData.payment_method.card_code
    );
});

Then('el sistema debe mostrar el mensaje de orden procesada', async ({page, testData}) => {
    const checkoutPage = new CheckoutPage(page);

    checkoutPage.verifySuccessMessage(testData.order_confirmation.msg_order_ok);
});
