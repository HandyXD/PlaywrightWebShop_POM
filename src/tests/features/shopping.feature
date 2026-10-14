Feature: Proceso de compra
  Yo como usuario registrado de la tienda Demo Web Shop
  Quiero seleccionar productos, pagarlos con tarjeta de crédito y confirmar mi orden
  Para recibirlos en la dirección que indico

  Background:
    Given el usuario ingresa a la aplicacion

  Scenario: Compra exitosa con tarjeta de credito
    Given el usuario se autentica con credenciales validas
    When el usuario navega a una categoria y subcategoria si existe
    And selecciona un producto y lo agrega al carrito
    Then el sistema debe mostrar el mensaje de producto agregado
    When el usuario ingresa al carrito y va al Checkout
    And ingresa su dirección de envío
    And selecciona Credit Card como metodo de pago
    And completa la informacion de pago para confirmar la orden
    Then el sistema debe mostrar el mensaje de orden procesada

#   @compra @alternativo
#   Scenario: Compra como invitado
#     When el usuario agrega un producto al carrito sin autenticarse
#     And ingresa al carrito y da clic en "Checkout"
#     Then el sistema debe mostrar la opción "Checkout as Guest"
#     When el usuario selecciona "Checkout as Guest"
#     And completa los datos de facturación y pago con tarjeta de crédito
#     Then el sistema debe mostrar el mensaje "Your order has been successfully processed!" 

#   @compra @negativo
#   Scenario Outline: Pago rechazado por información de tarjeta inválida
#     Given el usuario se autentica con credenciales válidas del usuario registrado en la HU-01
#     And el usuario tiene al menos un producto en el carrito
#     When el usuario inicia el proceso de Checkout
#     And selecciona el método de pago "Credit Card"
#     And ingresa el "<campo_tarjeta>" con "<valor>"
#     And confirma la orden
#     Then el sistema no debe procesar la orden
#     And debe mostrar el mensaje de error "<mensaje>"

#     Examples:
#       | campo_tarjeta     | valor             | mensaje                          |
#       | card number       | 1111111111111111  | Wrong card number or CVV         |
#       | card code         | 999               | Wrong card number or CVV         |
#       | cardholder name   | (vacío)           | Cardholder name is required      |
#       | expiration date   | 01/2020           | Expired card                     |

#   @compra @negativo
#   Scenario: Intento de checkout con carrito vacío
#     When ingresa al carrito de compras vacío
#     Then muestra el mensaje "Your Shopping Cart is empty!"

#   @compra @negativo
#   Scenario: Autenticación fallida antes de la compra
#     When el usuario intenta autenticarse con credenciales inválidas
#     Then el sistema debe mostrar el mensaje "Taki Taki"