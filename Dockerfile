FROM node:16.14.0 as build

WORKDIR /source

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Compilar la aplicación
RUN npm run build --prod && ls

RUN pwd

#RUN tar -czvf note-me-vg.tar.gz note-me-vg && ls



# Configurar el servidor web Nginx
FROM nginx:alpine
RUN chmod -R 777 /usr/share/nginx/html
COPY --from=build /source/dist/note-me-vg/* /usr/share/nginx/html/
#RUN tar -xzf /source/note-me-vg.tar.gz -C /usr/share/nginx/html && rm /usr/share/nginx/html/note-me-vg.tar.gz
COPY --from=build /source/nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 8080

# Iniciar Nginx al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]