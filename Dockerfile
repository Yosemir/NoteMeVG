# Seleccionamos la imagen de Node.js como base para nuestra imagen de Docker
FROM node:14-alpine

ENV NG_CLI_ANALYTICS="false"

# Creamos un directorio de trabajo dentro de la imagen de Docker
WORKDIR /app

# Copiamos los archivos del proyecto a la imagen
COPY . .

# Instalamos las dependencias de Node.js
RUN npm install

# Damos permisos al directorio
RUN chmod -R 777 /app

# Compilamos la aplicación de Angular en modo de producción
RUN npm run build --prod

# Exponemos el puerto 80 de la imagen para que podamos acceder a la aplicación desde el navegador

EXPOSE 4200
# Comando que se ejecutará al iniciar el contenedor de Docker
CMD ["npm", "start"]
