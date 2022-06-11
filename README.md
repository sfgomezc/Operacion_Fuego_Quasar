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

Instalar modulo node-trilateration que permite técnica geométrica para determinar la posición de un objeto conociendo su distancia a 3 puntos de referencia
```bash
npm i node-trilateration
```

Ejecutar el archivo js que sirve como server
```bash
node server.js
```
Ejecutar el archivo js que sirve como server con Nodemon
```bash
nodemon server.js
```

Ejecutar el comando dev, que se configura en el package.json (para ejecutar el js que sirve como server)
```bash
npm run dev
```
  

## Pruebas

Las pruebas se pueden realizar en un Client Rest como Postman pero en este caso se prueba con la extensión de Visual Code REST Client, ejecutandolo desde el archivos `api.rest`.
