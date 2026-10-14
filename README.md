# 🛒 Automatización de Pruebas – Demo Web Shop (Tricentis)

Suite de pruebas automatizadas E2E para la aplicación **Demo Web Shop** (`https://demowebshop.tricentis.com/`), construida con **Playwright** y **TypeScript**, utilizando el patrón **Page Object Model (POM)**, **Playwright-BDD (Cucumber/Gherkin)** para definición de escenarios y **Allure** para la generación de reportes.

## 📋 Historias de Usuario Cubiertas

### HU-01: Registro de usuario

```gherkin
DADO QUE ingreso a la aplicación ubicada en la URL https://demowebshop.tricentis.com/
CUANDO doy clic en la opción "Register"
Y/E ingreso los datos de registro
ENTONCES el sistema debe mostrar el mensaje "Your registration completed"
```

### HU-02: Proceso de compra

```gherkin
DADO QUE ingreso a la aplicación ubicada en la URL https://demowebshop.tricentis.com/
CUANDO me autentico con credenciales válidas (usuario registrado en la HU-01)
Y doy clic en una Categoría y, en caso de existir, en su Subcategoría
Y selecciono un producto y lo agrego al carrito
Y/E ingreso al carrito y doy clic en "Checkout"
Y/E ingreso los datos solicitados para la entrega
    (First name, Last name, Email, Country, State/Province, City, Address1,
    Zip/Postal code, Phone) y dejo los demás datos que cargan por defecto
Y selecciono "Credit Card" como método de pago
Y completo la información de pago:
    - Select credit card: Visa
    - Cardholder name: Barbara Gordon
    - Card number: 4485564059489345
    - Expiration date: 04/2039
    - Card Code: 123
Y confirmo la orden
ENTONCES el sistema debe mostrar el mensaje "Your order has been successfully processed!"
```

## 🧰 Tecnologías y Herramientas

| Herramienta | Uso |
|---|---|
| **Playwright** | Automatización E2E del navegador |
| **TypeScript** | Lenguaje de programación |
| **Page Object Model (POM)** | Patrón de diseño para mantenibilidad y reutilización de locators |
| **Playwright-BDD** | Definición de escenarios en Gherkin (Cucumber) sobre Playwright |
| **Allure** | Reportes de ejecución y evidencias |
