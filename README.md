# Proyecto de Aplicación ecommerce

Este proyecto representa la culminación del curso de Backend de Coderhouse, donde se aplican los conceptos aprendidos a lo largo del programa.

## Configuración del Proyecto

El proyecto se desarrolla en Node.js utilizando módulos ES6. Es fundamental contar con una versión compatible de Node.js.

- **Versión de Node utilizada:** v18.16.1

- **Paquetes Utilizados:**
  - "bcrypt": "^5.1.1"
  - "cookie-parser": "^1.4.6"
  - "cron": "^3.1.6"
  - "dotenv": "^16.3.1"
  - "express": "^4.18.2"
  - "express-compression": "^1.0.2"
  - "express-handlebars": "^7.1.2"
  - "jsonwebtoken": "^9.0.2"
  - "mongoose": "^7.6.1"
  - "nanoid": "^5.0.3"
  - "nodemailer": "^6.9.7"
  - "nodemon": "^3.0.1"
  - "passport": "^0.6.0"
  - "passport-jwt": "^4.0.1"
  - "passport-local": "^1.0.0"
  - "socket.io": "^4.7.2"
  - "swagger-jsdoc": "^6.2.8"
  - "swagger-ui-express": "^5.0.0"
  - "sweetalert2": "^11.10.1"
  - "winston": "^3.11.0"
  - "chai": "^5.0.0"
  - "mocha": "^10.2.0"
  - "supertest": "^6.3.3"

## Repositorio en GitHub

El código fuente está disponible en el siguiente repositorio de GitHub: [Enlace al Repositorio](https://github.com/pablopinto85/proyectofinalbackend)

## Comandos de Ejecución

- **Ecommerce Principal:** `npm start`
- **Ejecución de Test:** `npm run test`

## Acceso al Sistema

Al ejecutar la aplicación, es posible ingresar con las siguientes credenciales:

- **Administrador:** pablopinto@usermail.com / contraseña: 123456
- **Usuario:** martin@usermail.com / contraseña: 123456
- **Usuario Premium:** ivonne@usermail.com / contraseña: 123456

## Notas Importantes

- Para probar la funcionalidad, asegúrese de utilizar las siguientes rutas:
  - http://localhost:8080/carts
  - http://localhost:8080/products
  - http://localhost:8080/users
  - http://localhost:8080/tickets

- Para verificar las funcionalidades de envío de correos, asegúrese de proporcionar una dirección de correo electrónico válida. Los correos serán enviados desde la dirección pablo.pinto1985@gmail.com.

- Para ejecutar los tests de manera completa, primero ejecute el proyecto con `npm start` y luego ejecute `npm run test` para asegurar el funcionamiento correcto de todas las pruebas.

## Documentación de la API

La documentación de la API se encuentra disponible en la siguiente URL: [Documentación de la API](http://localhost:8080/apidocs/)