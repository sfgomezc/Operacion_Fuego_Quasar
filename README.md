# Operacion_Fuego_Quasar

Challenge Meli - Operación Fuego de Quasar
Este proyecto es una REST API usando Node.js que es crear un programa que retorne la fuente y contenido del mensaje de auxilio.

## Se usa las siguiente librerías o módulos:

Se puede instalar todas las dependencias del archivo `package.json` con el siguiente comando o instalar cada una independiente:
```bash
npm install
```

Instalar framework express para escribir código de servidor (crear servidor, enrutador) y morgan para escribir las peticiones
```bash
npm i express morgan
```

Instalar (en ambiente Dev) modulo Nodemon para reiniciar el servidor cuando se haga cambios en el código
```bash
npm i nodemon -D
```

Instalar (en ambiente Dev) modulo Supertest modulo de node que permite hacer test de una Rest API, para hacer las peticiones.
Instalar (en ambiente Dev) modulo Jest Framework que permite compara objetos, si un array tiene elementos, conocer el tipo de dato, es decir, comparar las respuestas de las peticiones.
```bash
npm i -D supertest jest
```

Instalar modulo node-trilateration que permite técnica geométrica para determinar la posición de un objeto conociendo su distancia a 3 puntos de referencia
```bash
npm i node-trilateration
```

Ejecutar el proyecto con el archivo js que sirve como server
```bash
node server.js
```
Ejecutar el proyecto con el archivo js que sirve como server con Nodemon
```bash
nodemon server.js
```

Ejecutar el comando `dev` de los scripts, que se configura en el package.json (para ejecutar como server de desarrollo)
```bash
npm run dev
```
  

## Pruebas

Las pruebas se pueden realizar en un Client Rest como Postman pero en este caso se prueba con la extensión de Visual Code REST Client, ejecutandolo desde el archivos `api.rest`.

Ejecutar el comando `test` de los scripts, que se configura en el package.json (para ejecutar las pruebas unitarias)
```bash
npm run test
```
