Feature: Registro de usuario
  Yo como visitante de la tienda Demo Web Shop
  Quiero registrarme como nuevo usuario
  Para poder autenticarme y realizar compras en la aplicación

  Background:
    Given el usuario ingresa a la aplicacion

  Scenario: Registro exitoso de un nuevo usuario
    When el usuario da clic en la opción Register
    And ingresa sus datos de registro desde el JSON de prueba
    Then el sistema debe mostrar el mensaje de registro exitoso

#   @registro @negativo
#   Scenario Outline: Registro fallido por datos inválidos o vacíos
#     When el usuario da clic en la opción "Register"
#     And completa el formulario de registro con "<campo>" inválido
#     And da clic en el botón "Register"
#     Then el sistema debe mostrar el mensaje de error "<mensaje>"
#     And el usuario no debe quedar registrado

#     Examples:
#       | campo           | mensaje                                        |
#       | email vacío    | Email is required.                            |
#       | email inválido | Wrong email                                   |
#       | email existente| The specified email already exists             |
#       | password vacía | Password is required.                         |
#       | confirmación   | The password and confirmation password do not match. |
#       | nombre vacío   | First name is required.                       |
#       | apellido vacío | Last name is required.                        |


